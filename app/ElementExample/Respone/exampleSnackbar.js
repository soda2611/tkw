import React, { useState } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

export default function ExampleSnackbar() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    return (
        <Box>
            <Button variant="contained" sx={{ mt: 2, width: 200 }} onClick={handleClick}>
                Show Snackbar
            </Button>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
                    Example snackbar!
                </Alert>
            </Snackbar>
        </Box>
    );
}