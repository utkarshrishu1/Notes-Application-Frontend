import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="WelcomeOuter">
      <Link style={{ textDecoration: "none", color: "black" }} to="/signup">
        <div className="button goToSignup">Signup</div>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/login">
        <div className="button goToLogin">Login</div>
      </Link>
    </div>
)};
export default Welcome;
