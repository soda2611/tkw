import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function ExampleBreadcrumbs() {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#">
          MUI
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Core
        </Link>
        <Typography color="text.primary">Example Breadcrumbs</Typography>
      </Breadcrumbs>
    </>
  );
}