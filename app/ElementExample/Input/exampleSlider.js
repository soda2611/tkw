import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";

export default function ExampleSlider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <InputLabel htmlFor="example-Slider">Example Slider</InputLabel>
      <Slider variant="outlined" color="primary" id="example-Slider" style={{ width: '100px' }}/>
    </div>
  );
}