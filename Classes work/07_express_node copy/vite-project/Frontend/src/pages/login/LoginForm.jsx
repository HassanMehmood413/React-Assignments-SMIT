"use client"

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginapproved } from "../../store/Slices/login.slice"
import "./LoginForm.css"

const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { loading, error, user } = useSelector((state) => state.loginslice)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (user) {
            navigate("/", { replace: true })
        }
    }, [user, navigate])

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginapproved({ email, password }))
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Welcome Back</h2>
                <form onSubmit={handleLogin} className="login-form">
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
                    <div className="forgot-password">
                        <a href="/forgot-password">Forgot password?</a>
                    </div>
                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? "Logging in..." : "Log In"}
                    </button>
                </form>
                {user && <p className="success-message">Welcome, {user.name}</p>}
                {error && <p className="error-message">{error}</p>}
                <div className="signup-link">
                    Don't have an account? <a href="/signup">Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
