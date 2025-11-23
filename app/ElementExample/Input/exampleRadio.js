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
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Example value 1" />
    <FormControlLabel value="male" control={<Radio />} label="Example value 2" />
    <FormControlLabel value="other" control={<Radio />} label="Example value 3" />
  </RadioGroup>
</FormControl>
  );
}