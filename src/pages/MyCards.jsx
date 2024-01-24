import { Grid, Typography, Button, Box } from "@mui/material";
import ExpamdMoreIcons from "@mui/icons-material/ExpandMore";
import CardComponent from "../components/CardComponent";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import LoginContext from "../store/loginContext";
import PageHeader from "../components/PageHeader";

const MyCards = () => {
  return (
    <div>
      <PageHeader
        title="My Cards"
        subtitle="On this page you can find all yours cards"
      />

      <Box sx={{ textAlign: "center", marginTop: "5%", marginBottom: "5%" }}>
        <Button variant="contained" color="primary">
          Load More
        </Button>
      </Box>
    </div>
  );
};

export default MyCards;
