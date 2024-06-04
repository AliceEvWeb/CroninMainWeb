import { Grid } from "@mui/material";
import MyCardComponent from "../../../components/MyCardComponent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useCategoryCards from "../../../hooks/useCategoryCards";
import Button from "@mui/material/Button";

const AllTreatCategoryCards = () => {
  const {
    handleDeleteCard,
    handleEditCard,
    handleLikeCard,
    handleMoveCard,
    dataFromServerFiltered,
    filteredCards,
    handleLoadMore,
    visibleItem,
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
        ALL TREAT
      </Typography>
      <Grid container spacing={2} marginBottom={"3vw"}>
        {filteredCards.slice(0, visibleItem).map((item, index) => (
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
      <Button
        variant="contained"
        sx={{ backgroundColor: "#d5d7fe", color: "black" }}
        onClick={handleLoadMore}
      >
        Load More
      </Button>
    </Box>
  );
};

export default AllTreatCategoryCards;
