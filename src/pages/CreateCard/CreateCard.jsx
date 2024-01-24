import { useState } from "react";
import { Avatar, Box, Grid, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import validateSchema from "../../validation/cardValidation";
import TextInputComponent from "../../components/TextInputComponent";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PageHeader from "../../components/PageHeader";
import ROUTES from "../../routes/ROUTES";
import { toServerCreate } from "./normalizeCreateCard";
import { useNavigate } from "react-router-dom";

const CreateCard = () => {
  const [inputsValue, setInputValue] = useState({
    title: "",
    subtitle: "",
    phone: "",
    add: "",
    mail: "",
    description: "",
    web: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    subtitle: "",
    description: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  let keysArray = Object.keys(inputsValue);
  const handleInputChange = (e) => {
    setInputValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleInputsBlur = (e) => {
    const { error } = validateSchema[e.target.id]({
      [e.target.id]: inputsValue[e.target.id],
    });
    console.log({ error });
    if (error) {
      setErrors((cErrors) => ({
        ...cErrors,
        [e.target.id]: error.details[0].message,
      }));
    } else {
      setErrors((cErrors) => {
        delete cErrors[e.target.id];
        return { ...cErrors };
      });
    }
  };

  const handleUpdateChangesClick = (e) => {
    e.preventDefault();

    console.log(toServerCreate(inputsValue));
    axios
      .post(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards",
        toServerCreate(inputsValue)
      )

      .then(({ data }) => {
        console.log("Response from server:", data);
        navigate(ROUTES.MYCARDS);
      })
      .catch((err) => {
        console.log("Error:", err.response);
      });
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
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <PageHeader
        title="Cards"
        subtitle="On this page you can create your cards"
      />
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {keysArray.map((keyName) => (
            <TextInputComponent
              key={"inputs" + keyName}
              id={keyName}
              label={keyName}
              value={inputsValue[keyName]}
              onChange={handleInputChange}
              onBlur={handleInputsBlur}
              errors={errors[keyName]}
            />
          ))}
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs>
          <Link to={ROUTES.HOME}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleUpdateChangesClick}
              disabled={Object.keys(errors).length > 0}
            >
              Create
            </Button>
          </Link>
        </Grid>
        <Grid item xs>
          <Link to={ROUTES.HOME}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Discard
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CreateCard;
