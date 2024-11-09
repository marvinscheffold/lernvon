"use client";

import { YoutubeVideo } from "@/app/_components/YoutubeVideo";
import { createSupabaseBrowserClient } from "@/app/_utils/supabase/createSupabaseBrowserClient";
import { TeacherType } from "@/app/_utils/types/teacher";
import { PlayArrow } from "@mui/icons-material";
import Image from "next/image";
import { ReactNode, useState } from "react";

type TeacherVideoThumbnailProps = {
  videoThumbnailPath: TeacherType["videoThumbnailPath"];
  youtubeVideoUrl: TeacherType["youtubeVideoUrl"];
  name: TeacherType["name"];
};

export function TeacherVideoThumbnail({
  videoThumbnailPath,
  youtubeVideoUrl,
  name,
}: TeacherVideoThumbnailProps) {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  if (!videoThumbnailPath) return null;

  const {
    data: { publicUrl },
  } = createSupabaseBrowserClient()
    .storage.from("teacher")
    .getPublicUrl(videoThumbnailPath);

  function Container(children: ReactNode) {
    return (
      <div className="w-full aspect-video rounded-xl sm:rounded-2xl relative overflow-hidden border-neutral-100">
        {children}
      </div>
    );
  }

  if (isVideoVisible)
    return Container(<YoutubeVideo youtubeVideoUrl={youtubeVideoUrl} />);

  return Container(
    <>
      <Image
        alt={`Bild von Schwimmlehrer ${name}`}
        src={publicUrl}
        fill
        style={{
          objectFit: "cover",
        }}
      />
      {youtubeVideoUrl && (
        <div
          className="absolute z-10 inset w-full h-full flex items-center justify-center cursor-pointer"
          onClick={() => setIsVideoVisible(true)}
        >
          <div className="w-16 h-16 rounded-full bg-neutral-700/75 flex items-center justify-center">
            <PlayArrow
              className="text-white"
              style={{ width: 40, height: 40 }}
            />
          </div>
        </div>
      )}
    </>
  );
}
