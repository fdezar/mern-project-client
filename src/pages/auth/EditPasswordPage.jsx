import { AuthContext } from "../../context/auth.context.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import authService from "../../services/auth.service.js";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function EditPasswordPage() {
  const navigate = useNavigate();
  const { logOutUser } = useContext(AuthContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [editForm, setEditForm] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(undefined);

  const handleCurrentPassword = (e) => setCurrentPassword(e.target.value);
  const handleNewPassword = (e) => setNewPassword(e.target.value);
  const handleConfirmNewPassword = (e) => setConfirmNewPassword(e.target.value);
  const handleForm = () => setEditForm(!editForm);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      alert("Required.");
      return;
    }
    
    const requestBody = { currentPassword, newPassword, confirmNewPassword };

    authService.editProfilePassword(requestBody)
      .then((res) => {
        handleForm();
        logOutUser()
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
        // const errorDescription = error.response.data.message;
        // setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <div className="edit-profile">
      <h1>Password change</h1>
        <form onSubmit={handlePasswordSubmit}>
          <label>Current Password:</label>
          {/* <Box component="form" onSubmit={handlePasswordSubmit} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              type="password"
              name="password"
              label="Current password"
              value={currentPassword}
              onChange={handleCurrentPassword}
            />
          </Grid> */}
          <input
            type="password"
            name="password"
            value={currentPassword}
            onChange={handleCurrentPassword}
          />

          <label>New Password:</label>
          {/* <Grid item xs={12}>
            <TextField 
              type="password"
              name="password"
              label="New password"
              value={newPassword}
              onChange={handleNewPassword}
            />
          </Grid> */}
          <input
            type="password"
            name="password"
            value={newPassword}
            onChange={handleNewPassword}
          />

          <label>Confirm New Password:</label>
          {/* <Grid item xs={12}>
            <TextField 
              type="password"
              name="password"
              label="Confirm new password"
              value={confirmNewPassword}
              onChange={handleConfirmNewPassword}
            />
          </Grid> */}
          <input
            type="password"
            name="password"
            value={confirmNewPassword}
            onChange={handleConfirmNewPassword}
          />

            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button> */}
          <button type="submit">Save</button>
          {/* </Grid>
          </Box> */}
        </form>
      </div>
    </>
  );
}

export default EditPasswordPage;