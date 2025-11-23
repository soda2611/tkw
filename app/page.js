"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ExampleButton from "./ElementExample/exampleButton";
import ExampleTypography from "./ElementExample/exampleTypography";
import ExampleBox from "./ElementExample/exampleBox";
import ExampleGrid from "./ElementExample/exampleGrid";
import ExampleAppbar from "./ElementExample/Navigation/Appbar/exampleAppbar";
import ExampleMenuAppbar from "./ElementExample/Navigation/Appbar/exampleMenuAppbar";
import ExampleBreadcrumbs from "./ElementExample/Navigation/Breadcrumbs/exampleBreadcrumbs";
import ExampleIconBreadcrumbs from "./ElementExample/Navigation/Breadcrumbs/exampleIconBreadcrumbs";
import ExampleShortenedBreadcrumbs from "./ElementExample/Navigation/Breadcrumbs/exampleShortenedBreadcrumbs";
import ExampleDrawer from "./ElementExample/Navigation/Drawer/ExampleDrawer";
import ExamplePersistentDrawer from "./ElementExample/Navigation/Drawer/ExamplePersistentDrawer";
import ExampleTabs from "./ElementExample/Navigation/Tabs/ExampleTabs";
import ExampleScrollableTabs from "./ElementExample/Navigation/Tabs/ExampleScrollableTabs";
import ExampleTextField from "./ElementExample/Input/exampleTextField";
import ExampleSelect from "./ElementExample/Input/exampleSelect";
import ExampleCheckbox from "./ElementExample/Input/exampleCheckbox";
import ExampleRadio from "./ElementExample/Input/exampleRadio";
import ExampleSwitch from "./ElementExample/Input/exampleSwitch";
import ExampleSlider from "./ElementExample/Input/exampleSlider";
import ExampleAutocomplete from "./ElementExample/Input/exampleAutocomplete";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" }, // Tùy chỉnh màu primary [cite: 40]
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
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
        <CssBaseline />
        <ExampleAppbar />
        <ExampleMenuAppbar />
        <ExampleBreadcrumbs />
        <ExampleIconBreadcrumbs />
        <ExampleShortenedBreadcrumbs />
        <ExampleDrawer />
        <ExamplePersistentDrawer />
        <ExampleTabs />
        <ExampleScrollableTabs />
        <ExampleBox />
        <ExampleGrid />
        <ExampleTextField />
        <ExampleSelect />
        <ExampleCheckbox />
        <ExampleRadio />
        <ExampleSwitch />
        <ExampleSlider />
        <ExampleAutocomplete />
        <ExampleTypography />
        <ExampleButton />
      </div>
    </ThemeProvider>
  );
}
