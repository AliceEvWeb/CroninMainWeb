import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardComponetLikedCount from "../components/CardComponetLikedCount";

const LikedCount = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("/cards")
        .then(({ data }) => {
          const likedCards = data.filter(
            (card) => card.likes && card.likes.length > 0
          );
          setCardData(likedCards);
          console.log("likedCards", likedCards);
        })
        .catch((err) => {});
    } catch (err) {}
  }, []);

  return (
    <Box
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
        LIKED CARDS 555
      </Typography>
      <Grid container spacing={2} marginBottom={"3vw"}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={"cards" + index}>
            <CardComponetLikedCount
              id={card._id}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image.url}
              phone={card.phone}
              address={card.address}
              cardNumber={card.bizNumber}
              liked={true}
              likeCount={card.likes.length}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LikedCount;
