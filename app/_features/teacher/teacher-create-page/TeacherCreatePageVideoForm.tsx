"use client";

import { SectionRow } from "@/app/_components/Section";
import { Save } from "@mui/icons-material";
import { Alert, FormHelperText, TextField } from "@mui/material";
import { teacherUpsertAction } from "@/app/_features/teacher/actions/teacherUpsertAction";
import { TeacherType } from "@/app/_utils/types/teacher";
import { SubmitButton } from "@/app/_components/SubmitButton";
import { useState } from "react";
import { YoutubeVideo } from "@/app/_components/YoutubeVideo";
import { useMutation } from "@tanstack/react-query";
import { ServerActionResponseAlert } from "@/app/_components/ServerActionResponseAlert";

type TeacherCreatePageVideoFormProps = {
  teacher: TeacherType | null;
};

export function TeacherCreatePageVideoForm({
  teacher,
}: TeacherCreatePageVideoFormProps) {
  const mutation = useMutation({ mutationFn: teacherUpsertAction });

  const [youtubeVideoUrl, setYoutubeVideoUrl] = useState(
    teacher?.youtubeVideoUrl || null
  );

  return (
    <form
      action={(formData) => mutation.mutate(formData)}
      className="flex flex-col gap-8"
    >
      <SectionRow
        leftChildren={
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <YoutubeVideo youtubeVideoUrl={youtubeVideoUrl} />
              <div className="ml-[14px]">
                <FormHelperText>
                  Dieses Video wird angezeigt, wenn Nutzer auf dein Bild
                  klicken.
                </FormHelperText>
              </div>
            </div>
            <div>
              <TextField
                className="w-full"
                helperText="Zum Beispiel: https://www.youtube.com/embed/dQw4w9WgXcQ"
                label="Füge eine YouTube-Embed-URL ein"
                name="youtubeVideoUrl"
                value={youtubeVideoUrl}
                onChange={(event) => setYoutubeVideoUrl(event.target.value)}
              />
            </div>
          </div>
        }
        rightChildren={
          <Alert className="w-full" severity="info" variant="outlined">
            Ein Video hilft dir, mehr Nachrichten von Schülern zu erhalten, da
            diese ein besseres Gefühl für dich und deinen Unterrichtsstil
            bekommen. Versuche, ein Video im Schwimmbad hochzuladen, das erzielt
            die besten Ergebnisse. <br></br> <br></br> Um die Embed-URL zu
            finden, öffne ein Video auf YouTube, klicke auf „Teilen“ und dann
            auf „Einbetten“.
          </Alert>
        }
      />
      <div>
        <SubmitButton
          loadingPosition="start"
          startIcon={<Save />}
          variant="contained"
        >
          Speichern
        </SubmitButton>
      </div>
      <ServerActionResponseAlert serverActionResponse={mutation.data} />
    </form>
  );
}
