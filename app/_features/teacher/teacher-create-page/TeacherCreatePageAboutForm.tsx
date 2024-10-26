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
            helperText="For example: Hey! I'm John, and I love to teach swimming."
            label="Write something about you"
            name="about"
            defaultValue={teacher?.about}
            multiline
            rows={14}
          />
        }
        rightChildren={
          <Alert className="w-full" severity="info" variant="outlined">
            Here you can write about how your lessons are structured, why you
            teach swimming, when you are available or anything else that comes
            to mind. Your text should be between 32 and 1000 characters long.
          </Alert>
        }
      />
      <div>
        <SubmitButton
          loadingPosition="start"
          startIcon={<Save />}
          variant="contained"
        >
          Save
        </SubmitButton>
      </div>
    </form>
  );
}
