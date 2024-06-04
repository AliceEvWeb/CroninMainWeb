import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import LoginContext from "../store/loginContext";
import { useContext } from "react";

const CardComponetLikedCount = ({
  title,
  subtitle,
  image,
  cardNumber,
  id,
  liked,
  onLike,
  onMove,
  price,
  likeCount,
}) => {
  const { login } = useContext(LoginContext);
  const loggedIn = login;

  const handleLikeClick = () => {
    onLike(id);
  };
  const handleMoveClick = () => {
    onMove(id);
  };

  return (
    <Card square raised>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="Card Image"
          height={200}
          onClick={handleMoveClick}
        />
      </CardActionArea>
      <CardHeader title={title} subheader={subtitle}></CardHeader>
      <Divider></Divider>
      <CardContent>
        <Typography>
          By
          <Typography
            sx={{
              display: "inline",
              paddingLeft: "5px",
              fontStyle: "italic",
              fontWeight: "bold",
              color: "Blue",
            }}
          >
            PetExpress
          </Typography>
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Price:
          </Typography>
          {price}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Card number:
          </Typography>
          {cardNumber}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            {loggedIn && (
              <IconButton onClick={handleLikeClick}>
                {likeCount}
                <FavoriteIcon color={liked ? "error" : "inherit"} />
              </IconButton>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

CardComponetLikedCount.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    houseNumber: PropTypes.number.isRequired,
  }).isRequired,
  like: PropTypes.bool,
  cardNumber: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
CardComponetLikedCount.defaultProps = {
  image: "/assets/images/carouselImage/default.jpg",
  alt: "Card Image",
};

export default CardComponetLikedCount;
