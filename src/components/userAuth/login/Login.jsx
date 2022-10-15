import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostLogin } from "../../../utils/httpRequests/HttpRequest";
import AuthContext from "../../../authContext/authContext";

const Login = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const initialFormState = {
    username: "",
    password: "",
  };
  const [userLogin, setUserLogin] = useState(initialFormState);

  const handleChange = (event) => {
    setUserLogin({ ...userLogin, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    PostLogin(userLogin)
      .then((res) => {
        if (res.user.isAdmin === true) {
          window.localStorage.setItem("token", res.token);
          window.localStorage.setItem("user", res.user.username);
          window.localStorage.setItem("isAdmin", true);
          window.localStorage.setItem("isLoggedIn", true);
          context.setIsLoggedIn(true);
          context.setAdmin(true);
          navigate("/");
        } else {
          window.localStorage.setItem("user", res.user.username);
          window.localStorage.setItem("isLoggedIn", true);
          context.setIsLoggedIn(true);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className="loginUsername">User Name:</h3>
        <input
          onChange={handleChange}
          id="username"
          value={userLogin.username}
          placeholder="Enter username"
        />
        <h3 className="loginUsername">Password:</h3>
        <input
          onChange={handleChange}
          id="password"
          value={userLogin.password}
          placeholder="password"
          type="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
