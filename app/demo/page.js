"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from "react";
import { Button, Link, Typography, Box, Grid } from "@mui/material";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      primary: { main: "#19d260ff" },
      secondary: { main: "#d8e08eff" },
    },
    typography: {
      fontFamily: "Inter, Roboto, Arial, sans-serif",
      h4: { fontWeight: 700 },
    },
    spacing: 8,
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <CssBaseline />
        <Box sx={{ bgcolor: 'primary.main', p: 2, borderRadius: 1, boxShadow: 1, display: 'flex', alignItems: 'center' }}>
          <Box component="img" src="image.png" alt="Logo" sx={{ height: 50, mr: 2 }} />
          <Typography variant="h4">Website bán nông sản - rau củ sạch</Typography>
        </Box>
      </div>
    </ThemeProvider>
  );
}
