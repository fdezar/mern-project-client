import { useState, useEffect } from 'react';
import authService from '../../services/auth.service';

function MyProfilePage() {

    const [ user, setUser ] = useState({});

    useEffect(() => {
        authService.getUserProfile()
        .then(res => {
            console.log(res.data);
            setUser(res.data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>My Profile</h1>

            <img src={user.userImage} />

            <p>{user.firstName} {user.lastName}</p>

            <p>@{user.username}</p>

            <h3>About</h3>
            <p>{user.aboutMe}</p>
        </div>
    )
}

export default MyProfilePage;