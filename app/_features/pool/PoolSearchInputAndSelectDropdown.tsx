"use client";

import { poolQueries } from "@/app/_features/pool/poolQueryFactory";
import { PoolType } from "@/app/_utils/types/pool";
import {
  Grow,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo, useRef, useState } from "react";

type PoolSearchInputAndSelectDropdownProps = {
  onSelect: (pool: PoolType) => void;
  disabledOptionValues: PoolType["id"][];
  variant?: TextFieldProps["variant"];
};

export function PoolSearchInputAndSelectDropdown({
  onSelect,
  disabledOptionValues,
  variant = "outlined",
}: PoolSearchInputAndSelectDropdownProps) {
  const queryClient = useQueryClient();
  const textFieldRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useQuery(poolQueries.list());

  const filteredPools = useMemo(() => {
    if (!data) return [];

    if (!searchValue)
      return data
        .filter((pool) => !disabledOptionValues.includes(pool.id))
        .slice(0, 5);

    return data
      .filter((pool) => {
        return (
          `${pool.name} ${pool.street} ${pool.streetNumber}, ${pool.zip} ${pool.city}`
            .toLowerCase()
            .indexOf(searchValue.toLowerCase()) !== -1
        );
      })
      .slice(0, 5);
  }, [data, searchValue, disabledOptionValues]);

  const handleClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <TextField
        autoComplete="off"
        ref={textFieldRef}
        disabled={isLoading}
        variant={variant}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        onFocus={() => setIsDropdownOpen(true)}
        onBlur={() => setIsDropdownOpen(false)}
        aria-controls={isDropdownOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen ? "true" : undefined}
        label="Nach Schwimmbad suchen"
      />
      <Popper
        open={isDropdownOpen}
        anchorEl={textFieldRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        className="z-10"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <MenuList>
                {filteredPools.map((pool) => (
                  <MenuItem
                    key={pool.id}
                    onClick={() => {
                      queryClient.setQueryData(
                        poolQueries.detail(pool.id).queryKey,
                        pool
                      );
                      onSelect(pool);
                      setSearchValue("");
                      handleClose();
                    }}
                    disabled={disabledOptionValues.includes(pool.id)}
                  >
                    <ListItemText
                      primary={pool.name}
                      secondary={`${pool.street} ${pool.streetNumber}, ${pool.zip} ${pool.city}`}
                    />
                  </MenuItem>
                ))}
              </MenuList>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
