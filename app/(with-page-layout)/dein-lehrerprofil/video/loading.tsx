import { Section, SectionRow } from "@/app/_components/Section";
import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <Section>
      <Skeleton style={{ fontSize: "24px", maxWidth: "340px" }} />
      <SectionRow
        leftChildren={
          <div className="flex flex-col gap-4">
            <Skeleton
              variant="rounded"
              style={{ height: "unset" }}
              className="aspect-video"
            />
            <Skeleton variant="rounded" height={56} />
          </div>
        }
        rightChildren={<Skeleton variant="rounded" height={56} />}
      />
    </Section>
  );
}
