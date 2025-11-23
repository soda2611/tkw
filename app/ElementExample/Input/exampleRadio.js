import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function ExampleRadio() {
  return (
  <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Example Radio</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="value 1"
    name="radio-buttons-group"
  >
    <FormControlLabel value="value 1" control={<Radio />} label="Example Value 1" />
    <FormControlLabel value="value 2" control={<Radio />} label="Example Value 2" />
    <FormControlLabel value="value 3" control={<Radio />} label="Example Value 3" />
  </RadioGroup>
</FormControl>
  );
}