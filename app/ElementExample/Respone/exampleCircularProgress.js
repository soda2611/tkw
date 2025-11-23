import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export default function ExampleCircularProgress() {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    return (
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <Button variant="contained" sx={{ mt: 2, width: 250 }} onClick={handleClick} disabled={loading}>
                {loading ? "Example Circular Progress" : "Show Circular Progress"}
            </Button>
            {loading && (
                <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                </Box>
            )}
        </div>
    );
}
