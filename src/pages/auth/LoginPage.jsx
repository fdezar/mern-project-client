import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../../services/auth.service";
import { AuthContext } from "../../context/auth.context";
import appThemeProvider from "../theme/appThemeProvider";
import { ThemeProvider } from "@mui/material";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function LoginPage() {
  const [email, setEmail] = useState("JohnDoe@localhost.com");
  const [password, setPassword] = useState("Admin1");
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmailInput = e => setEmail(e.target.value);
  const handlePasswordInput = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault()

    const user = {
        email,
        password
    };

    authService.login(user)
        .then(res => {
            // console.log(res.data);
            storeToken(res.data.authToken);
            authenticateUser();
            navigate('/dashboard');
        })
        .catch(err => {
            // console.error(err);
        });
  }

  return (
    <ThemeProvider theme={appThemeProvider}>
      <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src="/src/assets/images/silk-logo.png" style={{ width: '50px', margin: '40px auto' }}></img>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                color="secondary"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={handleEmailInput}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordInput}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  {/* <Link href="/signup" variant="body2"> */}
                  <Link to="/signup" style={{ textDecoration: 'none' }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;
