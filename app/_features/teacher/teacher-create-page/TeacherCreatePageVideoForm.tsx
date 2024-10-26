"use client";

import { SectionRow } from "@/app/_components/Section";
import { Save } from "@mui/icons-material";
import { Alert, FormHelperText, TextField } from "@mui/material";
import { teacherUpsertAction } from "@/app/_features/teacher/actions/teacherUpsertAction";
import { TeacherType } from "@/app/_utils/types/teacher";
import { SubmitButton } from "@/app/_components/SubmitButton";
import { useState } from "react";
import { YoutubeVideo } from "@/app/_components/YoutubeVideo";

type TeacherCreatePageVideoFormProps = {
  teacher: TeacherType | null;
};

export function TeacherCreatePageVideoForm({
  teacher,
}: TeacherCreatePageVideoFormProps) {
  const [youtubeVideoUrl, setYoutubeVideoUrl] = useState(
    teacher?.youtubeVideoUrl || null
  );
  async function handleSubmit(formData: FormData) {
    const response = await teacherUpsertAction(formData);
    console.log(response);
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-8">
      <SectionRow
        leftChildren={
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <YoutubeVideo yotubeVideoUrl={youtubeVideoUrl} />
              <div className="ml-[14px]">
                <FormHelperText>
                  This video will be shown when people click on your image.
                </FormHelperText>
              </div>
            </div>
            <div>
              <TextField
                className="w-full"
                helperText="For example: https://www.youtube.com/embed/dQw4w9WgXcQ"
                label="Enter a YouTube embed url"
                name="youtubeVideoUrl"
                value={youtubeVideoUrl}
                onChange={(event) => setYoutubeVideoUrl(event.target.value)}
              />
            </div>
          </div>
        }
        rightChildren={
          <Alert className="w-full" severity="info" variant="outlined">
            A video will help you get more messages from students. Because
            students will get a better feeling for you and your style of
            teaching. Try to upload a video where you are in a pool, that will
            get you the best results. <br></br> <br></br> To find the embed url,
            open a video on Youtube, then click share and then embed.
          </Alert>
        }
      />
      <div>
        <SubmitButton
          loadingPosition="start"
          startIcon={<Save />}
          variant="contained"
        >
          Save
        </SubmitButton>
      </div>
    </form>
  );
}
