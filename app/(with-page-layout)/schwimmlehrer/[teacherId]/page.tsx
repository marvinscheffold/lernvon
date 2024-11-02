import { Container } from "@/app/_components/Container";
import { Section } from "@/app/_components/Section";
import { TeacherVideoThumbnail } from "@/app/_features/teacher/TeacherVideoThumbnail";
import { httpResponseStatusCode } from "@/app/_utils/httpResponseStatusCode";
import { createSupabaseAdminClient } from "@/app/_utils/supabase/createSupabaseAdminClient";
import { TeacherType } from "@/app/_utils/types/teacher";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export default async function Page({
  params,
}: {
  params: Promise<{ teacherId: string }>;
}) {
  const { data: teacher } = await createSupabaseAdminClient()
    .from("teacher")
    .select("*, pools:pool(*)")
    .eq("id", (await params).teacherId)
    .single();

  if (!teacher) throw httpResponseStatusCode.NotFound;

  return (
    <Container>
      <div className="flex gap-12">
        <div className="flex-grow">
          <div className="py-8 md:py-12 lg:pb-0">
            <Typography variant="h4" component={"h1"}>
              {teacher.name}
            </Typography>
          </div>
          <div className="block lg:hidden">
            <CtaCardContent teacher={teacher} />
          </div>
          {teacher.about && (
            <Section>
              <Typography variant="h5">Über mich</Typography>
              <Typography variant="body1">{teacher.about}</Typography>
            </Section>
          )}
          {teacher.pools.length > 0 && (
            <Section>
              <div className="flex flex-col gap-2">
                <Typography variant="h5">Schwimmbäder</Typography>
                <Typography variant="body2" color="textSecondary">
                  In diesen Schwimmbädern unterrichte ich
                </Typography>
              </div>
              <List>
                {teacher.pools.map((pool) => (
                  <ListItem key={pool.id} disableGutters divider>
                    <ListItemText
                      primary={pool.name}
                      secondary={`${pool.street} ${pool.streetNumber}, ${pool.zip} ${pool.city}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Section>
          )}
        </div>
        <div className="hidden lg:block w-[480px] flex-shrink-0 py-8">
          <div className="p-6 rounded-3xl border border-gray-200 sticky top-8 h-auto">
            <CtaCardContent teacher={teacher} />
          </div>
        </div>
      </div>
    </Container>
  );
}

function CtaCardContent({ teacher }: { teacher: TeacherType }) {
  return (
    <div className="flex flex-col gap-6">
      <TeacherVideoThumbnail
        youtubeVideoUrl={teacher.youtubeVideoUrl}
        videoThumbnailPath={teacher.videoThumbnailPath}
        name={teacher.name}
      />
      <div className="flex flex-col items-center">
        <Typography variant="h4">{teacher.pricePerHour} €</Typography>
        <Typography variant="body2" color="textSecondary">
          pro Stunde
        </Typography>
      </div>
      <Button variant="contained" size="large">
        Nachricht senden
      </Button>
    </div>
  );
}
