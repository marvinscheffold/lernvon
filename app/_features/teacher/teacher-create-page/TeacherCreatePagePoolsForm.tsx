"use client";

import { SectionRow } from "@/app/_components/Section";
import { Delete, Save } from "@mui/icons-material";
import {
  Alert,
  FormHelperText,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { teacherUpsertAction } from "@/app/_features/teacher/actions/teacherUpsertAction";
import { SubmitButton } from "@/app/_components/SubmitButton";
import { PoolType } from "@/app/_utils/types/pool";
import { useState } from "react";
import { PoolSelectAutocompleteMultiple } from "@/app/_features/pool/PoolSelectAutocomplete";

type TeacherCreatePagePoolsFormProps = {
  pools: PoolType[];
};

export function TeacherCreatePagePoolsForm({
  pools: poolsProps,
}: TeacherCreatePagePoolsFormProps) {
  const [pools, setPools] = useState(poolsProps);

  async function handleSubmit(formData: FormData) {
    const response = await teacherUpsertAction(formData);
    console.log(response);
  }

  return (
    <form action={handleSubmit} className="flex flex-col gap-8">
      <SectionRow
        leftChildren={
          <div className="flex flex-col gap-6">
            <List>
              {pools.map((pool) => (
                <ListItem
                  key={pool.id}
                  disableGutters
                  divider
                  secondaryAction={
                    <IconButton
                      aria-label="löschen"
                      onClick={() => {
                        setPools((pools) =>
                          pools.filter((p) => p.id !== pool.id)
                        );
                      }}
                    >
                      <Delete />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={pool.name}
                    secondary={`${pool.street} ${pool.streetNumber}, ${pool.zip} ${pool.city}`}
                  />
                </ListItem>
              ))}
            </List>
            <div className="flex flex-col">
              <PoolSelectAutocompleteMultiple
                value={null}
                disabledOptionValues={pools.map((p) => p.id)}
                onChangeWithFullType={(pool) => {
                  if (!pool) return;
                  setPools((pools) => [...pools, pool]);
                }}
              />
              <div className="ml-[14px]">
                <FormHelperText>
                  Falls ein Schwimmbad fehlt schreib uns eine Email an
                  info@phelb.com
                </FormHelperText>
              </div>
            </div>
          </div>
        }
        rightChildren={
          <Alert className="w-full" severity="info" variant="outlined">
            Indem du die Schwimmbäder hinzufügst, in denen du unterrichtest,
            erhältst du passendere Nachrichten von Schülern, da sie bereits
            wissen, dass du in ihrer Nähe Unterricht gibst.
          </Alert>
        }
      />

      <div>
        <SubmitButton
          loadingPosition="start"
          startIcon={<Save />}
          variant="contained"
        >
          Speichern
        </SubmitButton>
      </div>
    </form>
  );
}
