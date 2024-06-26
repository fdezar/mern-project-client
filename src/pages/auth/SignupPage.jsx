import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import authService from "../../services/auth.service";

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import appThemeProvider from "../theme/appThemeProvider";
import { ThemeProvider } from "@mui/material";
import silkLogo from "/src/assets/images/silk-logo.png"
import styled from 'styled-components';

const ErrorMessageDiv = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 80px;
    text-align: justify;
    color: crimson;
`;

function SignupPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [password, setPassword] = useState("");
  const [userImage, setUserImage] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmailInput = e => setEmail(e.target.value);
  const handleUsernameInput = e => setUsername(e.target.value);
  const handleFirstNameInput = e => setFirstName(e.target.value);
  const handleLastNameInput = e => setLastName(e.target.value);
  const handleAboutMeInput = e => setAboutMe(e.target.value);
  const handlePasswordInput = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
        email,
        username,
        firstName,
        lastName,
        aboutMe,
        password,
    };

    const uploadData = new FormData();

    /* imageUrl => this name has to be the same as in the model since we pass
    req.body to .create() method when creating a new movie in '/api/movies' POST route */
    uploadData.append("userImage", userImage);
    
    authService
      .uploadImage(uploadData)
      .then(response => {
        console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        return response.data.fileUrl;
      })
        .then((fileURL) => {
            newUser.userImage = fileURL;
            authService.signup(newUser)
            .then(res => {
                // console.log(res.data);
                navigate('/login');
            })
            .catch(err => {
                // console.error(err);
                const errorDescription = err.response.data.message;
                setErrorMessage(errorDescription);
            });
        })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

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
        <img src={silkLogo} style={{ width: '50px', margin: '20px' }}></img>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  autoFocus
                  value={email}
                  onChange={handleEmailInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  value={username}
                  onChange={handleUsernameInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={handleFirstNameInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="family-name"
                  name="lastName"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  value={lastName}
                  onChange={handleLastNameInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="aboutMe"
                  fullWidth
                  id="aboutMe"
                  label="Something about you"
                  value={aboutMe}
                  onChange={handleAboutMeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="new-password"
                  name="password"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordInput}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  style={{ display: 'none' }}
                  accept="image/*"
                  id="image"
                  name="image"
                  type="file"
                  onChange={(e) => setUserImage(e.target.files[0])}
                />
                <label htmlFor="image">
                  <Button variant="contained" fullWidth component="span" sx={{ marginTop: '10px' }}>
                    Upload Profile Image
                  </Button>
                </label>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <ErrorMessageDiv>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </ErrorMessageDiv>
          </Box>
        </Box>
      </Container>
      </ThemeProvider>
  );
}

export default SignupPage;