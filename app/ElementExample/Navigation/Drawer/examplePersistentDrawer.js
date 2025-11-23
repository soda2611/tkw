import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";

const drawerWidth = 250;

export default function ExamplePersistentDrawer() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (state) => () => setOpen(state);

    return (
        <Box>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                mounted='true'
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <List>
                    <ListItem>
                        <ListItemText primary="Example Drawer Item 1" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Example Drawer Item 2" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Example Drawer Item 3" />
                    </ListItem>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    marginLeft: open ? `${drawerWidth}px` : 0,
                    transition: 'margin 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >
                <InputLabel>Example Persistent Drawer</InputLabel>
                <IconButton onClick={toggleDrawer(!open)}>
                    <MenuIcon />
                </IconButton>
            </Box>
        </Box>
    );
}
