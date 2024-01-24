import Grid from "@mui/material/Grid";

import CardComponent from "../../components/CardComponent";
import { useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";

import PageHeader from "../../components/PageHeader";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useQueryParams from "../../hooks/useQueryParams";

import LoginContext from "../../store/loginContext";
import normalizeHome from "./normalizeHome";
import Typography from "@mui/material/Typography";

const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);
  const query = useQueryParams();

  const [visibleItem, setVisibleItem] = useState(4);

  const handleLoadMore = () => {
    setVisibleItem((prev) => prev + 4);
  };

  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        console.log(normalizeHome(data));
        setDataFromServer(normalizeHome(data));
      })
      .catch((err) => {
        console.log("error from axios", err);
      });
  }, []);

  let dataFromServerFiltered = normalizeHome(
    dataFromServer,
    login ? login._id : undefined
  );
  if (!dataFromServerFiltered || !dataFromServerFiltered.length) {
    return <Typography>Could not find any items</Typography>;
  }

  //const filteredCards = useMemo(() => {
  //   if (!dataFromServer.length) return [];
  //  const filter = query.filter ? query.filter : "";
  //  return dataFromServer.filter((item) => item.title.startsWith(filter));
  //}, [query, dataFromServer]);

  const handleDeleteCard = (_id) => {
    console.log("_id to delete (HomePage)", _id);
    setDataFromServer((dataFromServerCopy) =>
      dataFromServerCopy.filter((item) => item._id !== _id)
    );
  };
  const handleEditCard = (_id) => {
    navigate(`${ROUTES.EDITCARD}/${_id}`);
  };
  const handlePhoneCard = (_id) => {
    //toast
  };

  const handleLikeCard = async (id) => {
    console.log("you liked card", id);
    try {
      let { data } = await axios.patch("/cards/" + id);
      console.log("data from axios (patch)", data);
      setDataFromServer((cDataFromServer) => {
        let cardIndex = cDataFromServer.findIndex((card) => card._id === id);
        if (cardIndex >= 0) {
          cDataFromServer[cardIndex] = data;
        }
        return [...cDataFromServer];
      });
      //update cards from server
    } catch (err) {
      console.log("error from axios (like)", err);
    }
  };

  const handleMoveCard = (_id) => {
    navigate(`${ROUTES.READ}/${_id}`);
  };

  return (
    <div>
      <PageHeader
        title="Cards"
        subtitle="On this page you can find all business cards from all categories"
      />

      <Grid container spacing={2}>
        {dataFromServerFiltered.slice(0, visibleItem).map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={"carsCard" + index}>
            <CardComponent
              id={item._id}
              title={item.title}
              subtitle={item.subtitle}
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
        ))}
      </Grid>
      <Box sx={{ textAlign: "center", marginTop: "5%", marginBottom: "5%" }}>
        <Button variant="contained" color="primary" onClick={handleLoadMore}>
          Load More
        </Button>
      </Box>
    </div>
  );
};

export default HomePage;
