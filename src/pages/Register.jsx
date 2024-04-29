import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (
      userData.name === "" ||
      userData.email === "" ||
      userData.password === ""
    ) {
      setError("Please fill all the fields!");
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      if (userData.password === userData.password2) {
        axios.post("http://localhost:3001/api/data", {
          name: userData.name,
          email: userData.email,
          password: userData.password,
        });
        // localStorage.setItem("user", JSON.stringify(userData));
        alert("You are seccessfully registered.");
        navigate("/login");
      } else {
        setError("Confirm password is not matched!");
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    }
  };

  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register_form">
          {error ? <p className="form_error-message">{error}</p> : ""}
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={changeInputHandler}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={userData.password2}
            onChange={changeInputHandler}
          />
          <button type="button" className="btn primary" onClick={handleClick}>
            Register
          </button>
        </form>
        <small>
          Already have an account? <Link to="/login">sign in</Link>
        </small>
      </div>
    </section>
  );
}

export default Register;
