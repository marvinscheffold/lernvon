"use client";

import { signOutAction } from "@/app/_features/auth/actions/signOutAction";
import { TEACHER_CREATE_ROUTE } from "@/app/_utils/constants/routes";
import { Logout, Person, Person2 } from "@mui/icons-material";
import { Avatar, Button, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { MouseEvent, useState } from "react";

type AuthUserAvatarClientProps = {
  user: User | null;
};

export function AuthUserAvatarClient({ user }: AuthUserAvatarClientProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!user)
    return (
      <Link href={TEACHER_CREATE_ROUTE}>
        <Button variant="outlined" color="secondary">
          Schwimmlehrer werden
        </Button>
      </Link>
    );

  const fullName = user.user_metadata?.full_name;

  return (
    <>
      <Avatar onClick={handleClick} className="!bg-neutral-300">
        {fullName ? fullName[0] : <Person />}
      </Avatar>
      <Menu
        id="authUserMenu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        autoFocus={false}
      >
        <Link href={TEACHER_CREATE_ROUTE}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Person2 fontSize="small" />
            </ListItemIcon>
            Mein Lehrerprofil
          </MenuItem>
        </Link>
        <MenuItem
          onClick={() => {
            handleClose();
            signOutAction();
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Abmelden
        </MenuItem>
      </Menu>
    </>
  );
}
