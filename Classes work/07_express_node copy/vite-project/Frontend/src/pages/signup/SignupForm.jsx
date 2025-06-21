"use client";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import this
import { createuser } from "../../store/Slices/signup.slice";
import "./SignupForm.css";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ hook for navigation

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, user } = useSelector((state) => state.signupslice);

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(createuser({ email, password }));
  };

  // ✅ Redirect to login after successful signup
  useEffect(() => {
    if (user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <form onSubmit={handleSignup} className="signup-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? "Processing..." : "Sign Up"}
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default SignupForm;
