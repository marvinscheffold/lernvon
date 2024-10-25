"use client";

import { SubmitButton } from "@/app/_components/SubmitButton";
import { upsertTeacherAction } from "@/app/_features/teacher/upsertTeacherAction";
import { TeacherType } from "@/app/_utils/types/teacher";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type TeacherToggleVisibilityButtonProps = {
  isVisible: TeacherType["isVisible"];
};

export function TeacherToggleVisibilityButton({
  isVisible,
}: TeacherToggleVisibilityButtonProps) {
  return (
    <form
      action={async (formData) => {
        if (isVisible) {
          formData.append("isVisible", "false");
        } else {
          formData.append("isVisible", "true");
        }

        const response = await upsertTeacherAction(formData);
        return console.log(response);
      }}
    >
      <SubmitButton
        variant="outlined"
        startIcon={isVisible ? <VisibilityOff /> : <Visibility />}
      >
        {isVisible ? "Make invisible" : "Make visible"}
      </SubmitButton>
    </form>
  );
}
