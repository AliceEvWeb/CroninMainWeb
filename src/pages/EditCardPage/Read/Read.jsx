import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import CardComponent from "../../../components/CardComponent";

const Read = () => {
  const [card, setCard] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    axios
      .get("/cards/" + id)
      .then(({ data }) => {
        console.log(data);
        setCard(data);
      })
      .catch((err) => {
        console.log("error from axios", err);
      });
  }, [id]);

  if (card === null) {
    return <></>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3} key={"carsCard"}>
        <CardComponent
          id={card._id}
          title={card.title}
          subtitle={card.subtitle}
          image={card.image.url}
          phone={card.phone}
          address={card.address}
          cardNumber={card.bizNumber}
        />
      </Grid>
    </Grid>
  );
};

export default Read;
