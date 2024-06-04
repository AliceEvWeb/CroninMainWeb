import { IconButton, Typography } from "@mui/material";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { useLogin } from "../../store/adminLoginProvider";

const AdminPanel = ({
  id,
  image,
  admin,
  biz,
  first,
  last,
  country,
  city,
  onDelete,
  onEdit,
}) => {
  const { isLoggedIn, isAdmin, login, logout } = useLogin();

  const handleDelete = () => {
    if (!isLoggedIn || !isAdmin) {
      return;
    }
    onDelete(id);
  };

  const handleEdit = () => {
    if (!isLoggedIn || !isAdmin) {
      return;
    }
    onEdit(id);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="User avatar" src={image} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline", fontWeight: 500 }}
                component="span"
                variant="subtitle2"
                color={admin ? "red" : "text.primary"}
              >
                {(admin ? "Admin " : "User ") +
                  " - " +
                  (biz ? "Business" : "Not Business")}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline", fontWeight: 500 }}
                component="span"
                variant="subtitle2"
                color="text.primary"
              >
                {first + " " + last + " - "}
              </Typography>
              {country + ", " + city}.
            </React.Fragment>
          }
        />
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={handleEdit}>
          <CreateIcon />
        </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default AdminPanel;
