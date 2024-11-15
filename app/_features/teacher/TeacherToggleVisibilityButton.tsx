"use client";

import { SubmitButton } from "@/app/_components/SubmitButton";
import { teacherUpdateVisibilityAction } from "@/app/_features/teacher/actions/teacherUpdateVisibilityAction";
import { TeacherType } from "@/app/_utils/types/teacher";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type TeacherToggleVisibilityButtonProps = {
  teacher: TeacherType;
};

export function TeacherToggleVisibilityButton({
  teacher,
}: TeacherToggleVisibilityButtonProps) {
  return (
    <form
      action={async (formData) => {
        if (teacher.isVisible) {
          formData.append("isVisible", "false");
        } else {
          formData.append("isVisible", "true");
        }

        const response = await teacherUpdateVisibilityAction(formData);
        console.log(response);
      }}
    >
      <SubmitButton
        variant={"outlined"}
        color="secondary"
        startIcon={teacher.isVisible ? <VisibilityOff /> : <Visibility />}
        disabled={
          teacher.name === null ||
          teacher.email === null ||
          teacher.videoThumbnailPath === null ||
          teacher.pricePerHour === null
        }
      >
        {teacher.isVisible
          ? "Profil unsichtbar machen"
          : "Profil sichtbar machen"}
      </SubmitButton>
    </form>
  );
}
