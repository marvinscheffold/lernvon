"use client";

import { SectionRow } from "@/app/_components/Section";
import { Save } from "@mui/icons-material";
import {
  Alert,
  Button,
  FormHelperText,
  InputAdornment,
  TextField,
} from "@mui/material";
import { ReactNode, useRef, useState } from "react";
import { teacherUpsertAction } from "@/app/_features/teacher/actions/teacherUpsertAction";
import { TeacherType } from "@/app/_utils/types/teacher";
import { SubmitButton } from "@/app/_components/SubmitButton";
import Image from "next/image";
import { createSupabaseBrowserClient } from "@/app/_utils/supabase/createSupabaseBrowserClient";
import { Image as ImageIcon } from "@mui/icons-material";
import { useMutation } from "@tanstack/react-query";
import { ServerActionResponseAlert } from "@/app/_components/ServerActionResponseAlert";

type TeacherCreatePageMandatoryFormProps = {
  teacher: TeacherType | null;
};

export function TeacherCreatePageMandatoryForm({
  teacher,
}: TeacherCreatePageMandatoryFormProps) {
  const mutation = useMutation({ mutationFn: handleSubmit });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  async function handleSubmit(formData: FormData) {
    if (!selectedFile) {
      formData.delete("videoThumbnailFile");
    }

    return await teacherUpsertAction(formData);
  }

  return (
    <form
      action={(formData) => mutation.mutate(formData)}
      className="flex flex-col gap-8"
    >
      <SectionRow
        leftChildren={
          <TextField
            className="w-full"
            helperText="Zum Beispiel: John Doe"
            label="Dein Name"
            required
            name="name"
            defaultValue={teacher?.name}
          />
        }
        rightChildren={
          <Alert className="w-full" severity="info" variant="outlined">
            Dein Name sollte zwischen 3 und 32 Zeichen lang sein.
          </Alert>
        }
      />
      <SectionRow
        leftChildren={
          <TextField
            className="w-full"
            helperText="Zum Beispiel: 45 €"
            label="Dein Preis pro Stunde"
            required
            slotProps={{
              input: {
                endAdornment: <InputAdornment position="end">€</InputAdornment>,
              },
            }}
            type="number"
            name="pricePerHour"
            defaultValue={teacher?.pricePerHour}
          />
        }
        rightChildren={
          <Alert className="w-full" severity="info" variant="outlined">
            Durch die Angabe eines Preises pro Stunde können Schüler dich besser
            mit anderen Lehrern vergleichen. Auch wenn du keine 60-minütigen
            Lektionen anbietest, versuche den Preis für eine 60-minütige Lektion
            zu berechnen. Du kannst weitere Preise und Kursdauern im Abschnitt
            „Über dich“ hinzufügen.
          </Alert>
        }
      />
      <SectionRow
        leftChildren={
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <TeacherCreatePageMandatoryInformationVideoThumbnail
                selectedFile={selectedFile}
                videoThumbnailPath={teacher?.videoThumbnailPath}
              />

              <div className="ml-[14px]">
                <FormHelperText>
                  Optimales Seitenverhältnis 16:9, 1280x720px oder größer, jpg,
                  jpeg oder png, max. 1MB.
                </FormHelperText>
              </div>
            </div>
            <div>
              <Button
                variant="outlined"
                onClick={() => {
                  if (!inputRef.current) return;
                  inputRef.current.click();
                }}
              >
                Bild auswählen*
                <input
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    if (!event.target.files) return;
                    setSelectedFile(event.target.files[0]);
                  }}
                  ref={inputRef}
                  name="videoThumbnailFile"
                />
              </Button>
            </div>
          </div>
        }
        rightChildren={
          <Alert className="w-full" severity="info" variant="outlined">
            Schüler fühlen sich wohler, wenn sie Lehrer mit einem Bild
            kontaktieren. Versuche ein Bild hochzuladen, das dich in oder an
            einem Pool zeigt. Zeige dein Gesicht und lächle.
          </Alert>
        }
      />
      <SectionRow
        leftChildren={
          <TextField
            className="w-full"
            helperText="Zum Beispiel: john.doe@gmail.com"
            label="Deine E-Mail-Adresse"
            required
            type="email"
            name="email"
            defaultValue={teacher?.email}
          />
        }
        rightChildren={
          <Alert className="w-full" severity="info" variant="outlined">
            Schüler benötigen mindestens eine Kontaktmöglichkeit. Daher ist die
            Angabe einer E-Mail-Adresse verpflichtend.
          </Alert>
        }
      />
      <SectionRow
        leftChildren={
          <TextField
            className="w-full"
            helperText="Zum Beispiel: Hey! Ich bin John und unterrichte gerne Schwimmen."
            label="Schreibe etwas über dich"
            name="about"
            defaultValue={teacher?.about}
            multiline
            rows={14}
          />
        }
        rightChildren={
          <Alert className="w-full" severity="info" variant="outlined">
            Hier kannst du darüber schreiben, wie dein Unterricht strukturiert
            ist, warum du Schwimmen unterrichtest, wann du verfügbar bist oder
            was dir sonst in den Sinn kommt. Dein Text muss zwischen 32 und 1000
            Zeichen lang sein.
          </Alert>
        }
      />
      <div>
        <SubmitButton
          loadingPosition="start"
          startIcon={<Save />}
          variant="contained"
        >
          Speichern
        </SubmitButton>
      </div>
      <ServerActionResponseAlert serverActionResponse={mutation.data} />
    </form>
  );
}

type TeacherCreatePageMandatoryInformationVideoThumbnailProps = {
  selectedFile: File | null;
  videoThumbnailPath?: string | null;
};

function TeacherCreatePageMandatoryInformationVideoThumbnail({
  selectedFile,
  videoThumbnailPath,
}: TeacherCreatePageMandatoryInformationVideoThumbnailProps) {
  function Container(children: ReactNode) {
    return (
      <div className="w-full aspect-video rounded-xl sm:rounded-2xl border border-neutral-100 flex items-center justify-center relative overflow-hidden">
        {children}
      </div>
    );
  }

  if (selectedFile) {
    return Container(
      <Image
        alt="image of teacher"
        src={URL.createObjectURL(selectedFile)}
        fill
        style={{
          objectFit: "cover",
        }}
      />
    );
  }

  if (videoThumbnailPath) {
    const {
      data: { publicUrl },
    } = createSupabaseBrowserClient()
      .storage.from("teacher")
      .getPublicUrl(videoThumbnailPath);
    return Container(
      <Image
        alt="image of teacher"
        src={publicUrl}
        fill
        style={{
          objectFit: "cover",
        }}
      />
    );
  }

  return Container(
    <ImageIcon
      style={{ width: "56px", height: "56px" }}
      className="text-neutral-100 text-4xl"
    />
  );
}
