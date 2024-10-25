import { SubmitButton } from "@/app/_components/SubmitButton";
import { deleteTeacherAction } from "@/app/_features/teacher/deleteTeacherAction";
import { Delete } from "@mui/icons-material";

export function TeacherDeleteButton() {
  return (
    <form action={deleteTeacherAction}>
      <SubmitButton variant="contained" color="error" startIcon={<Delete />}>
        Delete
      </SubmitButton>
    </form>
  );
}
