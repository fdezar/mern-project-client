import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import authService from '../../services/auth.service';
import { AuthContext } from "../../context/auth.context";
import Button from "@mui/material/Button";

function MyProfilePage() {

    const [ myUser, setMyUser ] = useState(null);
    const { logOutUser } = useContext(AuthContext);

    useEffect(() => {
        authService.getUserProfile()
        .then(res => {
            // console.log(res.data);
            setMyUser(res.data);
        })
        // .catch(err => console.log(err));
    }, []);

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
            <Button variant="outlined" onClick={logOutUser}>Logout</Button>
        </div>
    )
}

export default MyProfilePage;