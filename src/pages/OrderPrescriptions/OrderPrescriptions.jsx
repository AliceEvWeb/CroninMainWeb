import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";
import Typography from "@mui/material/Typography";

const OrderPrescriptionsPage = () => {
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="* Order Prescriptions"
        subtitle="We make filling your pet's prescriptions easy"
      />
      <Typography variant="body1" sx={{ width: "300px" }}>
        * Comming soon
      </Typography>
      <img
        src="/assets/imgs/OrderPrescription.jpg"
        alt="Description of image"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </Container>
  );
};

export default OrderPrescriptionsPage;
