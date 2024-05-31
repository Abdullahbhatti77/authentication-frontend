import "../App.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { token } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://authentication-project-backend.vercel.app/auth/reset-password/" +
          token,
        {
          password,
        }
      )
      .then(() => {
        navigate("/home");
        alert("Password reset successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="login-container">
        <h2 className="text-2xl font-bold">Reset Password</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter new password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Reset Password</button>
        </form>
      </div>
    </>
  );
}
