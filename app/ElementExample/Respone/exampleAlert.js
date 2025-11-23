import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

export default function ExampleAlert() {

    return (
        <Box>
            <Alert severity="success" sx={{ mt: 2 }}>
                Example success alert
            </Alert>
            <Alert severity="error" sx={{ mt: 2 }}>
                Example error alert
            </Alert>
        </Box>
    );
}