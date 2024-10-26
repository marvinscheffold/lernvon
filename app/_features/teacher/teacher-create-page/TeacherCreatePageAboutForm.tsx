"use client";

import { SectionRow } from "@/app/_components/Section";
import { Save } from "@mui/icons-material";
import { Alert, TextField } from "@mui/material";
import { teacherUpsertAction } from "@/app/_features/teacher/actions/teacherUpsertAction";
import { TeacherType } from "@/app/_utils/types/teacher";
import { SubmitButton } from "@/app/_components/SubmitButton";

type TeacherCreatePageAboutFormProps = {
  teacher: TeacherType | null;
};

export function TeacherCreatePageAboutForm({
  teacher,
}: TeacherCreatePageAboutFormProps) {
  async function handleSubmit(formData: FormData) {
    const response = await teacherUpsertAction(formData);
    console.log(response);
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-8">
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
            was dir sonst in den Sinn kommt. Dein Text sollte zwischen 32 und
            1000 Zeichen lang sein.
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
    </form>
  );
}
