import Switch from "@mui/material/Switch";
import InputLabel from "@mui/material/InputLabel";

export default function ExampleSwitch() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <InputLabel htmlFor="example-switch">Example Switch</InputLabel>
      <Switch variant="outlined" color="primary" id="example-switch" />
    </div>
  );
}