import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";

export default function ExampleGrid() {
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ width: 600 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>Example Grid Item {index + 1}</Item>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
