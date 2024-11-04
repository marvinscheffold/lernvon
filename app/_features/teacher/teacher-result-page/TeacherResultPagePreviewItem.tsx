import { TeacherContactButton } from "@/app/_features/teacher/TeacherContactButton";
import { TeacherVideoThumbnail } from "@/app/_features/teacher/TeacherVideoThumbnail";
import { TEACHER_ROUTE } from "@/app/_utils/constants/routes";
import { TeacherType, TeacherWithPoolsType } from "@/app/_utils/types/teacher";
import { Button, Chip, Typography } from "@mui/material";
import Link from "next/link";

export function TeacherResultPagePreviewItem(teacher: TeacherWithPoolsType) {
  const {
    id,
    name,
    pricePerHour,
    about,
    videoThumbnailPath,
    youtubeVideoUrl,
    pools,
  } = teacher;
  return (
    <div className="@container w-full">
      <div className="flex flex-col @3xl:flex-row gap-6">
        <div className="w-full @3xl:w-96 flex-shrink-0">
          <TeacherVideoThumbnail
            videoThumbnailPath={videoThumbnailPath}
            youtubeVideoUrl={youtubeVideoUrl}
            name={name}
          />
        </div>
        <div className="flex-grow flex flex-col gap-4">
          <div className="flex w-full">
            <div className="flex-grow">
              <Typography variant="h5">{name}</Typography>
            </div>
            <div className="flex flex-col">
              <Typography variant="h5">{pricePerHour} €</Typography>
              <Typography variant="caption" color="textSecondary">
                pro Stunde
              </Typography>
            </div>
          </div>
          {pools.length > 0 && (
            <div className="flex gap-2 flex-wrap">
              {pools.slice(0, 3).map((pool) => (
                <Chip
                  key={pool.id}
                  variant="outlined"
                  size="small"
                  label={pool.name}
                />
              ))}
              <TeacherResultPagePreviewItemPoolsAddon
                numberOfPools={pools.length}
              />
            </div>
          )}
          <TeacherResultPagePreviewItemAbout about={about} />
          <div className="flex gap-2 flex-col md:flex-row">
            <Link href={TEACHER_ROUTE(id)} className="flex-grow md:flex-grow-0">
              <Button className="w-full" variant="outlined" color="secondary">
                Profil öffnen
              </Button>
            </Link>
            <TeacherContactButton
              teacher={teacher}
              buttonProps={{
                className: "flex-grow md:flex-grow-0",
                variant: "contained",
                color: "primary",
              }}
            >
              Nachricht senden
            </TeacherContactButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeacherResultPagePreviewItemPoolsAddon({
  numberOfPools,
}: {
  numberOfPools: number;
}) {
  if (numberOfPools === 4)
    return (
      <Typography variant="caption" color="textSecondary">
        und ein weiteres Schwimmbad
      </Typography>
    );

  if (numberOfPools > 4)
    return (
      <Typography variant="caption" color="textSecondary">
        und {numberOfPools - 3} weitere Schwimmbäder
      </Typography>
    );

  return null;
}

function TeacherResultPagePreviewItemAbout({
  about,
}: {
  about: TeacherType["about"];
}) {
  if (!about) return null;
  if (about.length < 124)
    return <Typography variant="body1">{about}</Typography>;
  return <Typography variant="body1">{about.slice(0, 124)}...</Typography>;
}
