import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InputLabel from "@mui/material/InputLabel";

export default function ExampleDrawer() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (state) => () => setOpen(state);

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <InputLabel>Example Drawer</InputLabel>
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <List sx={{ width: 250 }}>
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
        </div>
    );
}
