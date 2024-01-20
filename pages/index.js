"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter()

  const register = (e) => {
    e.preventDefault();
    validateFields();
    if (!error) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email,
          password,
        })
      );
      setEmail("");
      setPassword("");
      router.push('/login')
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
    <div className="register">
      <h2>Register</h2>
      <form className="sign-up-form">
        {error && (
          <p className="error-para">"Email or password isn't entered!"</p>
        )}
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
        <button type="submit" className="register-btn" onClick={register}>
          Register
        </button>
      </form>
      <div>
        Already have an account?
        <Link href="/login">
          <button className="login-link">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
