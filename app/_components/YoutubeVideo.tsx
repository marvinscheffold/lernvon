import { PlayArrow } from "@mui/icons-material";

type YoutubeVideoProps = {
  yotubeVideoUrl: string | null;
};

export function YoutubeVideo({ yotubeVideoUrl }: YoutubeVideoProps) {
  if (!yotubeVideoUrl)
    return (
      <div className="w-full aspect-video rounded-3xl border border-gray-200 flex items-center justify-center relative overflow-hidden">
        <PlayArrow
          style={{ width: "56px", height: "56px" }}
          className="text-gray-200 text-4xl"
        />
      </div>
    );

  return <iframe className="aspect-video" id="ytplayer" src={yotubeVideoUrl} />;
}
