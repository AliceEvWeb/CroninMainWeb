import React from "react";
import {
  Button,
  CardActionArea,
  Grid,
  Icon,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ROUTES from "../routes/ROUTES";
import { useNavigate } from "react-router-dom";

const AutoshipLearnMoreComponent = ({ backgroundColor }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const MobileDevice = useMediaQuery("(max-width:600px)");

  const handleMoveClick = () => {
    navigate(ROUTES.HOWAUTOSHIPWORKS);
  };

  return (
    <CardActionArea
      onClick={handleMoveClick}
      sx={{
        backgroundColor: backgroundColor,
        marginTop: MobileDevice ? 5 : 0,
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: isMobile ? "100%" : "1100px",
        textAlign: isMobile ? "center" : "left",
      }}
    >
      <Typography variant="h5" sx={{ paddingLeft: "10px" }}>
        How
        <Typography variant="h4" fontWeight={500} sx={{ marginLeft: "-1px" }}>
          Autoship
        </Typography>
        works
      </Typography>
      <Icon
        style={{
          width: "100px",
          height: "45px",
          margin: isMobile ? "20px 0" : "0 -250px 0 -300px",
        }}
      >
        <AutorenewIcon fontSize="large" />
      </Icon>
      <Grid>
        <Typography variant="body1" sx={{ width: isMobile ? "100%" : "300px" }}>
          Pick your delivery schedule <br /> Save 5% on every order <br />{" "}
          Update, skip or cancel anytime
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#d5d7fe",
            color: "black",
            mt: "10px",
            borderRadius: "15px",
            fontSize: "0.8rem",
            padding: "5px 15px",
          }}
        >
          Learn More
        </Button>
      </Grid>
    </CardActionArea>
  );
};

export default AutoshipLearnMoreComponent;
