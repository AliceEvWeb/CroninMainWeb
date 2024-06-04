import React, { useContext } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import PropTypes from "prop-types";
import LoginContext from "../store/loginContext";
import ROUTES from "../routes/ROUTES";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const CardDealComponent = ({ id, onMove }) => {
  const { login } = useContext(LoginContext);
  const loggedIn = login;
  const navigate = useNavigate();

  const handleMoveClick = (route) => {
    navigate(route);
  };

  const cardsArray = [
    {
      number: "Dog Toy",
      imageAlt: "toy deals image",
      image: "/assets/imgs/DealImage/toy-deal.png",
      backgroundColor: "#ddc8f1",
      route: ROUTES.TOY,
    },
    {
      number: "Dog Treat",
      imageAlt: "treat deals image",
      image: "/assets/imgs/DealImage/treat.png",
      backgroundColor: "#fed8e0",
      route: ROUTES.TREAT,
    },
    {
      number: "Deals under $15",
      imageAlt: "deals under $15 image",
      image: "/assets/imgs/DealImage/under-15.png",
      backgroundColor: "#edcbe5",
      route: ROUTES.UNDER15,
    },
    {
      number: "Cat Food",
      imageAlt: "food deals image",
      image: "/assets/imgs/DealImage/domestic-pet-food-assortment.png",
      backgroundColor: "#d4d5d6",
      route: ROUTES.FOODDEAL,
    },
    {
      number: "Exclusive to PetsExpress",
      imageAlt: "exclusive deals image",
      image: "/assets/imgs/DealImage/toy2.png",
      backgroundColor: "#ccebee",
      route: ROUTES.EXCLUSIVETOPETEXPRESS,
    },
  ];

  const MobileDevice = useMediaQuery("(max-width:600px)");

  return (
    <Grid container spacing={2}>
      {cardsArray.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
          <Card
            square
            raised
            style={{
              marginBottom: MobileDevice ? 20 : 50,
              border: "none",
              boxShadow: "none",
              marginTop: index === 0 ? (MobileDevice ? -40 : 0) : 0,
            }}
          >
            <CardActionArea
              sx={{
                "&:hover": {
                  bgcolor: "none",
                },
              }}
              onClick={() => handleMoveClick(card.route)}
            >
              <Box
                sx={{
                  backgroundColor: card.backgroundColor,
                  padding: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 200,
                }}
              >
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.imageAlt}
                  sx={{
                    width: "160%",
                    height: "auto",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  fontWeight={400}
                  style={{ marginBottom: 10, marginTop: 10 }}
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                      borderBottomColor: "black",
                    },
                  }}
                >
                  {card.number}
                </Typography>
              </div>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

CardDealComponent.propTypes = {
  id: PropTypes.string.isRequired,
  onMove: PropTypes.func.isRequired,
};

export default CardDealComponent;
