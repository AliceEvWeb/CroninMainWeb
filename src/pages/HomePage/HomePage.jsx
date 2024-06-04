import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AutoSlideCarousel from "../../components/AutoSlideCarousel";
import images from "../../components/CarouselImages";
import CardDealComponent from "../../components/CardDealComponent";
import ShopByPetComponent from "../../components/ShopByPetComponent";
import AutoshipLearnMoreComponent from "../../components/AutoshipLearnMoreComponent";
import TopPiksComponent from "../../components/TopPiksComponent";
import OrderPrescriptions from "../../components/OrderPrescriptions";
import TreatPet from "../../components/TreatPetComponent";

const HomePage = () => {
  return (
    <Box
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{ marginBottom: "5px", marginTop: "-15px" }}
      >
        $30 eGift card when you spend $100* Code:HAVEFUN
      </Typography>
      <Grid container spacing={2}>
        <AutoSlideCarousel images={images} />
      </Grid>
      <CardDealComponent />
      <ShopByPetComponent />
      <AutoshipLearnMoreComponent backgroundColor="#f0f0f0" />
      <TopPiksComponent />
      <OrderPrescriptions backgroundColor="#f0f0f0" />
      <TreatPet />
    </Box>
  );
};

export default HomePage;
