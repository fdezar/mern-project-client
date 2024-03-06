import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import authService from '../../services/auth.service';
import { AuthContext } from "../../context/auth.context";

function MyProfilePage() {

    const [ myUser, setMyUser ] = useState({});

    const { user } = useContext(AuthContext);

    useEffect(() => {
        authService.getUserProfile()
        .then(res => {
            console.log(res.data);
            setMyUser(res.data);
        })
        .catch(err => console.log(err));
    }, [user]);

    return !user ? (
        <div>
            <p>Loading</p>
        </div>
        ) : (
        <div>
            <h1>My Profile</h1>

            {/* <img src={myUser.userImage} /> */}

            {/* <p>{myUser.firstName} {user.lastName}</p> */}

            <p>@{myUser.username}</p>

            <h3>About</h3>
            {/* <p>{myUser.aboutMe}</p> */}
            
        </div>
    )
}

export default MyProfilePage;