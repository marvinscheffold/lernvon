"use client";

import { SectionRow } from "@/app/_components/Section";
import { Save } from "@mui/icons-material";
import { Alert, TextField } from "@mui/material";
import { teacherUpsertAction } from "@/app/_features/teacher/actions/teacherUpsertAction";
import { TeacherType } from "@/app/_utils/types/teacher";
import { SubmitButton } from "@/app/_components/SubmitButton";

type TeacherCreatePageContactFormProps = {
  teacher: TeacherType | null;
};

export function TeacherCreatePageContactForm({
  teacher,
}: TeacherCreatePageContactFormProps) {
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
    const response = await teacherUpsertAction(formData);
    console.log(response);
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-8">
      <SectionRow
        leftChildren={
          <TextField
            className="w-full"
            helperText="For example: 004915255551111"
            label="Your phone number"
            name="phoneNumber"
            type="number"
            defaultValue={teacher?.phoneNumber}
          />
        }
        rightChildren={
          <Alert className="w-full" severity="info" variant="outlined">
            Your number should start with the country code. For example 0049 for
            germany.
          </Alert>
        }
      />
      <SectionRow
        leftChildren={
          <TextField
            className="w-full"
            helperText="For example: 004915255551111"
            label="Your WhatsApp phone number"
            type="number"
            name="whatsappPhoneNumber"
            defaultValue={teacher?.whatsappPhoneNumber}
          />
        }
        rightChildren={
          <Alert className="w-full" severity="info" variant="outlined">
            Your number should start with the country code. For example 0049 for
            germany.
          </Alert>
        }
      />
      <SectionRow
        leftChildren={
          <TextField
            className="w-full"
            helperText="For example: banana123"
            label="Your Telegram username"
            name="telegramUsername"
            defaultValue={teacher?.telegramUsername}
          />
        }
        rightChildren={
          <Alert className="w-full" severity="info" variant="outlined">
            Your telegram username should be between 5 and 32 characters long.
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
