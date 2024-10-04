import { Link } from "react-router-dom";
import React from "react";
export default function Signin() {
  return (
      <div id="wd-signin-screen">
          <h3>Sign in</h3>
          <input className="form-control mb-1" id="wd-username" placeholder="username"/>
          <input className="form-control mb-1" id="wd-password" placeholder="password" type="password"/>
          <a href="#/Kanbas/" className="btn btn-secondary">
              Sign in
          </a>
      </div>
  );
}
