import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import authService from "../../services/auth.service";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import appThemeProvider from "../theme/appThemeProvider";
import { ThemeProvider } from "@mui/material";

function EditProfilePage() {

  const navigate = useNavigate();
  const [myUser, setMyUser] = useState(null);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [userImage, setUserImage] = useState("");

//   const isEmailValid = () => {
//     return email.includes("@");
//   };

  const handleEmailInput = e => setEmail(e.target.value);
  const handleUsernameInput = e => setUsername(e.target.value);
  const handleFirstNameInput = e => setFirstName(e.target.value);
  const handleLastNameInput = e => setLastName(e.target.value);
  const handleAboutMeInput = e => setAboutMe(e.target.value);

  useEffect(() => {
    authService.getUserProfile()
        .then((res) => {
            console.log(res.data);
            setMyUser(res.data);
            setEmail(res.data.email);
            setUsername(res.data.username);
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setAboutMe(res.data.aboutMe);
            setUserImage(res.data.userImage);
        })
  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    const editedUser = {
      email,
      username,
      firstName,
      lastName,
      aboutMe
    };

    const uploadData = new FormData();

    uploadData.append("userImage", userImage);

    authService
      .editProfileImage(uploadData)
      .then(res => {
        console.log("response is: ", res);
        return res.data.fileUrl;
      })
        .then(fileURL => {
          editedUser.userImage = fileURL;
          authService.editProfile(editedUser)
          .then(res => {
            // console.log(res.data);
            navigate('/dashboard/my-profile');
          })
          .catch(err => {
            // console.error(err);
          });
        })
      // .catch(err => console.error("Error while uploading the file: ", err));
  };

  return !myUser ? (
    <div>
        <p>Loading</p>
    </div>
    ) : (
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
          <img src="/src/assets/images/silk-logo.png" style={{ width: '50px', margin: '20px' }}></img>
          <Typography component="h1" variant="h5">
            Edit Profile
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
                  autoComplete="firstName"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
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
                <input
                  style={{ display: 'none' }}
                  accept="image/*"
                  id="image"
                  name="image"
                  type="file"
                  onChange={(e) => setUserImage(e.target.files[0])}
                />
                <label htmlFor="image">
                  <Button variant="contained" fullWidth component="span" style={{ marginTop: '10px' }}>
                    Upload Profile Image
                  </Button>
                </label>
              </Grid>
              {/* Checkbox if needed */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save Changes
            </Button>
            {/* Link for cancelling or going back */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default EditProfilePage;