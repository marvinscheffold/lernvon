import { Section } from "@/app/_components/Section";
import { TeacherCreatePagePoolsForm } from "@/app/_features/teacher/teacher-create-page/TeacherCreatePagePoolsForm";
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
    .select("pool(*)")
    .eq("userId", user.id)
    .single();

  return (
    <Section>
      <Typography variant="h5">Schwimmbäder</Typography>
      <TeacherCreatePagePoolsForm pools={teacher?.pool || []} />
    </Section>
  );
}
