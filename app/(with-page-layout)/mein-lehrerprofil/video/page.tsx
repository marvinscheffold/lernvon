import { Section } from "@/app/_components/Section";
import { TeacherCreatePageVideoForm } from "@/app/_features/teacher/teacher-create-page/TeacherCreatePageVideoForm";
import { httpResponseStatusCode } from "@/app/_utils/httpResponseStatusCode";
import { createSupabaseServerClient } from "@/app/_utils/supabase/createSupabaseServerClient";
import { createSupabaseAdminClient } from "@/app/_utils/supabase/createSupabaseAdminClient";
import { Typography } from "@mui/material";

export default async function Page() {
  const {
    data: { user },
    error: userError,
  } = await createSupabaseServerClient().auth.getUser();

  if (!user || userError) throw httpResponseStatusCode.Unauthorized;

  const { data: teacher } = await createSupabaseAdminClient()
    .from("teacher")
    .select()
    .eq("userId", user.id)
    .single();

  return (
    <Section>
      <Typography variant="h5">Video</Typography>
      <TeacherCreatePageVideoForm teacher={teacher} />
    </Section>
  );
}
