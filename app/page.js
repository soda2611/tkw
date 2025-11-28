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
import ExampleDrawer from "./ElementExample/Navigation/Drawer/exampleDrawer";
import ExamplePersistentDrawer from "./ElementExample/Navigation/Drawer/examplePersistentDrawer";
import ExampleTabs from "./ElementExample/Navigation/Tabs/exampleTabs";
import ExampleScrollableTabs from "./ElementExample/Navigation/Tabs/exampleScrollableTabs";
import ExampleTextField from "./ElementExample/Input/exampleTextField";
import ExampleSelect from "./ElementExample/Input/exampleSelect";
import ExampleCheckbox from "./ElementExample/Input/exampleCheckbox";
import ExampleRadio from "./ElementExample/Input/exampleRadio";
import ExampleSwitch from "./ElementExample/Input/exampleSwitch";
import ExampleSlider from "./ElementExample/Input/exampleSlider";
import ExampleAutocomplete from "./ElementExample/Input/exampleAutocomplete";
import ExampleAlert from "./ElementExample/Respone/exampleAlert";
import ExampleSnackbar from "./ElementExample/Respone/exampleSnackbar";
import ExampleDialog from "./ElementExample/Respone/exampleDialog";
import ExampleCircularProgress from "./ElementExample/Respone/exampleCircularProgress";
import ExampleLinearProgress from "./ElementExample/Respone/exampleLinearProgress";
import ExampleTheme from "./ElementExample/exampleTheme";
import React, { useState } from "react";
import { Button, Link } from "@mui/material";


export default function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      primary: { main: "#1976d2" },
      secondary: { main: "#9c27b0" },
    },
    typography: {
      fontFamily: "Inter, Roboto, Arial, sans-serif",
      h4: { fontWeight: 700 },
    },
    spacing: 8,
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
        <Button variant="contained" color="primary" style={{ width: 300 }}>
          <Link href="./demo" style={{ textDecoration: "none", color: "inherit" }}>
            Website bán nông sản - rau củ sạch
          </Link>
        </Button>
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
        <ExampleAlert />
        <ExampleSnackbar />
        <ExampleDialog />
        <ExampleCircularProgress />
        <ExampleLinearProgress />
        <ExampleTheme isDark={isDark} setIsDark={setIsDark} />
      </div>
    </ThemeProvider>
  );
}
