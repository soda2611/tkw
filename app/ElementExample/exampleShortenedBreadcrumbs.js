import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function ExampleShortenedBreadcrumbs() {
  return (
    <>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#">
        Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
        Catalog
        </Link>
        <Link underline="hover" color="inherit" href="#">
        Accessories
        </Link>
        <Link underline="hover" color="inherit" href="#">
        New Collection
        </Link>
        <Typography color="text.primary">Example Shortened Breadcrumbs</Typography>
      </Breadcrumbs>
    </>
  );
}