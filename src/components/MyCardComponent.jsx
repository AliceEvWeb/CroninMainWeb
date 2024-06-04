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

const MyCardComponent = ({
  title,
  subtitle,
  category,
  price,
  image,
  phone,
  id,
  liked,
  onDelete,
  onEdit,
  onLike,
  onMove,
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
          alt="american massle car"
          height={200}
          onClick={handleMoveClick}
        />
      </CardActionArea>
      <CardHeader title={title} subheader={subtitle}></CardHeader>
      <Divider></Divider>
      <CardContent>
        <Typography marginBottom={0.5}>
          <Typography component="span" fontWeight={700}>
            Phone:
          </Typography>
          {phone}
        </Typography>
        <Typography marginBottom={0.5}>
          <Typography component="span" fontWeight={700}>
            Category:
          </Typography>
          &nbsp;{category}
        </Typography>
        <Typography marginBottom={1}>
          <Typography component="span" fontWeight={700}>
            Price:
            <Typography component="span" fontWeight={400}>
              &nbsp;$
            </Typography>
          </Typography>
          {price}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            {loggedIn && loggedIn.isBusiness && (
              <IconButton onClick={handleDeleteClick}>
                <DeleteIcon />
              </IconButton>
            )}
            {loggedIn && loggedIn.isBusiness && (
              <IconButton onClick={handleEditClick}>
                <ModeIcon />
              </IconButton>
            )}
          </Box>
          <Box>
            {loggedIn && (
              <IconButton onClick={handleLikeClick}>
                <FavoriteIcon color={liked ? "error" : "inherit"} />
              </IconButton>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

MyCardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  price: PropTypes.number.isRequired,
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

MyCardComponent.defaultProps = {
  image: "/assets/imgs/default.jpg",
  alt: "Card Image",
};

export default MyCardComponent;
