import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

export default function ExampleSelect() {
  return (
    <>
      <InputLabel htmlFor="example-select">Example Select</InputLabel>
      <Select variant="outlined" label="" style={{width: '200px'}} >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </>
  );
}