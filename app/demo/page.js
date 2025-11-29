'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useState } from 'react';
import { Typography,
         Box,
         AppBar,
         Toolbar,
         Tab,
         Tabs,
         IconButton, 
         Grid} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: { main: '#1faa54ff', light: '#00af06d2' },
      secondary: { main: '#ebff38ff' },
    },
    typography: {
      fontFamily: 'Inter, Roboto, Arial, sans-serif',
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: 16 }}>
        <CssBaseline />
        <AppBar position='static' sx={{ borderRadius: 4, display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Toolbar sx={{ p: 1, gap: 2 }}>
            <img src="https://github.com/soda2611/tkw/blob/main/public/demo/images/image.png?raw=true" alt='Logo' style={{ height: 40}} />
            <Typography variant='h5' fontWeight='bold' component='div'>
            GreenFarm
            </Typography>
            <Tabs value={tab} onChange={handleTabChange} textColor='white' indicatorColor='secondary' variant="scrollable" scrollButtons="auto">
                <Tab label='Trang chủ' />
                <Tab label='Sản phẩm' />
                <Tab label='Liên hệ' />
            </Tabs>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color='inherit' aria-label='cart' sx={{ fontSize: 14, borderRadius: 2.5, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
              <ShoppingCartIcon />
              Giỏ hàng
            </IconButton>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 200, backgroundColor: 'white', borderRadius: 10, paddingLeft: 8 }}>
              <SearchIcon sx={{ color: 'black' }}/>
              <input style={{ height: 40, borderRadius: 10, outline: 'none', width: '100%', border: 'none' }} placeholder='Tìm kiếm sản phẩm...'></input>
            </div>
          </Toolbar>
        </AppBar>
        <Box sx={{ maxHeight: '85vh', width: '100%', borderRadius: 5, gap: 10, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {tab === 0 && <div style={{ overflowY: 'hidden', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10 }}>
              <p style={{ color: '#1faa54ff', fontWeight: 'bold', fontSize: 50, marginTop: 5, textAlign: 'center' }}>Trang chủ</p>
            </div>}
            {tab === 1 && <div style={{ overflowY: 'hidden', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10 }}>
              <p style={{ color: '#1faa54ff', fontWeight: 'bold', fontSize: 50, marginTop: 5, textAlign: 'center' }}>Sản phẩm</p>
              <div style={{ overflowY: 'hidden', height: '100%', width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, borderRadius: 10, padding: 10, backgroundColor: '#f0f0f0' }}>
                <div style={{ overflowY: 'auto', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, backgroundColor: '#f0f0f0' }}>
                  <Grid container spacing={{ xs: 5, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from({ length: 20 }).map((_, i) => (
                      <Grid container spacing={2} key={i} sx={{ padding: 1, maxWidth: 500, width: '100%' }}>
                        <Grid item>
                          <Box sx={{ backgroundColor: 'green', width: 100, height: 100, borderRadius: 2.5 }} />
                        </Grid>
                        <Grid item xs>
                          <Typography variant="h6">Sản phẩm {i + 1}</Typography>
                          <Typography variant="body2">Mô tả sản phẩm {i + 1}</Typography>
                          <IconButton color='inherit' aria-label='cart' sx={{ fontSize: 14, borderRadius: 2.5, backgroundColor: 'primary.main', color: 'white', '&:hover': {backgroundColor: 'primary.light'} }}>
                            <ShoppingCartIcon />
                            Thêm vào giỏ hàng
                          </IconButton>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </div>
            </div>}
            {tab === 2 && <div style={{ overflowY: 'hidden', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10 }}>
              <p style={{ color: '#1faa54ff', fontWeight: 'bold', fontSize: 50, marginTop: 5, textAlign: 'center' }}>Liên hệ </p>
            </div>}
        </Box>
      </div>
    </ThemeProvider>
  );
}
