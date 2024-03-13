import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../services/auth.service';
import { AuthContext } from "../../context/auth.context";
import Button from "@mui/material/Button";

function MyProfilePage() {

    const [ myUser, setMyUser ] = useState(null);
    const { logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        authService.getUserProfile()
        .then(res => {
            // console.log(res.data);
            setMyUser(res.data);
        })
        // .catch(err => console.log(err));
    }, []);

    const handleDeleteProfile = () => {
        authService.deleteProfile()
            .then(() => {
                // console.log('Profile deleted');
                navigate('/');
            })
    }

    const handleDeleteImage = () => {
        authService.deleteProfileImage()
            .then(() => {
                // console.log('User image deleted');
            })
    }

    return !myUser ? (
        <div>
            <p>Loading</p>
        </div>
        ) : (
        <div>
            <h1>My Profile</h1>

            <img src={myUser.userImage} style={{ width: '30%'}}/>

            <p>{myUser.firstName} {myUser.lastName}</p>

            <p>@{myUser.username}</p>

            <h3>About</h3>
            <p>{myUser.aboutMe}</p>

            <Link to={'edit'}><Button variant="contained" style={{ marginBottom: "15px", marginRight: "5px" }}>Edit Profile</Button></Link>
            <Link to={'edit-password'}><Button variant="contained" style={{ marginBottom: "15px" }}>Edit Password</Button></Link>
            <br />
            <Button variant="outlined" style={{ marginBottom: "15px", marginRight: "5px" }} onClick={logOutUser}>Logout</Button>
            <Button variant="outlined" color="secondary" style={{ marginBottom: "15px", marginRight: "5px" }} onClick={handleDeleteImage}>Delete image</Button>
            <Button variant="outlined" color="secondary" style={{ marginBottom: "15px" }} onClick={handleDeleteProfile}>Delete profile</Button>
        </div>
    )
}

export default MyProfilePage;