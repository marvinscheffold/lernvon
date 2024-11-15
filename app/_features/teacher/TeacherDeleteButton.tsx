"use client";

import { SubmitButton } from "@/app/_components/SubmitButton";
import { teacherDeleteAction } from "@/app/_features/teacher/actions/teacherDeleteAction";
import { Delete } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

export function TeacherDeleteButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="error"
        startIcon={<Delete />}
        onClick={() => setIsModalOpen(true)}
      >
        Profil löschen
      </Button>
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>Lehrer profil löschen?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Möchtest du dein Profil wirklich löschen? Diese Aktion kann nicht
            rückgängig gemacht werden.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <form action={teacherDeleteAction}>
            <SubmitButton
              variant="contained"
              color="error"
              startIcon={<Delete />}
            >
              Profil löschen
            </SubmitButton>
          </form>
        </DialogActions>
      </Dialog>
    </>
  );
}
