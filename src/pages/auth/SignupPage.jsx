import { useState } from "react";
import axios from "axios";
import service from "../../services/file-upload.service";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

function SignupPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [password, setPassword] = useState("");
  const [userImage, setUserImage] = useState("");

  const isEmailValid = () => {
        return email.includes("@");
    };

  const handleEmailInput = e => setEmail(e.target.value);
  const handleUsernameInput = e => setUsername(e.target.value);
  const handleNameInput = e => setName(e.target.value);
  const handleLastNameInput = e => setLastName(e.target.value);
  const handleAboutMeInput = e => setAboutMe(e.target.value);
  const handlePasswordInput = e => setPassword(e.target.value);
  const handleUserImageInput = e => setUserImage(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
        email,
        username,
        name,
        lastName,
        aboutMe,
        password,
        userImage
    };

    axios.post("", newUser)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
};

  return (
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  value={name}
                  onChange={handleNameInput}
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
                  accept="image/*"
                  id="image"
                  name="image"
                  type="file"
                  onChange={handleUserImageInput}
                />
                <label htmlFor="image">
                  <Button variant="contained" component="span">
                    Upload Profile Image
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
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
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}

export default SignupPage;