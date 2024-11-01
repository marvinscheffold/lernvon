"use client";

import { PoolSearchInputAndSelectDropdown } from "@/app/_features/pool/PoolSearchInputAndSelectDropdown";
import { Chip, Slider, Typography } from "@mui/material";

export function TeacherResultPageFilters() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <Typography variant="subtitle1">Preis</Typography>
        <Typography variant="h6" className="!font-normal">
          45 € – 80 €
        </Typography>
        <div className="flex flex-col gap-0">
          <Slider value={[45, 80]} min={0} max={120} color="secondary" />
          <div className="flex justify-between">
            <Typography variant="body2">0 €</Typography>
            <Typography variant="body2">120 € & mehr</Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Typography variant="subtitle1">Schwimmbäder</Typography>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start">
            <Chip
              label="Alle Schwimmbäder"
              color="secondary"
              variant="outlined"
            />
          </div>
          <PoolSearchInputAndSelectDropdown
            onSelect={() => {}}
            disabledOptionValues={[]}
            variant="filled"
          />
        </div>
      </div>
    </div>
  );
}
