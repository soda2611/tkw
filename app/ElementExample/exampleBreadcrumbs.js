import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function ExampleBreadcrumbs() {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="https://mui.com/">
          MUI
        </Link>
        <Link underline="hover" color="inherit" href="https://mui.com/components/">
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
    </>
  );
}
