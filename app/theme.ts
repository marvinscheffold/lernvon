"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#464e56",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
