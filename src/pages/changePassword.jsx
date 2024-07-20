import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const passwordUser = { value: 'banana' };

function ChangePasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const navigate = useNavigate(); // Move useNavigate here

  const handlePasswordChange = (event) => {
    event.preventDefault();

    if (newPassword === confirmNewPassword) {
      passwordUser.value = confirmNewPassword;
      alert('Password changed successfully!');

      navigate('/');
    } else {
      alert('New passwords do not match.');
    }
  };

  return (
    <form id="change-password-form" onSubmit={handlePasswordChange}>
      <input
        className="input-box"
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        className="input-box"
        type="password"
        placeholder="Confirm New Password"
        value={confirmNewPassword}
        onChange={(e) => setConfirmNewPassword(e.target.value)}
      />
      <button className="logout-button" type="submit">
        Submit New Password
      </button>
    </form>
  );
}

export { passwordUser };
export default ChangePasswordPage;
