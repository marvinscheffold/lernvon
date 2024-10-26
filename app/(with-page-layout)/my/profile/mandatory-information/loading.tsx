import { Section, SectionRow } from "@/app/_components/Section";
import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <Section>
      <Skeleton style={{ fontSize: "24px", maxWidth: "340px" }} />
      <SectionRow
        leftChildren={<Skeleton variant="rounded" height={56} />}
        rightChildren={<Skeleton variant="rounded" height={56} />}
      />
      <SectionRow
        leftChildren={<Skeleton variant="rounded" height={56} />}
        rightChildren={<Skeleton variant="rounded" height={56} />}
      />
      <SectionRow
        leftChildren={
          <Skeleton
            variant="rounded"
            style={{ height: "unset" }}
            className="aspect-video"
          />
        }
        rightChildren={<Skeleton variant="rounded" height={56} />}
      />
    </Section>
  );
}
