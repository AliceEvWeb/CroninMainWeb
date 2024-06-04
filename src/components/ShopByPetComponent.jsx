import React, { Fragment, useContext } from "react";
import {
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

const ShopByPetComponent = ({ id, onMove }) => {
  const { login } = useContext(LoginContext);
  const loggedIn = login;
  const navigate = useNavigate();

  const handleMoveClick = (route) => {
    navigate(route);
  };

  const cardsArray = [
    {
      number: "Dog",
      imageAlt: "dog image",
      image: "/assets/imgs/ShopByPetImage/dog.jpeg",
      route: ROUTES.DOGFOOD,
    },
    {
      number: "Cat",
      imageAlt: "cat image",
      image: "/assets/imgs/ShopByPetImage/cat.jpeg",
      route: ROUTES.CATFOOD,
    },
    {
      number: "Pet Bird",
      imageAlt: "bird image",
      image: "/assets/imgs/ShopByPetImage/bird.jpeg",
      route: ROUTES.BIRDFOOD,
    },
    {
      number: "Small Pet",
      imageAlt: "small pet image",
      image: "/assets/imgs/ShopByPetImage/small-pet.jpeg",
      route: ROUTES.SMALLPETFOOD,
    },
    {
      number: "Fish",
      imageAlt: "fish image",
      image: "/assets/imgs/ShopByPetImage/fish.jpeg",
      route: ROUTES.FISHFOOD,
    },
  ];

  const MobileDevice = useMediaQuery("(max-width:600px)");

  return (
    <Fragment>
      <Typography
        variant="h6"
        align="left"
        sx={{
          textAlign: MobileDevice ? "center" : "left",
          width: "60vw",
        }}
      >
        Shop by pet
      </Typography>
      <Grid container spacing={4}>
        {cardsArray.map((card, index) => (
          <Grid item xs={6} sm={6} md={4} lg={2.4} key={index}>
            <Card
              square
              raised
              style={{
                marginBottom: MobileDevice ? 0 : 70,
                marginTop: 20,
                border: "none",
                boxShadow: "none",
              }}
            >
              <CardActionArea onClick={() => handleMoveClick(card.route)}>
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.imageAlt}
                  style={{ borderRadius: "50%" }}
                />
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
    </Fragment>
  );
};

ShopByPetComponent.propTypes = {
  id: PropTypes.string.isRequired,
  onMove: PropTypes.func.isRequired,
};

export default ShopByPetComponent;
