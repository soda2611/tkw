import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function ExampleTabs() {
    const [tab, setTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Box sx={{ padding: 2, borderRadius: 1, width: 450, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <InputLabel style={{ backgroundColor: '#1976d2', color: 'white', width: '100%', textAlign: 'center', padding: '8px', borderRadius: '4px' }}>Example Scrollable Tabs</InputLabel>
            <Tabs
                value={tab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                sx={{ width: '100%' }}
            >
                <Tab label="Example Tab 1" />
                <Tab label="Example Tab 2" />
                <Tab label="Example Tab 3" />
                <Tab label="Example Tab 4" />
                <Tab label="Example Tab 5" />
                <Tab label="Example Tab 6" />
                <Tab label="Example Tab 7" />
            </Tabs>
            <Box sx={{ mt: 2 }}>
                {tab === 0 && <div>Example Tabs Content 1</div>}
                {tab === 1 && <div>Example Tabs Content 2</div>}
                {tab === 2 && <div>Example Tabs Content 3</div>}
                {tab === 3 && <div>Example Tabs Content 4</div>}
                {tab === 4 && <div>Example Tabs Content 5</div>}
                {tab === 5 && <div>Example Tabs Content 6</div>}
                {tab === 6 && <div>Example Tabs Content 7</div>}
            </Box>
        </Box>
    );
}
