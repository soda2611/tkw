import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

export default function ExampleAutocomplete() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <InputLabel htmlFor="example-Autocomplete">Example Autocomplete</InputLabel>
      <Autocomplete
        id="example-Autocomplete"
        options={['Example Option 1', 'Example Option 2', 'Example Option 3']}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Select option"
            variant="outlined"
            size="small"
            style={{ width: 200 }}
          />
        )}
      />
    </div>
  );
}