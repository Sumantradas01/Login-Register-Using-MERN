import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Use Login.css for styling

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate(); // Correct usage of useNavigate

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
        setSuccess("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:3001/login", { // Use correct backend URL
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.message || "Login failed.");
                setSuccess("");
            } else {
                setSuccess("Login successful!");
                setError("");
                setTimeout(() => {
                    navigate("/dashboard");
                }, 1000);
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
            setSuccess("");
        }
    };

    const handleSignupRedirect = () => {
        navigate("/register");
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="login-field">
                    <label className="login-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        className="login-input"
                    />
                </div>
                <div className="login-field">
                    <label className="login-label">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        minLength={6}
                        className="login-input"
                    />
                </div>
                {error && <div className="login-error">{error}</div>}
                {success && <div className="login-success">{success}</div>}
                <button
                    type="submit"
                    className="login-btn-main"
                >
                    Login
                </button>
                <div className="login-signup-row">
                    <span className="login-signup-text">New user?</span>
                    <button
                        type="button"
                        onClick={handleSignupRedirect}
                        className="login-signup-btn"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;