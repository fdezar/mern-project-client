import { useState } from "react";
import axios from "axios";
import service from "../../services/file-upload.service";

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
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmailInput}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleUsernameInput}
        />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleNameInput}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleLastNameInput}
        />

        <label htmlFor="aboutMe">Something about you</label>
        <input
          type="text"
          name="aboutMe"
          id="aboutMe"
          value={aboutMe}
          onChange={handleAboutMeInput}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordInput}
        />

        <label htmlFor="image">Profile Image</label>
        <input
          type="file"
          name="image"
          id="image"
          value={userImage}
          onChange={handleUserImageInput}
        />

        <button type="submit">Sign Up</button>
      </form>

      <p>Your email is {email}</p>
      {isEmailValid() && <p>Your email address is correct</p>}
    </div>
  );
}

export default SignupPage;