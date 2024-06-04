import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import CardComponentDetails from "../../components/CardComponentDetails";
import useCards from "../../hooks/useCards";
import PageHeader from "../../components/PageHeader";
import Typography from "@mui/material/Typography";

const Read = () => {
  const [card, setCard] = useState(null);
  const {
    handleDeleteCard,
    handleEditCard,
    handlePhoneCard,
    handleLikeCard,
    handleMoveCard,
    dataFromServerFiltered,
    filteredCards,
  } = useCards();

  let { id } = useParams();

  useEffect(() => {
    axios
      .get("/cards/" + id)
      .then(({ data }) => {
        console.log(data);
        setCard(data);
      })
      .catch((err) => {});
  }, [id]);

  if (card === null) {
    return <></>;
  }
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
      <PageHeader
        title="Item Information"
        subtitle="On this page you can find information about this item"
      />
      {filteredCards.length ? (
        <Grid container spacing={2}>
          {filteredCards.map((item, index) =>
            item._id === id ? (
              <Grid item xs={12} sm={6} md={4} lg={3} key={"carsCard" + index}>
                <CardComponentDetails
                  id={item._id}
                  price={item.price}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  image={item.image.url}
                  phone={item.phone}
                  address={item.address}
                  cardNumber={item.bizNumber}
                  liked={item.liked}
                  onDelete={handleDeleteCard}
                  onEdit={handleEditCard}
                  onCall={handlePhoneCard}
                  onLike={handleLikeCard}
                  onMove={handleMoveCard}
                />
              </Grid>
            ) : null
          )}
        </Grid>
      ) : (
        <Typography>Could not find any items</Typography>
      )}
    </Box>
  );
};

export default Read;
