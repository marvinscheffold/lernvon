"use client";

import { TeacherType } from "@/app/_utils/types/teacher";
import { Call, Email, Telegram, WhatsApp } from "@mui/icons-material";
import {
  Button,
  ButtonProps,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { ReactNode, useState } from "react";

type TeacherContactButtonProps = {
  teacher: TeacherType;
  buttonProps: ButtonProps;
  children: ReactNode;
};

export function TeacherContactButton({
  teacher,
  buttonProps,
  children,
}: TeacherContactButtonProps) {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorElement);

  const handleOpenDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleCloseDropdown = () => {
    setAnchorElement(null);
  };

  return (
    <>
      <Button {...buttonProps} onClick={handleOpenDropdown}>
        {children}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorElement}
        open={isOpen}
        onClose={handleCloseDropdown}
      >
        <MenuItem
          onClick={() => {
            window.open(
              `mailto:${teacher.email}?subject=Anfrage Probetraining&body=Hallo, mein Name ist _________ und ich interessiere mich für ein Probetraining. Ich habe dein Profil auf lernvon.de entdeckt.`,
              "_blank"
            );
            handleCloseDropdown();
          }}
        >
          <ListItemIcon>
            <Email fontSize="small" />
          </ListItemIcon>
          <ListItemText>E-Mail schreiben</ListItemText>
        </MenuItem>
        {teacher.phoneNumber && (
          <MenuItem
            onClick={() => {
              window.open(`tel:${teacher.phoneNumber}`, "_blank");
              handleCloseDropdown();
            }}
          >
            <ListItemIcon>
              <Call fontSize="small" />
            </ListItemIcon>
            <ListItemText>Anrufen</ListItemText>
          </MenuItem>
        )}
        {teacher.whatsappPhoneNumber && (
          <MenuItem
            onClick={() => {
              window.open(
                `https://wa.me/${teacher.whatsappPhoneNumber}?text=Hallo, mein Name ist _________ und ich interessiere mich für ein Probetraining. Ich habe dein Profil auf lernvon.de entdeckt.`,
                "_blank"
              );
              handleCloseDropdown();
            }}
          >
            <ListItemIcon>
              <WhatsApp fontSize="small" />
            </ListItemIcon>
            <ListItemText>Auf WhatsApp schreiben</ListItemText>
          </MenuItem>
        )}
        {teacher.telegramUsername && (
          <MenuItem
            onClick={() => {
              window.open(
                `https://t.me/${teacher.telegramUsername}?text=Hallo, mein Name ist _________ und ich interessiere mich für ein Probetraining. Ich habe dein Profil auf lernvon.de entdeckt.`,
                "_blank"
              );
              handleCloseDropdown();
            }}
          >
            <ListItemIcon>
              <Telegram fontSize="small" />
            </ListItemIcon>
            <ListItemText>Auf Telegram schreiben</ListItemText>
          </MenuItem>
        )}
      </Menu>
    </>
  );
}
