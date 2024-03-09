import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
import authService from "../../services/auth.service";

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

function SignupPage() {
  const [email, setEmail] = useState("Admin12@localhost.com");
  const [username, setUsername] = useState("Admin");
  const [firstName, setFirstName] = useState("Admin");
  const [lastName, setLastName] = useState("Host");
  const [aboutMe, setAboutMe] = useState("Hello");
  const [password, setPassword] = useState("Admin10");
  const [userImage, setUserImage] = useState("");

  const navigate = useNavigate();

  const handleEmailInput = e => setEmail(e.target.value);
  const handleUsernameInput = e => setUsername(e.target.value);
  const handleFirstNameInput = e => setFirstName(e.target.value);
  const handleLastNameInput = e => setLastName(e.target.value);
  const handleAboutMeInput = e => setAboutMe(e.target.value);
  const handlePasswordInput = e => setPassword(e.target.value);
//   const handleUserImageInput = e => setUserImage(e.target.value);

  const handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
 
    
  };

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

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
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
                console.log(res.data);
                navigate('/login');
            })
            .catch(err => {
                console.error(err);
            });
        })
      .catch(err => console.log("Error while uploading the file: ", err));
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
                  accept="image/*"
                  id="image"
                  name="image"
                  type="file"
                  onChange={(e) => setUserImage(e.target.files[0])}
                />
                <label htmlFor="image">
                  <Button variant="contained" component="span">
                    Upload Profile Image
                  </Button>
                </label>
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
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
                {/* <Link href="/login" variant="body2"> */}
                <Link to="/login">
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