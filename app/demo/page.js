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
         IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


export default function App() {
  const [isDark, setIsDark] = useState(false);
  const theme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
      primary: { main: '#1faa54ff' },
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
          <Toolbar>
            <img src="https://github.com/soda2611/tkw/blob/main/public/demo/images/image.png?raw=true" alt='Logo' style={{ height: 40, marginRight: 16 }} />
            <Typography variant='h5' fontWeight='bold' component='div'>
            GreenFarm
            </Typography>
            <Tabs value={tab} onChange={handleTabChange} textColor='white' indicatorColor='secondary' sx={{ flexGrow: 1, marginLeft: 3 }}>
                <Tab icon={<HomeIcon />} iconPosition="start" label='Trang chủ' />
                <Tab icon={<ShoppingBagIcon />} iconPosition="start" label='Sản phẩm' />
                <Tab icon={<LocalPhoneIcon />} iconPosition="start" label='Liên hệ' />
            </Tabs>
            <IconButton color='inherit' aria-label='cart' sx={{ fontSize: 14, marginRight: 1, borderRadius: 2.5, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
              <ShoppingCartIcon />
              Giỏ hàng
            </IconButton>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 250, marginRight: -14, backgroundColor: 'white', borderRadius: 10, paddingLeft: 8 }}>
              <SearchIcon sx={{ color: 'black' }}/>
              <input style={{ height: 40, borderRadius: 10, outline: 'none', width: '100%', border: 'none' }} placeholder='Tìm kiếm sản phẩm...'></input>
            </div>
          </Toolbar>
        </AppBar>
        <Box sx={{ mt: 2, maxHeight: '90vh', width: '100%', borderRadius: 5, padding: 2, gap: 10, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {tab === 0 && <div style={{ overflowY: 'auto', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Typography variant='h3' fontWeight='bold' sx={{ color: 'primary.main' }}>Trang chủ</Typography>
            </div>}
            {tab === 1 && <div style={{ overflowY: 'auto', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Typography variant='h3' fontWeight='bold' sx={{ color: 'primary.main' }}>Sản phẩm</Typography>
              </div>}
            {tab === 2 && <div style={{ overflowY: 'auto', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Typography variant='h3' fontWeight='bold' sx={{ color: 'primary.main' }}>Liên hệ</Typography>
            </div>}
        </Box>
      </div>
    </ThemeProvider>
  );
}
