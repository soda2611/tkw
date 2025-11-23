import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function ExampleAlertDialog() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button variant="contained" sx={{ mt: 2, width: 200 }} onClick={handleOpen}>
                Show Dialog
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Example Dialog</DialogTitle>
            </Dialog>
        </>
    );
}