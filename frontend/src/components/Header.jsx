import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isNavShowing, setIsNavShowing] = useState(
    window.innerWidth > 800 ? true : false
  );

  const closeNave = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };

  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="nav_logo" onClick={closeNave}>
          <img src={logo} alt="Logo" />
        </Link>
        {isNavShowing && (
          <ul className="nav_menu">
            <li>
              <Link to="/profile/asdasd" onClick={closeNave}>
                Muhammad Muzammal
              </Link>
            </li>
            <li>
              <Link to="/" onClick={closeNave}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/create" onClick={closeNave}>
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/authors" onClick={closeNave}>
                Authors
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={closeNave}>
                Logout
              </Link>
            </li>
          </ul>
        )}
        <button
          className="nav_toggle-btn"
          onClick={(e) => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Header;
