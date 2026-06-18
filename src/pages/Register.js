import React, { useState } from "react";
import "./Register.css";
import { Navigate, useNavigate } from "react-router-dom";
import PrimaryInputField from "../components/PrimaryInputField";
import signup from "../media/signup.svg";
import api from "../services/api";

export default function Register() {
  const alreadySignedIn = !!sessionStorage.getItem("auth_user");
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  if (alreadySignedIn) {
    return <Navigate to="/" replace />;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!registerData.name || !registerData.email || !registerData.password) {
      setError("Please complete all required fields.");
      return;
    }

    if (registerData.email !== registerData.confirmEmail) {
      setError("Email and confirmation email must match.");
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await api.post("/registration", {
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
      });

      const authToken = btoa(`${registerData.email}:${Date.now()}`);
      sessionStorage.setItem("auth_token", authToken);
      sessionStorage.setItem(
        "auth_user",
        JSON.stringify({ email: registerData.email, name: registerData.name })
      );
      navigate("/");
    } catch (err) {
      setError("Unable to complete registration at the moment.");
      console.error(err);
    }
  }

  return (
    <div className="Registration-container">
      <div className="registration-page">
        <div className="signup-area">
          <h2>Start managing inventory faster</h2>
          <p className="subtitle">Secure sign-up with modern protections and instant access.</p>
          <form className="signup-input" onSubmit={handleSubmit}>
            <PrimaryInputField
              type="text"
              placeholder="Full name"
              name="name"
              value={registerData.name}
              onChange={handleChange}
            />
            <PrimaryInputField
              type="email"
              placeholder="Email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
            />
            <PrimaryInputField
              type="email"
              placeholder="Confirm Email"
              name="confirmEmail"
              value={registerData.confirmEmail}
              onChange={handleChange}
            />
            <PrimaryInputField
              type="password"
              placeholder="Password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
            />
            <PrimaryInputField
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleChange}
            />
            {error && <div className="form-error">{error}</div>}
            <button type="submit" className="btn btn-signup">
              Create account
            </button>
          </form>
        </div>
      </div>
      <div className="side-img">
        <img src={signup} alt="Signup illustration" />
      </div>
    </div>
  );
}
