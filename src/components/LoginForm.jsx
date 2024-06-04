import React from "react";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Alert,
  Paper,
  Box,
  Avatar,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const LoginForm = ({
  emailValue,
  passwordValue,
  rememberMe,
  emailError,
  passwordError,
  handleEmailChange,
  handlePasswordChange,
  handleRememberMeChange,
  handleSubmit,
  handleEmailBlur,
  handlePasswordBlur,
  handleNavigateToForgotPasswordPage,
  handleAuth,
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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
          />
          {emailError && <Alert severity="error">{emailError}</Alert>}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={passwordValue}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
          />
          {passwordError && <Alert severity="error">{passwordError}</Alert>}
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
              }
              label="Remember me"
              style={{ alignSelf: "flex-start" }}
            />
            <button type="button" onClick={handleAuth}>
              Sign up with Google
            </button>
            <Button
              variant="text"
              onClick={handleNavigateToForgotPasswordPage}
              style={{ alignSelf: "flex-end" }}
            >
              Forgot password?
            </Button>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={emailError || passwordError}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default LoginForm;
