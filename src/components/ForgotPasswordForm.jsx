import React from "react";
import {
  TextField,
  Button,
  Grid,
  Alert,
  Paper,
  Box,
  Avatar,
  Typography,
  Divider,
  InputAdornment,
} from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const ForgotPasswordForm = ({
  emailValue,
  emailError,
  handleEmailChange,
  handleSubmit,
  handleEmailBlur,
}) => {
  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <VpnKeyIcon style={{ fontSize: "30px" }} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Typography variant="h7" sx={{ mt: 5 }}>
          Enter your email below and submit
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={emailValue}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon />
                  <Divider sx={{ height: 28, ml: 2 }} orientation="vertical" />
                </InputAdornment>
              ),
            }}
          />
          {emailError && <Alert severity="error">{emailError}</Alert>}
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          ></Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={emailError}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default ForgotPasswordForm;
