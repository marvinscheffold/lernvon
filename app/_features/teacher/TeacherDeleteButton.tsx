import { SubmitButton } from "@/app/_components/SubmitButton";
import { teacherDeleteAction } from "@/app/_features/teacher/actions/teacherDeleteAction";
import { Delete } from "@mui/icons-material";

export function TeacherDeleteButton() {
  return (
    <form action={teacherDeleteAction}>
      <SubmitButton variant="outlined" color="error" startIcon={<Delete />}>
        Delete profile
      </SubmitButton>
    </form>
  );
}
