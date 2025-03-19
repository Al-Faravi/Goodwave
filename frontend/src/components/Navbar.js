import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("loggedInUser");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("User Logged out");
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <nav className="navbar">
      <div className="logo">Goodwave</div>

      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/discover-events" className="hero-btn">Discover Events</Link>
          <Link to="/My-Profile">My Profile</Link>
        </div>

        {/* Search Bar */}
        <input type="text" placeholder="Search events or requests..." className="search-bar" />

        {/* Logout Button */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
