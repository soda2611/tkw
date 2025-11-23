"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ExampleButton from "./ElementExample/exampleButton";
import ExampleTypography from "./ElementExample/exampleTypography";
import ExampleBox from "./ElementExample/exampleBox";
import ExampleGrid from "./ElementExample/exampleGrid";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" }, // Tùy chỉnh màu secondary [cite: 41]
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif", // Thay đổi font chữ [cite: 43]
    h4: { fontWeight: 700 },
  },
  spacing: 8, // Định nghĩa giá trị cơ sở cho spacing [cite: 44]
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ExampleBox />
      <ExampleGrid />
      <ExampleTypography />
      <ExampleButton />
    </ThemeProvider>
  );
}
