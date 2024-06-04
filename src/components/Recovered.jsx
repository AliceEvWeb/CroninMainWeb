import React from "react";
import { Typography, Container, Grid } from "@mui/material";

const Recovered = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={6}>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <form>
            <Typography variant="h4" gutterBottom>
              Password successfully set
            </Typography>
            <div
              style={{ display: "flex", alignItems: "center", marginTop: 20 }}
            >
              <Typography variant="h5">Welcome HOME</Typography>
            </div>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Recovered;
