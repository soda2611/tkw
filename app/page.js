'use client';

import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Home() {
  return (
    <Box style={{ left: '0px', padding: '20px', spacing: '20px', width: '100', height: '100', backgroundColor: 'red' }}>
      <Typography variant="h2" gutterBottom>
        bruh
      </Typography>
      <Button variant="contained" color="primary">
        nah
      </Button>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{ bottom: '0px' }} />
    </Box>
  );
}
