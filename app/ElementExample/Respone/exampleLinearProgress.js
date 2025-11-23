import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";

export default function ExampleLinearProgress() {
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
                {loading ? "Example Linear Progress" : "Show Linear Progress"}
            </Button>
            {loading && (
                <Box sx={{ mt: 2, display: "flex", justifyContent: "center", width: 250 }}>
                    <LinearProgress sx={{ width: "100%" }} />
                </Box>
            )}
        </div>
    );
}
