import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../services/auth.service';
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
