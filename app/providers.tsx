"use client";

import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode } from "react";
import { theme } from "./theme";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@/app/_utils/getQueryClient";

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AppRouterCacheProvider>
    </QueryClientProvider>
  );
}
