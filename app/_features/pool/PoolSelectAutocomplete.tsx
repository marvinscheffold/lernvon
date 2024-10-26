import { poolQueries } from "@/app/_features/pool/poolQueryFactory";
import { Autocomplete, ListItemText, MenuItem, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { createFilterOptions } from "@mui/material/Autocomplete";
import { PoolType } from "@/app/_utils/types/pool";

type PoolSelectAutocompleteMultipleProps = {
  value: PoolType | null;
  disabledOptionValues: PoolType["id"][];
  onChangeWithFullType: (pool: PoolType | null) => void;
};

export function PoolSelectAutocompleteMultiple({
  value,
  disabledOptionValues,
  onChangeWithFullType,
}: PoolSelectAutocompleteMultipleProps) {
  const { data, isLoading } = useQuery(poolQueries.list());
  const filterOptions = createFilterOptions<PoolType>({
    limit: 10,
    stringify: (pool) =>
      `${pool.name} ${pool.street} ${pool.streetNumber}, ${pool.zip} ${pool.city}`,
  });

  return (
    <Autocomplete
      value={value}
      options={data || []}
      loading={isLoading}
      filterOptions={filterOptions}
      onChange={(_event, value) => {
        onChangeWithFullType(value);
      }}
      getOptionDisabled={(option) => disabledOptionValues.includes(option.id)}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => {
        return (
          <MenuItem {...props} key={option.id}>
            <ListItemText
              primary={option.name}
              secondary={`${option.street} ${option.streetNumber}, ${option.zip} ${option.city}`}
            />
          </MenuItem>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Name oder Adresse von Schwimmbad eingeben"
        />
      )}
    />
  );
}
