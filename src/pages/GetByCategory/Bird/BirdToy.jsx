import { Grid } from "@mui/material";
import MyCardComponent from "../../../components/MyCardComponent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useCategoryCards from "../../../hooks/useCategoryCards";

const BirdToyCategoryCards = () => {
  const {
    handleDeleteCard,
    handleEditCard,
    handleLikeCard,
    handleMoveCard,
    dataFromServerFiltered,
    filteredCards,
  } = useCategoryCards();

  if (!dataFromServerFiltered || !dataFromServerFiltered.length) {
    return <Typography>Could not find any items</Typography>;
  }

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
        BIRD TOY
      </Typography>
      <Grid container spacing={2} marginBottom={"3vw"}>
        {filteredCards.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={"carsCard" + index}>
            <MyCardComponent
              id={item._id}
              title={item.title}
              subtitle={item.subtitle}
              category={item.category ? item.category.name : ""}
              price={item.price}
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
    </Box>
  );
};

export default BirdToyCategoryCards;
