"use client";

import { SectionRow } from "@/app/_components/Section";
import { Save } from "@mui/icons-material";
import { Alert, TextField } from "@mui/material";
import { teacherUpsertAction } from "@/app/_features/teacher/actions/teacherUpsertAction";
import { TeacherType } from "@/app/_utils/types/teacher";
import { SubmitButton } from "@/app/_components/SubmitButton";
import { ServerActionResponseAlert } from "@/app/_components/ServerActionResponseAlert";
import { useMutation } from "@tanstack/react-query";

type TeacherCreatePageContactFormProps = {
  teacher: TeacherType | null;
};

export function TeacherCreatePageContactForm({
  teacher,
}: TeacherCreatePageContactFormProps) {
  const mutation = useMutation({ mutationFn: handleSubmit });
  async function handleSubmit(formData: FormData) {
    if ((formData.get("whatsappPhoneNumber") as string).length === 0) {
      formData.delete("whatsappPhoneNumber");
    }
    if ((formData.get("phoneNumber") as string).length === 0) {
      formData.delete("phoneNumber");
    }
    if ((formData.get("telegramUsername") as string).length === 0) {
      formData.delete("telegramUsername");
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
            autoComplete="off"
            className="w-full"
            helperText="Zum Beispiel: +4915255551111"
            label="Deine Telefonnummer"
            name="phoneNumber"
            defaultValue={teacher?.phoneNumber}
          />
        }
        rightChildren={
          <Alert className="w-full" severity="info" variant="outlined">
            Deine Nummer muss mit der Landesvorwahl beginnen. Zum Beispiel +49
            für Deutschland.
          </Alert>
        }
      />
      <SectionRow
        leftChildren={
          <TextField
            autoComplete="off"
            className="w-full"
            helperText="Zum Beispiel: +4915255551111"
            label="Deine WhatsApp-Telefonnummer"
            name="whatsappPhoneNumber"
            defaultValue={teacher?.whatsappPhoneNumber}
          />
        }
        rightChildren={
          <Alert className="w-full" severity="info" variant="outlined">
            Deine Nummer muss mit der Landesvorwahl beginnen. Zum Beispiel +49
            für Deutschland.
          </Alert>
        }
      />
      <SectionRow
        leftChildren={
          <TextField
            autoComplete="off"
            className="w-full"
            helperText="Zum Beispiel: banana123"
            label="Dein Telegram-Benutzername"
            name="telegramUsername"
            defaultValue={teacher?.telegramUsername}
          />
        }
        rightChildren={
          <Alert className="w-full" severity="info" variant="outlined">
            Dein Telegram-Benutzername sollte zwischen 5 und 32 Zeichen lang
            sein.
          </Alert>
        }
      />

      <ServerActionResponseAlert serverActionResponse={mutation.data} />

      <div>
        <SubmitButton
          loadingPosition="start"
          startIcon={<Save />}
          variant="contained"
        >
          Speichern
        </SubmitButton>
      </div>
    </form>
  );
}
