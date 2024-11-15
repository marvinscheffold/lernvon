import { Container } from "@/app/_components/Container";
import { Result } from "@/app/_components/Result";
import { Section } from "@/app/_components/Section";
import { TeacherContactButton } from "@/app/_features/teacher/TeacherContactButton";
import { TeacherVideoThumbnail } from "@/app/_features/teacher/TeacherVideoThumbnail";
import { SWIMMING_TEACHERS_ROUTE } from "@/app/_utils/constants/routes";
import { createSupabaseAdminClient } from "@/app/_utils/supabase/createSupabaseAdminClient";
import { TeacherType } from "@/app/_utils/types/teacher";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

export default async function Page({
  params,
}: {
  params: Promise<{ teacherId: string }>;
}) {
  const { data: teacher } = await createSupabaseAdminClient()
    .from("teacher")
    .select("*, pools:pool(*)")
    .eq("id", (await params).teacherId)
    .eq("isVisible", true)
    .single();

  if (!teacher)
    return (
      <Result
        tagline="404 - Seite nicht gefunden"
        title="Lehrer nicht gefunden"
        subTitle="Um deine Schwimmreise fortzuführen kannst du nach anderen Lehrern suchen."
        linkButton={{
          text: "Andere Lehrer suchen",
          href: SWIMMING_TEACHERS_ROUTE,
        }}
      />
    );

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
          <Section>
            <Typography variant="h5" component={"h2"}>
              Beschreibung
            </Typography>
            <Typography variant="body1" className="whitespace-pre-wrap">
              {teacher.about}
            </Typography>
          </Section>
          {teacher.pools.length > 0 && (
            <Section>
              <div className="flex flex-col gap-2">
                <Typography variant="h5" component={"h2"}>
                  Schwimmbäder
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
          <div className="p-6 rounded-3xl border border-neutral-100 sticky top-8 h-auto">
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
      <TeacherContactButton
        teacher={teacher}
        buttonProps={{ variant: "contained", size: "large" }}
      >
        Nachricht senden
      </TeacherContactButton>
    </div>
  );
}
