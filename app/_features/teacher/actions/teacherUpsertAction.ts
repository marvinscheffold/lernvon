"use server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/app/_utils/supabase/createSupabaseServerClient";
import { createSupabaseAdminClient } from "@/app/_utils/supabase/createSupabaseAdminClient";
import { httpResponseStatusCode } from "@/app/_utils/httpResponseStatusCode";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import { TeacherType } from "@/app/_utils/types/teacher";
import { getObjectFromFormData } from "@/app/_utils/getObjectFromFormData";
import {
  serverActionResponseSchema,
  ServerActionResponseType,
} from "@/app/_utils/serverActionResponseSchema";

const MAX_FILE_SIZE = 1000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const payloadSchema = z.object({
  name: z
    .string({ invalid_type_error: "Name muss Text sein" })
    .min(3, "Name muss mindestens 3 Zeichen lang sein")
    .max(32, "Name darf maximal 32 Zeichen lang sein")
    .nullable()
    .optional(),
  pricePerHour: z.coerce
    .number({ invalid_type_error: "Preis pro Stunde muss eine Zahl sein" })
    .positive("Preis pro Stunde muss positiv sein")
    .nullable()
    .optional(),
  email: z
    .string({ invalid_type_error: "E-Mail muss Text sein" })
    .email("E-Mail muss gültig sein")
    .nullable()
    .optional(),
  about: z
    .string()
    .min(32, "Beschreibung muss mindestens 32 Zeichen lang sein")
    .max(1000, "Beschreibung darf maximal 1000 Zeichen lang sein")
    .nullable()
    .optional(),
  videoThumbnailFile: z
    .any()
    .refine(
      (file) => file?.size <= MAX_FILE_SIZE,
      `Die maximale Dateigröße ist 1MB`
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Nur .jpg, .jpeg, .png und .webp Formate werden unterstützt"
    )
    .optional(),
  youtubeVideoUrl: z
    .string()
    .refine(
      (s) => /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]{11}$/.test(s),
      "YouTube-Video-URL muss eine gültige YouTube-Embed-URL sein"
    )
    .nullable()
    .optional(),
  phoneNumber: z
    .string()
    .refine(
      (s) => /^\+\d+$/.test(s),
      "Telefonnummer muss mit + anfangen, darf nur aus Zahlen bestehen und darf keine Leerzeichen enthalten"
    )
    .nullable()
    .optional(),
  whatsappPhoneNumber: z
    .string()
    .refine(
      (s) => /^\+\d+$/.test(s),
      "WhatsApp-Nummer muss mit + anfangen, darf nur aus Zahlen bestehen und darf keine Leerzeichen enthalten"
    )
    .nullable()
    .optional(),
  telegramUsername: z
    .string()
    .min(5, "Telegram-Benutzername muss mindestens 5 Zeichen lang sein")
    .max(32, "Telegram-Benutzername darf maximal 32 Zeichen lang sein")
    .nullable()
    .optional(),
});

export async function teacherUpsertAction(
  payload: FormData
): Promise<ServerActionResponseType> {
  try {
    const supabaseServiceRole = createSupabaseAdminClient();
    const supabase = createSupabaseServerClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (!user || userError) {
      throw httpResponseStatusCode.Unauthorized;
    }

    const { data: payloadVerified, error: payloadError } =
      payloadSchema.safeParse(getObjectFromFormData(payload));

    if (payloadError) {
      throw {
        ...httpResponseStatusCode.BadRequest,
        message: payloadError.flatten().fieldErrors,
      };
    }

    let teacher = null;
    const readRequest = await supabaseServiceRole
      .from("teacher")
      .select()
      .eq("userId", user.id)
      .single();
    teacher = readRequest.data;

    if (!teacher) {
      const insertRequest = await supabaseServiceRole
        .from("teacher")
        .insert({
          userId: user.id,
          isVisible: false,
        })
        .select()
        .single();

      if (insertRequest.error || !insertRequest.data) {
        throw {
          ...httpResponseStatusCode.InternalServerError,
          message: insertRequest.error.message,
        };
      }

      teacher = insertRequest.data;
    }

    let videoThumbnailPath = null;
    if (payloadVerified.videoThumbnailFile) {
      videoThumbnailPath = await uploadVideoThumbnailFile({
        teacherId: teacher.id,
        videoThumbnailFile: payloadVerified.videoThumbnailFile,
      });
    }

    const updateRequest = await supabaseServiceRole
      .from("teacher")
      .update({
        name: payloadVerified.name,
        pricePerHour: payloadVerified.pricePerHour,
        email: payloadVerified.email,
        youtubeVideoUrl: payloadVerified.youtubeVideoUrl,
        phoneNumber: payloadVerified.phoneNumber,
        whatsappPhoneNumber: payloadVerified.whatsappPhoneNumber,
        telegramUsername: payloadVerified.telegramUsername,
        about: payloadVerified.about,
        videoThumbnailPath: videoThumbnailPath ?? undefined,
      })
      .eq("id", teacher.id);

    if (updateRequest.error)
      throw {
        ...httpResponseStatusCode.InternalServerError,
        message: updateRequest.error.message,
      };

    revalidatePath("/");
    return httpResponseStatusCode.Ok;
  } catch (error) {
    console.log(error);
    if (typeof error === "object" && error !== null) {
      const { data: errorVerified } =
        serverActionResponseSchema.safeParse(error);
      if (errorVerified) return errorVerified;
    }
    return httpResponseStatusCode.InternalServerError;
  }
}

async function uploadVideoThumbnailFile({
  teacherId,
  videoThumbnailFile,
}: {
  teacherId: TeacherType["id"];
  videoThumbnailFile: File;
}): Promise<string> {
  const folderName = "video-thumbnail";
  const supabaseServiceRole = createSupabaseAdminClient();

  const { data: list } = await supabaseServiceRole.storage
    .from("teacher")
    .list(`${teacherId}/${folderName}`);

  if (list) {
    const filesToRemove = list.map(
      (f) => `${teacherId}/${folderName}/${f.name}`
    );
    await supabaseServiceRole.storage.from("teacher").remove(filesToRemove);
  }

  const newVideoThumbnailPath = `${teacherId}/${folderName}/${uuidv4()}`;
  const { error } = await supabaseServiceRole.storage
    .from("teacher")
    .upload(newVideoThumbnailPath, videoThumbnailFile, {
      upsert: true,
    });

  if (error) {
    throw {
      ...httpResponseStatusCode.InternalServerError,
      message: error.message,
    };
  }

  return newVideoThumbnailPath;
}
