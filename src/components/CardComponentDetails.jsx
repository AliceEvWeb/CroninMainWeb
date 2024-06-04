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
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import LoginContext from "../store/loginContext";
import { useContext } from "react";

const CardComponent = ({
  title,
  subtitle,
  image,
  description,
  id,
  liked,
  onDelete,
  onEdit,
  onLike,
  onMove,
  price,
  likeCount,
}) => {
  const { login } = useContext(LoginContext);
  const loggedIn = login;

  const handleDeleteClick = () => {
    onDelete(id);
  };
  const handleEditClick = () => {
    onEdit(id);
  };
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
        <Typography marginBottom={0.5}>
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
        <Typography marginBottom={0.5}>
          <Typography component="span" fontWeight={700}>
            Price:
          </Typography>
          {price}
        </Typography>
        <Typography marginBottom={1}>
          <Typography component="span" fontWeight={700}>
            Description:
          </Typography>
          {description}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            {loggedIn && loggedIn.isAdmin && (
              <IconButton onClick={handleDeleteClick}>
                <DeleteIcon />
              </IconButton>
            )}
            {loggedIn && loggedIn.isAdmin && (
              <IconButton onClick={handleEditClick}>
                <ModeIcon />
              </IconButton>
            )}
          </Box>
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

CardComponent.propTypes = {
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

CardComponent.defaultProps = {
  image: "/assets/images/carouselImage/default.jpg",
  alt: "Card Image",
};

export default CardComponent;
