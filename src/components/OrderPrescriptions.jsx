import React from "react";
import {
  Button,
  CardActionArea,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import deliveryTruckImage from "../assets/images/orderPrescriptionImage/delivery-truck.png";
import CheckListImage from "../assets/images/orderPrescriptionImage/check-list.png";
import ROUTES from "../routes/ROUTES";
import { useNavigate } from "react-router-dom";

const OrderPrescriptions = ({ backgroundColor }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const MobileDevice = useMediaQuery("(max-width:600px)");

  const handleMoveClick = () => {
    navigate(ROUTES.ORDERPRESCRIPTIONS);
  };

  return (
    <CardActionArea
      onClick={handleMoveClick}
      sx={{
        backgroundColor: backgroundColor,
        marginTop: MobileDevice ? 5 : 0,
        marginBottom: MobileDevice ? 5 : 5,
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        justifyContent: "space-around",
        width: isMobile ? "100%" : "1100px",
        textAlign: isMobile ? "center" : "left",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Grid item>
          <Typography variant="h4" fontWeight={500}>
            Order Prescriptions in 2 Easy Steps |
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#d5d7fe",
              color: "black",
              borderRadius: "15px",
              fontSize: "0.8rem",
              padding: "5px 15px",
              marginLeft: isMobile ? "0" : "20px",
              marginTop: isMobile ? "10px" : "0",
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: isMobile ? "column" : "row",
          marginTop: "10px",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <img
            src={CheckListImage}
            alt="Check List"
            style={{
              width: isMobile ? "50%" : "25%",
              height: isMobile ? "50%" : "25%",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              width: isMobile ? "100%" : "200px",
              paddingRight: isMobile ? "0" : "20px",
              textAlign: isMobile ? "center" : "left",
              marginTop: isMobile ? "10px" : "0",
            }}
          >
            1. We'll get <br /> approvals from <br /> you
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: isMobile ? "column" : "row",
            marginTop: isMobile ? "20px" : "0",
          }}
        >
          <img
            src={deliveryTruckImage}
            alt="Delivery Truck"
            style={{
              width: isMobile ? "50%" : "33%",
              height: isMobile ? "50%" : "33%",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              width: isMobile ? "100%" : "200px",
              paddingLeft: isMobile ? "0" : "20px",
              textAlign: isMobile ? "center" : "left",
              marginTop: isMobile ? "10px" : "0",
            }}
          >
            2. We'll ship your <br /> pet's products <br /> right to your door.
          </Typography>
        </Grid>
      </Grid>
    </CardActionArea>
  );
};

export default OrderPrescriptions;
