import "../App.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://authentication-project-backend.vercel.app/auth/forgot-password",
        {
          email,
        }
      )
      .then(() => {
        navigate("/");
        alert("Check your email for password reset link");
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          alert(error.response.data.message); // Display error message
        } else {
          alert("An error occurred. Please try again."); // Display generic error message
        }
      });
  };
  return (
    <>
      <div className="login-container">
        <h2 className="text-2xl font-bold">Forgot Password</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
