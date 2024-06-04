import CardComponent from "./CardComponent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useCards from "../hooks/useCards";
import { Grid } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const TreatPet = () => {
  const {
    handleDeleteCard,
    handleEditCard,
    handleLikeCard,
    handleMoveCard,
    dataFromServerFiltered,
    visibleItem,
    handleLoadMore,
    filteredCards,
  } = useCards();

  const MobileDevice = useMediaQuery("(max-width:600px)");

  if (!dataFromServerFiltered || !dataFromServerFiltered.length) {
    return <Typography>Could not find any items</Typography>;
  }

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
        variant="h6"
        align="left"
        sx={{
          textAlign: MobileDevice ? "center" : "left",
          width: "60vw",
          marginBottom: "20px",
        }}
      >
        PetExpress High-quiality All Items
      </Typography>
      <Grid container spacing={2}>
        {filteredCards.slice(0, visibleItem).map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={"carsCard" + index}>
            <CardComponent
              id={item._id}
              price={item.price}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image.url}
              phone={item.phone}
              address={item.address}
              cardNumber={item.bizNumber}
              liked={item.liked}
              onDelete={handleDeleteCard}
              onEdit={handleEditCard}
              onLike={handleLikeCard}
              onMove={handleMoveCard}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "4%",
          marginBottom: "2%",
        }}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: "#d5d7fe", color: "black" }}
          onClick={handleLoadMore}
        >
          Load More
        </Button>
      </Box>
    </Box>
  );
};

export default TreatPet;
