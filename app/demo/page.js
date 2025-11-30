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
         Grid,
         Drawer,
         List,
         ListItem,
         ListItemText,
        InputBase,
         useMediaQuery,} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1faa54ff',
        light: '#37be3cff',
      },
      secondary: {
        main: '#ebff38ff',
      },
      text: {
        primary: '#000000',
      },
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

  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // màn hình nhỏ hơn md
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const [openSearch, setOpenSearch] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: 16 }}>
        <CssBaseline />
        <AppBar position="static" sx={{ borderRadius: 4, display: 'flex', justifyContent: 'center', width: '100%', backgroundColor: 'primary.main', }}>
          {!openSearch ? (<Toolbar sx={{ p: 1, gap: 2 }}>
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                  <List sx={{ width: 250 }}>
                    <ListItem onClick={() => handleTabChange(null, 0)} sx={{ cursor: 'pointer' }}>
                      <ListItemText primary="Trang chủ" />
                    </ListItem>
                    <ListItem onClick={() => handleTabChange(null, 1)} sx={{ cursor: 'pointer' }}>
                      <ListItemText primary="Sản phẩm" />
                    </ListItem>
                    <ListItem onClick={() => handleTabChange(null, 2)} sx={{ cursor: 'pointer' }}>
                      <ListItemText primary="Liên hệ" />
                    </ListItem>
                  </List>
                </Drawer>
              </>
            ) : null}

            <img
              src="https://github.com/soda2611/tkw/blob/main/public/demo/images/image.png?raw=true"
              alt="Logo"
              style={{ height: 40 }}
            />
            <Typography variant="h5" fontWeight="bold" component="div">
              GreenFarm
            </Typography>

            {/* Nếu màn hình lớn thì hiện Tabs, nhỏ thì hiện nút menu */}
            {!isMobile ? (
              <Tabs
                value={tab}
                onChange={handleTabChange}
                textColor="white"
                indicatorColor="secondary"
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="Trang chủ" />
                <Tab label="Sản phẩm" />
                <Tab label="Liên hệ" />
              </Tabs>
            ) : null}

            <Box sx={{ flexGrow: 1 }} />

            {/* Giỏ hàng: màn hình lớn có chữ, nhỏ chỉ icon */}
            <IconButton
              color="inherit"
              aria-label="cart"
              sx={{
                fontSize: 14,
                borderRadius: 2.5,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              }}
            >
              <ShoppingCartIcon />
              {!isMobile && 'Giỏ hàng'}
            </IconButton>

            {/* Search: màn hình lớn là input, nhỏ là icon button */}
            {!isMobile ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 200,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  paddingLeft: 8,
                }}
              >
                <SearchIcon sx={{ color: 'gray' }} />
                <input
                  style={{
                    height: 40,
                    borderRadius: 10,
                    outline: 'none',
                    width: '100%',
                    border: 'none',
                  }}
                  placeholder="Tìm kiếm sản phẩm..."
                />
              </div>
            ) : (
              <IconButton color="inherit" aria-label="search" onClick={() => setOpenSearch(true)}>
                <SearchIcon />
              </IconButton>
            )}
          </Toolbar>) : (
          <Toolbar sx={{ p: 1, gap: 2 }}>
            <InputBase
              autoFocus
              placeholder="Nhập từ khóa..."
              sx={{
                flex: 1,
                backgroundColor: "white",
                borderRadius: 2,
                paddingLeft: 2,
              }}
            />
            <IconButton onClick={() => setOpenSearch(false)}>
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Toolbar>)}
        </AppBar>
        <Box sx={{ maxHeight: '85vh', width: '100%', borderRadius: 5, gap: 10, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {tab === 0 && <div style={{ overflowY: 'hidden', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10 }}>
              <p style={{ color: '#1faa54ff', fontWeight: 'bold', fontSize: 50, marginTop: 5, textAlign: 'center' }}>Trang chủ</p>
            </div>}
            {tab === 1 && <div style={{ overflowY: 'hidden', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10 }}>
              <div style={{ overflowY: 'hidden', height: '100%', width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, borderRadius: 10, padding: 10, backgroundColor: 'primary.light' }}>
                <div style={{ overflowY: 'auto', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, backgroundColor: 'primary.light' }}>
                  <Typography variant='h3' component='div' sx={{ fontWeight: 'bold', marginBottom: 1, color: 'text.primary' }}>
                     Rau
                  </Typography>
                  <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 2, sm: 4, md: 4 }} sx={{ justifyContent: 'center' }}>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Grid container spacing={2} key={i} sx={{ padding: 1,  display: 'flex', alignItems: 'center' }}>
                        <Grid item>
                          <Box sx={{ backgroundColor: '#f1f1f1', width: 250, height: 400, borderRadius: 2.5 }}>
                            <div style={{ backgroundColor: '#e0e0e0', width: '100%', height: '60%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                            <Box sx={{ padding: 2, height: '40%' }}>
                              <Typography variant='h6' component='div' sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                                Sản phẩm {i + 1}
                              </Typography>
                              <Typography variant='body1' color='text.secondary' sx={{ marginBottom: 2 }}>
                                Mô tả ngắn về sản phẩm {i + 1}.
                              </Typography>
                              <Typography variant='h6' component='div' sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                100.000₫
                              </Typography>
                              <IconButton sx={{ position: 'relative', bottom: 13, left: 190 }} aria-label='favorite'>
                                <ShoppingCartIcon/>
                              </IconButton>
                              <IconButton sx={{ position: 'relative', bottom: 360, left: -50 }} aria-label='favorite'>
                                <FavoriteBorderIcon/>
                              </IconButton>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>

                  <Typography variant='h3' component='div' sx={{ fontWeight: 'bold', marginTop: 10, marginBottom: 1, color: 'text.primary' }}>
                    Củ
                  </Typography>
                  <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 2, sm: 4, md: 4 }} sx={{ justifyContent: 'center' }}>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Grid container spacing={2} key={i} sx={{ padding: 1,  display: 'flex', alignItems: 'center' }}>
                        <Grid item>
                          <Box sx={{ backgroundColor: '#f1f1f1', width: 250, height: 400, borderRadius: 2.5 }}>
                            <div style={{ backgroundColor: '#e0e0e0', width: '100%', height: '60%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                            <Box sx={{ padding: 2, height: '40%' }}>
                              <Typography variant='h6' component='div' sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                                Sản phẩm {i + 1}
                              </Typography>
                              <Typography variant='body1' color='text.secondary' sx={{ marginBottom: 2 }}>
                                Mô tả ngắn về sản phẩm {i + 1}.
                              </Typography>
                              <Typography variant='h6' component='div' sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                100.000₫
                              </Typography>
                              <IconButton sx={{ position: 'relative', bottom: 13, left: 190 }} aria-label='favorite'>
                                <ShoppingCartIcon/>
                              </IconButton>
                              <IconButton sx={{ position: 'relative', bottom: 360, left: -50 }} aria-label='favorite'>
                                <FavoriteBorderIcon/>
                              </IconButton>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>

                  <Typography variant='h3' component='div' sx={{ fontWeight: 'bold', marginTop: 10, marginBottom: 1, color: 'text.primary' }}>
                    Trái cây
                  </Typography>
                  <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 2, sm: 4, md: 4 }} sx={{ justifyContent: 'center' }}>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Grid container spacing={2} key={i} sx={{ padding: 1,  display: 'flex', alignItems: 'center' }}>
                        <Grid item>
                          <Box sx={{ backgroundColor: '#f1f1f1', width: 250, height: 400, borderRadius: 2.5 }}>
                            <div style={{ backgroundColor: '#e0e0e0', width: '100%', height: '60%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                            <Box sx={{ padding: 2, height: '40%' }}>
                              <Typography variant='h6' component='div' sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                                Sản phẩm {i + 1}
                              </Typography>
                              <Typography variant='body1' color='text.secondary' sx={{ marginBottom: 2 }}>
                                Mô tả ngắn về sản phẩm {i + 1}.
                              </Typography>
                              <Typography variant='h6' component='div' sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                100.000₫
                              </Typography>
                              <IconButton sx={{ position: 'relative', bottom: 13, left: 190 }} aria-label='favorite'>
                                <ShoppingCartIcon/>
                              </IconButton>
                              <IconButton sx={{ position: 'relative', bottom: 360, left: -50 }} aria-label='favorite'>
                                <FavoriteBorderIcon/>
                              </IconButton>
                            </Box>
                          </Box>
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
