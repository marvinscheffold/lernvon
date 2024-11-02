import { poolQueries } from "@/app/_features/pool/poolQueryFactory";
import { PoolType } from "@/app/_utils/types/pool";
import { Chip, ChipProps, Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export type PoolChipProps = {
  poolId: PoolType["id"];
} & ChipProps;

export function PoolChip({ poolId, ...rest }: PoolChipProps) {
  const { data } = useQuery(poolQueries.detail(poolId));

  if (data) {
    return <Chip {...rest} label={data.name} />;
  }

  return (
    <Skeleton
      className="!rounded-full"
      variant="rounded"
      width={164}
      height={32}
    />
  );
}
