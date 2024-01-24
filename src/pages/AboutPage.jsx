import Container from "@mui/material/Container";
import PageHeader from "./../components/PageHeader";
import Grid from "@mui/material/Grid";

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />

      <Grid container spaicing={0}>
        <Grid item xs={12} md={8} alignSelf="center"></Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
          }}
        >
          <img src="#" alt="card" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
