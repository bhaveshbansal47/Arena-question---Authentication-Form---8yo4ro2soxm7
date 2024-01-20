"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
  const router = useRouter()

  const login = (e) => {
    e.preventDefault();
    validateFields();
    if (!error) {
      const credentials = localStorage.getItem("user");
      if (credentials) {
        const parsedCredentials = JSON.parse(credentials);
        if (
          email === parsedCredentials.email &&
          password === parsedCredentials.password
        ) {
          localStorage.setItem('loggedIn', 'true')
          router.push('/store')
        } else {
          setError(true);
        }
      } else {
        setError(true);
      }
    }
  };

  const validateFields = () => {
    if (!email || !password) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        {error && <p className="error-para">"Email or password is invalid"</p>}
        <div className="email-div">
          <label htmlFor="email">Email: </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            id="email"
            value={email}
          />
        </div>
        <div className="password-div">
          <label htmlFor="password">Password: </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="password"
            value={password}
          />
        </div>
        <button type="submit" className="login-btn" onClick={login}>
          Log In
        </button>
      </form>
      <div>
        Don't have an account?
        <Link href="">
          <button className="register-link">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
