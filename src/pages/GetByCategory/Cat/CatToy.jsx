import { Grid } from "@mui/material";
import MyCardComponent from "../../../components/MyCardComponent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useCategoryCards from "../../../hooks/useCategoryCards";
import axios from "axios";
import { useContext, useEffect, useState, useMemo } from "react";
import LoginContext from "../../../store/loginContext";
import normalizeHome from "../../../pages/HomePage/normalizeHome";
import useQueryParams from "../../../hooks/useQueryParams";
import Button from "@mui/material/Button";

const CatToyCategoryCards = () => {
  const {
    handleDeleteCard,
    handleEditCard,
    handleMoveCard,
    handleLoadMore,
    visibleItem,
  } = useCategoryCards();

  const [dataFromServer, setDataFromServer] = useState([]);
  const { login } = useContext(LoginContext);
  const query = useQueryParams();
  const [categoryName, setCategoryName] = useState("cat-toy");

  useEffect(() => {
    axios
      .get(`/cards/products/${categoryName}`)
      .then(({ data }) => {
        setDataFromServer(normalizeHome(data));
      })
      .catch((err) => {});
  }, []);

  let dataFromServerFiltered = normalizeHome(
    dataFromServer,
    login ? login._id : undefined
  );

  const filteredCards = useMemo(() => {
    if (!dataFromServerFiltered.length) return [];
    const filter = query.filter ? query.filter : "";
    return dataFromServerFiltered.filter((item) =>
      item.title.startsWith(filter)
    );
  }, [query, dataFromServerFiltered]);

  if (!dataFromServerFiltered || !dataFromServerFiltered.length) {
    return <Typography>Could not find any items</Typography>;
  }

  const handleLikeCard = async (id) => {
    try {
      let { data } = await axios.patch("/cards/" + id);
      setDataFromServer((cDataFromServer) => {
        let cardIndex = cDataFromServer.findIndex((card) => card._id === id);
        if (cardIndex >= 0) {
          cDataFromServer[cardIndex] = data;
        }
        return [...cDataFromServer];
      });
    } catch (err) {}
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
        CAT FOOD
      </Typography>
      <Grid container spacing={2} marginBottom={"3vw"}>
        {filteredCards.slice(0, visibleItem).map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={"carsCard" + index}>
            <MyCardComponent
              id={item._id}
              title={item.title}
              subtitle={item.subtitle}
              category={item.category ? item.category.name : ""}
              price={item.price}
              image={item.image.url}
              phone={item.phone}
              address={item.address}
              cardNumber={item.bizNumber}
              liked={item.liked}
              onDelete={handleDeleteCard}
              onEdit={handleEditCard}
              onLike={handleLikeCard}
              onMove={handleMoveCard}
            />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#d5d7fe", color: "black" }}
        onClick={handleLoadMore}
      >
        Load More
      </Button>
    </Box>
  );
};

export default CatToyCategoryCards;
