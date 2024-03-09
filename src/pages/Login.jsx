import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    fetch("http://localhost:3001/api/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const changeInputHandler = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = () => {
    if (userData.email === "" || userData.password === "") {
      setError("Please fill all the fields.");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    if (
      data.some(
        (user) =>
          user.email === userData.email && user.password === userData.password
      )
    ) {
      alert("You are logged in.");
      navigate("/");
      setError("Invalid email or password!");
      localStorage.setItem("isLoggedIn", true);
    } else {
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login_form">
          {error ? <p className="form_error-message">{error}</p> : ""}
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
          <button type="button" className="btn primary" onClick={handleClick}>
            Login
          </button>
        </form>
        <small>
          Don't have an account? <Link to="/register">sign up</Link>
        </small>
      </div>
    </section>
  );
}

export default Login;
