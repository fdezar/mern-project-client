// import { useState, useEffect, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import authService from '../../services/auth.service';
// import { AuthContext } from "../../context/auth.context";
// import Button from "@mui/material/Button";
// import appThemeProvider from '../theme/appThemeProvider';
// import { ThemeProvider } from '@mui/material';

// function MyProfilePage() {

//     const [ myUser, setMyUser ] = useState(null);
//     const { logOutUser } = useContext(AuthContext);
//     const navigate = useNavigate();

//     useEffect(() => {
//         authService.getUserProfile()
//         .then(res => {
//             // console.log(res.data);
//             setMyUser(res.data);
//         })
//         // .catch(err => console.log(err));
//     }, []);

//     const handleDeleteProfile = () => {
//         authService.deleteProfile()
//             .then(() => {
//                 // console.log('Profile deleted');
//                 navigate('/');
//             })
//     }

//     const handleDeleteImage = () => {
//         authService.deleteProfileImage()
//             .then(() => {
//                 // console.log('User image deleted');
//             })
//     }

//     return !myUser ? (
//         <div>
//             <p>Loading</p>
//         </div>
//         ) : (
//         <ThemeProvider theme={appThemeProvider}>
//             <div>
//                 <h1>My Profile</h1>
            
//                 <img src={myUser.userImage} style={{ width: '30%'}}/>
            
//                 <p>{myUser.firstName} {myUser.lastName}</p>
            
//                 <p>@{myUser.username}</p>
            
//                 <h3>About</h3>
//                 <p>{myUser.aboutMe}</p>
            
//                 <Link to={'edit'}><Button variant="contained" style={{ marginBottom: "15px", marginRight: "5px" }}>Edit Profile</Button></Link>
//                 <Link to={'edit-password'}><Button variant="contained" style={{ marginBottom: "15px" }}>Edit Password</Button></Link>
//                 <br />
//                 {/* <Button variant="outlined" style={{ marginBottom: "15px", marginRight: "5px" }} onClick={logOutUser}>Logout</Button> */}
//                 <Button variant="outlined" color="error" style={{ marginBottom: "15px", marginRight: "5px" }} onClick={handleDeleteImage}>Delete image</Button>
//                 <Button variant="outlined" color="error" style={{ marginBottom: "15px" }} onClick={handleDeleteProfile}>Delete profile</Button>
//             </div>
//         </ThemeProvider>
//     )
// }

// export default MyProfilePage;

import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../services/auth.service';
import { AuthContext } from "../../context/auth.context";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import appThemeProvider from '../theme/appThemeProvider';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileImage = styled.img`
  width: 30%;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  margin-bottom: 20px;

  & > * {
    margin-right: 10px;
  }

  & > *:last-child {
    margin-right: 0;
  }
`;

function MyProfilePage() {
  const [myUser, setMyUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    authService.getUserProfile()
      .then(res => {
        setMyUser(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleDeleteProfile = () => {
    authService.deleteProfile()
      .then(() => {
        navigate('/');
      })
      .catch(err => console.error(err));
  }

  const handleDeleteImage = () => {
    authService.deleteProfileImage()
      .then(() => {
        // Image deleted
      })
      .catch(err => console.error(err));
  }

  return !myUser ? (
    <ProfileWrapper>
      <Typography variant="body1">Loading...</Typography>
    </ProfileWrapper>
  ) : (
    <ThemeProvider theme={appThemeProvider}>
      <ProfileWrapper>
        <Typography variant="h4">My Profile</Typography>
        
        <ProfileImage src={myUser.userImage} alt="Profile" />
        
        <Typography variant="h6">{myUser.firstName} {myUser.lastName}</Typography>
        
        <Typography variant="subtitle1">@{myUser.username}</Typography>
        
        <Typography variant="h6">About</Typography>
        <Typography variant="body1">{myUser.aboutMe}</Typography>
        
        <ButtonGroup>
          <Link to={'edit'} style={{ textDecoration: 'none' }}>
            <Button variant="contained">Edit Profile</Button>
          </Link>
          <Link to={'edit-password'} style={{ textDecoration: 'none' }}>
            <Button variant="contained">Edit Password</Button>
          </Link>
        </ButtonGroup>
        
        <ButtonGroup>
          <Button variant="outlined" color="error" onClick={handleDeleteImage}>Delete image</Button>
          <Button variant="outlined" color="error" onClick={handleDeleteProfile}>Delete profile</Button>
        </ButtonGroup>
      </ProfileWrapper>
    </ThemeProvider>
  );
}

export default MyProfilePage;
