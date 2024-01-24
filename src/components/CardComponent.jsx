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
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";

/**
 * title -> title
 * subtitle -> subheader
 */
const CardComponent = ({
  title,
  subtitle,
  image,
  phone,
  address,
  cardNumber,
  id,
  liked,
  onDelete,
  onEdit,
  onCall,
  onLike,
  onMove,
}) => {
  console.log("rerender from CardComponent");

  const handleDeleteClick = () => {
    console.log("Clicked on delete", id);
    onDelete(id);
  };
  const handleEditClick = () => {
    onEdit(id);
  };
  const handlePhoneClick = () => {
    onCall(id);
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
        <Typography>
          <Typography component="span" fontWeight={700}>
            Phone:
          </Typography>
          {phone}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Address:
          </Typography>
          {address.city}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Card number:
          </Typography>
          {cardNumber}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton onClick={handleDeleteClick}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={handleEditClick}>
              <ModeIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton onClick={handlePhoneClick}>
              <LocalPhoneIcon />
            </IconButton>
            <IconButton onClick={handleLikeClick}>
              <FavoriteIcon color={liked ? "error" : "inherit"} />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
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
  image: "/assets/imgs/car 1.jpg",
  subtitle: "subtitle default",
};

export default CardComponent;
