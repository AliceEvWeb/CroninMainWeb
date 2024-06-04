import Container from "@mui/material/Container";
import PageHeader from "./../components/PageHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="About"
        subtitle="On this page you can find explanations about PetExpress"
      />

      <Grid container spaicing={0}>
        <Grid item xs={12} md={8} alignSelf="center">
          <Typography
            sx={{ mb: 3 }}
            variant="h5"
            color="initial"
            display="block"
          >
            With PexExpress, no one pet-parents alone
          </Typography>
          <Typography
            sx={{ mb: 3 }}
            variant="body2"
            color="initial"
            display="block"
          >
            We’re here to stick by your side through the highs, lows and
            in-betweens of pet parenthood, with everything you and your pet need
            for a happy and healthy life. At Chewy, our mission is to be the
            most trusted and convenient destination for pet parents and
            partners, everywhere.
          </Typography>
          <Typography
            sx={{ mb: 3 }}
            variant="body1"
            color="initial"
            display="block"
          >
            Pets are what get us out of bed every day (literally)
          </Typography>
          <Typography
            sx={{ mb: 3 }}
            variant="body2"
            color="initial"
            display="block"
          >
            At PetExpress, pets are the center of our universe. We wake up
            excited to find ways to make them happy and to make pet parenting
            easier for you. <br />
            <br />
            We create products they’ll love, find and offer trusted brands
            you’ll feel good about and deliver it all right to your door. That
            means less time at the store and more time giving belly rubs. <br />
            <br /> Happy customers are always our #1 priority. We’ve even
            expanded to serve Canadian pet parents in Ontario, with more regions
            coming soon. Pets are family and when you shop with Chewy, you
            become a part of ours.
            <br />
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
          }}
        ></Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
