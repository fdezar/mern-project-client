import { AuthContext } from "../../context/auth.context.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import authService from "../../services/auth.service";

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
        <form onSubmit={handlePasswordSubmit}>
          <label>Current Password:</label>
          <input
            type="password"
            name="password"
            value={currentPassword}
            onChange={handleCurrentPassword}
          />

          <label>New Password:</label>
          <input
            type="password"
            name="password"
            value={newPassword}
            onChange={handleNewPassword}
          />

          <label>Confirm New Password:</label>
          <input
            type="password"
            name="password"
            value={confirmNewPassword}
            onChange={handleConfirmNewPassword}
          />

          <button type="submit">Save</button>
        </form>
      </div>
    </>
  );
}

export default EditPasswordPage;