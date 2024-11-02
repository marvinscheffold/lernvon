"use client";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    secondary: {
      light: "#6b7177",
      main: "#464e56",
      dark: "#31363c",
      contrastText: "#fff",
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
