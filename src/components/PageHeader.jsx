import React from "react";
import { string } from "prop-types";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

const PageHeader = ({ title, subtitle }) => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Typography variant="h5" component="h2">
        {subtitle}
      </Typography>
      <Divider sx={{ my: 4 }} />
    </Grid>
  );
};

PageHeader.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
};

export default PageHeader;
