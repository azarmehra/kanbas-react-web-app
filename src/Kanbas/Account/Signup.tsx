import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
      <div id="wd-signup-screen">
          <h3>Sign up</h3>
          <input className="form-control mb-1" placeholder="username"/>
          <input className="form-control mb-1" placeholder="password" type="password"/>
          <input className="form-control mb-1" placeholder="verify password" type="password"/>
          <a href="#/Kanbas/Account/Profile" className="btn btn-secondary">
              Sign up
          </a>
      </div>
  );
}
