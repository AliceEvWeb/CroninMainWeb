import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import CardComponent from "../../components/CardComponent";
//import useQueryParams from "../../hooks/useQueryParams";
import LoginContext from "../../store/loginContext";
import { toast } from "react-toastify";

const FavCards = () => {
  const [cardData, setCardData] = useState([]);
  const [dataFromServer, setDataFromServer] = useState([]);
  //const navigate = useNavigate();

  const { id } = useParams();
  const { login } = useContext(LoginContext);

  const handleDeleteCard = async (id) => {
    if (dataFromServer.user_id === login._id) {
      toast.error("Your card shenged successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
  };

  useEffect(() => {
    try {
      axios
        .get("/cards")
        .then(({ data }) => {
          const likedCards = data.filter((card) =>
            card.likes.includes(login._id)
          );
          setCardData(likedCards);
        })
        .catch((err) => {
          console.log("error from axios (get cards)", err);
        });
    } catch (err) {
      console.log("error in useEffect", err);
    }
  }, [login._id, cardData]);

  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={"cards" + index}>
          <CardComponent
            id={card._id}
            title={card.title}
            subtitle={card.subtitle}
            image={card.image.url}
            phone={card.phone}
            address={card.address}
            cardNumber={card.bizNumber}
            liked={true}
            onDelete={handleDeleteCard}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FavCards;
