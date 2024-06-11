import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const logout = () => {
    axios.defaults.withCredentials = true;
    axios
      .get("https://authentication-project-backend.vercel.app/auth/logout")
      .then((res) => {
        console.log(res.data);
        navigate("/");
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
      <button
        className="bg-blue-400 rounded-lg px-4 py-2 text-white"
        onClick={logout}
      >
        Logout
      </button>
    </>
  );
}
