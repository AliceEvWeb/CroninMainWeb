import Container from "@mui/material/Container";
import PageHeader from "../../components/PageHeader";

const HowAutoshipWorksPage = () => {
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Meet Your New Superpower"
        subtitle="35% off first order, 5% off after that. No fees or commotments."
      />
      <img
        src="/assets/imgs/HowASWorks.jpeg"
        alt="Description of image"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </Container>
  );
};

export default HowAutoshipWorksPage;
