import { PlayArrow } from "@mui/icons-material";

type YoutubeVideoProps = {
  youtubeVideoUrl: string | null;
};

export function YoutubeVideo({ youtubeVideoUrl }: YoutubeVideoProps) {
  if (!youtubeVideoUrl)
    return (
      <div className="w-full aspect-video rounded-xl sm:rounded-2xl border border-neutral-100 flex items-center justify-center relative overflow-hidden">
        <PlayArrow
          style={{ width: "56px", height: "56px" }}
          className="text-neutral-100 text-4xl"
        />
      </div>
    );

  return (
    <iframe
      className="aspect-video w-full"
      src={youtubeVideoUrl}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
