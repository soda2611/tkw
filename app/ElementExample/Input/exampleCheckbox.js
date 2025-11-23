import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";

export default function ExampleCheckbox() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <InputLabel htmlFor="example-checkbox">Example Checkbox</InputLabel>
      <Checkbox variant="outlined" color="primary" id="example-checkbox" />
    </div>
  );
}