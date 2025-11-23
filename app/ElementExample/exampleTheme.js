import React from "react";
import Button from "@mui/material/Button";

export default function ExampleTheme({ isDark, setIsDark }) {
  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <Button variant="contained" sx={{ width: 250 }} onClick={handleToggleTheme}>
      Switch to {isDark ? "Light" : "Dark"} Mode
    </Button>
  );
}
