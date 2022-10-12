import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">Home</span>
          </Link>
        </div>
        <div className="topbarCenter">
          <div className="post">
            <Link to="/posts" style={{ textDecoration: "none" }}>
              <span className="topbarLink">Posts</span>
            </Link>
          </div>
          <div className="developers">
            <Link to="/developers" style={{ textDecoration: "none" }}>
              <span className="topbarLink">Developers</span>
            </Link>
          </div>
          <div className="login developers">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span className="topbarLink">Login</span>
            </Link>
          </div>
          <div className="login developers">
            <Link to="/logout" style={{ textDecoration: "none" }}>
              <span className="topbarLink">Logout</span>
            </Link>
          </div>

          <div className="login developers">
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span className="topbarLink">Sign Up</span>
            </Link>
          </div>
        </div>

        <div className="topbarLeft">
          {/* <Link to="/login" style={{ textDecoration: "none" }}>
            <span className="topbarLink">Login</span>
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default Topbar; 
