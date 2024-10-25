import Image from "next/image";
import { ReactNode } from "react";
import { Image as ImageIcon, Save } from "@mui/icons-material";
import { createSupabaseBrowserClient } from "@/app/_utils/supabase/createSupabaseBrowserClient";

type TeacherCreatePageMandatoryInformationVideoThumbnailProps = {
  selectedFile: File | null;
  videoThumbnailPath?: string | null;
};

export function TeacherCreatePageMandatoryInformationVideoThumbnail({
  selectedFile,
  videoThumbnailPath,
}: TeacherCreatePageMandatoryInformationVideoThumbnailProps) {
  function Container(children: ReactNode) {
    return (
      <div className="w-full aspect-video rounded-3xl border border-gray-200 flex items-center justify-center relative overflow-hidden">
        {children}
      </div>
    );
  }

  if (selectedFile) {
    return Container(
      <Image
        alt="image of teacher"
        src={URL.createObjectURL(selectedFile)}
        fill
        style={{
          objectFit: "cover",
        }}
      />
    );
  }

  if (videoThumbnailPath) {
    const {
      data: { publicUrl },
    } = createSupabaseBrowserClient()
      .storage.from("teacher")
      .getPublicUrl(videoThumbnailPath);
    return Container(
      <Image
        alt="image of teacher"
        src={publicUrl}
        fill
        style={{
          objectFit: "cover",
        }}
      />
    );
  }

  return Container(
    <ImageIcon
      style={{ width: "56px", height: "56px" }}
      className="text-gray-200 text-4xl"
    />
  );
}
