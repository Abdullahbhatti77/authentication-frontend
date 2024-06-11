import "../App.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .post("https://authentication-project-backend.vercel.app/auth/login", {
        email,
        password,
      })
      .then((res) => {
        navigate("/home");
        alert(res.data.message);
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
        <h2 className="text-2xl font-bold">Login</h2>
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

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
          <div className="flex items-center justify-between mt-1">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <p className="mt-4 text-sm text-center text-gray-600">
            Dont have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
