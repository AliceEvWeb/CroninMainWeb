import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography, Box } from "@mui/material";
import CardComponent from "./CardComponent";
import LoginContext from "../store/loginContext";
import useCards from "../hooks/useCards";
import { useMediaQuery } from "@mui/material";

const TopPiksComponent = () => {
  const { handleMoveCard } = useCards();
  const [topLikedCards, setTopLikedCards] = useState([]);
  const { login } = useContext(LoginContext);
  const [dataFromServer, setDataFromServer] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("/cards")
        .then(({ data }) => {
          const likedCards = data.filter(
            (card) => card.likes && card.likes.length > 0
          );
          const sortedCards = likedCards.sort(
            (a, b) => b.likes.length - a.likes.length
          );
          setTopLikedCards(sortedCards.slice(0, 4));
        })
        .catch((err) => {
          console.error("Error fetching cards:", err);
        });
    } catch (err) {
      console.error("Error in useEffect:", err);
    }
  }, []);

  const handleLikeCard = async (id) => {
    try {
      const response = await axios.patch(`/cards/${id}`, { addLike: true });
      const updatedCard = response.data;
      setTopLikedCards((prevCards) =>
        prevCards.map((card) =>
          card._id === updatedCard._id ? updatedCard : card
        )
      );
    } catch (err) {
      console.error("Error liking card:", err);
    }
  };

  const MobileDevice = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        marginTop: 8,
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
        Top Picks
      </Typography>
      <Grid container spacing={2}>
        {topLikedCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={"cards" + index}>
            <CardComponent
              id={card._id}
              title={card.title}
              subtitle={card.subtitle}
              price={card.price}
              image={card.image.url}
              phone={card.phone}
              address={card.address}
              cardNumber={card.bizNumber}
              liked={login ? card.likes.includes(login._id) : false}
              onLike={() => handleLikeCard(card._id)}
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
      ></Box>
    </Box>
  );
};

export default TopPiksComponent;
