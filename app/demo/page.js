"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useState } from "react";
import { Typography,
         Box,
         AppBar,
         Toolbar,
         Tab,
         Tabs, } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      primary: { main: "#1faa54ff" },
      secondary: { main: "#d8e08eff" },
    },
    typography: {
      fontFamily: "Inter, Roboto, Arial, sans-serif",
      h4: { fontWeight: 700 },
    },
    spacing: 8,
  });

  const [tab, setTab] = useState(0);
  
  const handleTabChange = (event, newValue) => {
      setTab(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: 16 }}>
        <CssBaseline />
        <AppBar position="static" sx={{ borderRadius: 4 }}>
          <Toolbar>
            <img src="/demo/images/image.png" alt="Logo" style={{ height: 40, marginRight: 16 }} />
            <Typography variant="h5" component="div">
            GreenFarm
            </Typography>
            <Tabs value={tab} onChange={handleTabChange} textColor="secondary" indicatorColor="secondary" sx={{ flexGrow: 1, marginLeft: 4 }}>
                <Tab label="Trang chủ" />
                <Tab label="Sản phẩm" />
                <Tab label="Giỏ hàng" />
            </Tabs>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 250, backgroundColor: 'white', borderRadius: 10, paddingLeft: 8 }}>
              <SearchIcon sx={{ color: 'black' }}/>
              <input style={{ height: 36, borderRadius: 10, outline: 'none', width: '100%', border: "none" }} placeholder="Tìm kiếm sản phẩm..."></input>
            </div>
          </Toolbar>
        </AppBar>
        <Box sx={{ mt: 2, width: '100%', borderRadius: 5, padding: 2, gap: 10, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {tab === 0 && <div>Trang chủ</div>}
            {tab === 1 && <div>Sản phẩm</div>}
            {tab === 2 && <div>Giỏ hàng</div>}
        </Box>
        <div style={{ width: '100', height: '100', backgroundColor: "primary.main" }}></div>
      </div>
    </ThemeProvider>
  );
}
