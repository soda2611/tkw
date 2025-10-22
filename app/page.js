import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Welcome to MUI with Next.js
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  );
}
