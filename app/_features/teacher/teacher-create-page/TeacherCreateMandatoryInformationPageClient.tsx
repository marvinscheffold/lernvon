"use client";

import { Section, SectionRow } from "@/app/_components/Section";
import { Image as ImageIcon, Save } from "@mui/icons-material";
import {
  Alert,
  Button,
  FormHelperText,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import Image from "next/image";
import { upsertTeacherAction } from "@/app/_features/teacher/upsertTeacherAction";
import { useFormStatus } from "react-dom";
import { LoadingButton } from "@mui/lab";

export function TeacherCreateMandatoryInformationPageClient() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  async function handleSubmit(formData: FormData) {
    if (!selectedFile) {
      formData.delete("videoThumbnailFile");
    }

    const response = await upsertTeacherAction(formData);
    console.log(response);
  }

  return (
    <form action={handleSubmit}>
      <Section>
        <Typography variant="h5">Mandatory Information</Typography>
        <SectionRow
          leftChildren={
            <TextField
              className="w-full"
              helperText="For example: John Doe"
              label="Your name"
              required
              name="name"
            />
          }
          rightChildren={
            <Alert className="w-full" severity="info" variant="outlined">
              If students know your name, they feel more comfortable writing you
              a message.
            </Alert>
          }
        />
        <SectionRow
          leftChildren={
            <TextField
              className="w-full"
              helperText="For example: 45 €"
              label="Your price per hour"
              required
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">€</InputAdornment>
                  ),
                },
              }}
              type="number"
              name="pricePerHour"
            />
          }
          rightChildren={
            <Alert className="w-full" severity="info" variant="outlined">
              By entering a price per hour students can better compare you to
              other teachers. Even if you dont offer 60min lessons, try to
              calculate what the price of a 60min lesson would be. You can add
              more prices and lesson durations in the "About" section.
            </Alert>
          }
        />
        <SectionRow
          leftChildren={
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <div className="w-full aspect-video rounded-3xl border border-gray-200 flex items-center justify-center relative overflow-hidden">
                  {selectedFile ? (
                    <Image
                      alt="image of teacher"
                      src={URL.createObjectURL(selectedFile)}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <ImageIcon
                      style={{ width: "56px", height: "56px" }}
                      className="text-gray-200 text-4xl"
                    />
                  )}
                </div>

                <div className="ml-[14px]">
                  <FormHelperText>
                    Optimal aspect ratio 16:9, 1280x720px or bigger, jpg, jpeg
                    or png, max 500kB.
                  </FormHelperText>
                </div>
              </div>
              <div>
                <Button
                  variant="outlined"
                  onClick={() => {
                    if (!inputRef.current) return;
                    inputRef.current.click();
                  }}
                >
                  Select Image*
                  <input
                    className="hidden"
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      if (!event.target.files) return;
                      setSelectedFile(event.target.files[0]);
                    }}
                    ref={inputRef}
                    name="videoThumbnailFile"
                  />
                </Button>
              </div>
            </div>
          }
          rightChildren={
            <Alert className="w-full" severity="info" variant="outlined">
              Students feel much more comfortable contacting teachers with an
              image. Try uploading an image that shows you in or at a pool. Show
              your face and smile.
            </Alert>
          }
        />
        <SectionRow
          leftChildren={
            <TextField
              className="w-full"
              helperText="For example: john.doe@gmail.com"
              label="Enter your email"
              required
              type="email"
              name="email"
            />
          }
          rightChildren={
            <Alert className="w-full" severity="info" variant="outlined">
              Students need at least one way to contact you. Thats why email is
              mandatory.
            </Alert>
          }
        />
        <div>
          <SubmitButton />
        </div>
      </Section>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <LoadingButton
      loadingPosition="start"
      startIcon={<Save />}
      variant="contained"
      loading={pending}
      type="submit"
    >
      Save
    </LoadingButton>
  );
}
