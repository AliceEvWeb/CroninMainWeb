import {
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { toast } from "react-toastify";
import PageHeader from "../../components/PageHeader";

const SandBox = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  const [visibleItem, setVisibleItem] = useState(5);
  const [displayedUsers, setDisplayedUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/users")
      .then(({ data }) => {
        setDataFromServer(data);
        setDisplayedUsers(dataFromServer);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }, [dataFromServer]);

  const handleLoadMore = () => {
    setVisibleItem((prev) => prev + 5);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/users/${id}`);
      setDataFromServer(dataFromServer.filter((user) => user._id !== id));
      toast("User Deleted successfully", { theme: "colored" });
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  return (
    <>
      <PageHeader
        title="Admin Panel"
        subtitle="On this page you can manage users"
      />
      <Box>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#d5d7fe", color: "black" }}
        >
          All
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell> {/* Added for numbering */}
              <TableCell>Image</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedUsers.slice(0, visibleItem).map((user, index) => (
              <TableRow key={user._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Avatar
                    src={user.image.url}
                    alt={`${user.name.first} ${user.name.last}`}
                    sx={{ width: 32, height: 32 }}
                  />
                </TableCell>
                <TableCell>{user.name.first}</TableCell>
                <TableCell>{user.name.last}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.isAdmin ? "Admin" : "User"}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`${ROUTES.UPDATE}/${user._id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(user._id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {visibleItem < dataFromServer.length && (
        <Box textAlign="center" my={4}>
          <Button
            variant="contained"
            onClick={handleLoadMore}
            sx={{ backgroundColor: "#d5d7fe", color: "black" }}
          >
            Load More
          </Button>
        </Box>
      )}
    </>
  );
};

export default SandBox;
