import React, { useState } from "react";
import "./Login.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import PrimaryInputField from "../components/PrimaryInputField";
import login from "../media/login.svg";
import api from "../services/api";

export default function Login() {
  const alreadySignedIn = !!sessionStorage.getItem("auth_user");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevValue) => ({
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

    if (!formData.email || !formData.password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await api.get("/registration", {
        params: {
          email: formData.email,
          password: formData.password,
        },
      });

      const user = response.data[0];
      if (!user) {
        setError("Invalid email or password. Please try again.");
        return;
      }

      const authToken = btoa(`${user.email}:${Date.now()}`);
      sessionStorage.setItem("auth_token", authToken);
      sessionStorage.setItem(
        "auth_user",
        JSON.stringify({ email: user.email, name: user.name || "Inventory User" })
      );
      navigate("/");
    } catch (err) {
      setError("Unable to log in right now. Please try again later.");
      console.error(err);
    }
  }

  return (
    <div className="Login-container">
      <div className="login-page">
        <div className="login-area">
          <h2>Welcome back</h2>
          <p className="subtitle">Securely access your inventory dashboard.</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <PrimaryInputField
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <PrimaryInputField
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {error && <div className="form-error">{error}</div>}
            <button type="submit" className="btn btn-login">
              Login
            </button>
          </form>
          <div className="signup-link">
            New here?
            <Link to="/register" className="text">
              Create an account
            </Link>
          </div>
        </div>
      </div>
      <div className="side-img">
        <img src={login} alt="Login illustration" />
      </div>
    </div>
  );
}
