import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Signup.css'; // Import the CSS file
import axios from "axios"

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setError("");
        setSuccess("");
        if (name === "name") setName(value);
        else if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('mongodb://localhost:27017//register', { name, email, password })
            .then(result => {
                setSuccess("Registration successful! You can now log in.");
                setError("");
                setName("");
                setEmail("");
                setPassword("");
            })
            .catch(err => {
                setError("Registration failed. Please try again.");
                setSuccess("");
            });
    };

    const handleLoginRedirect = () => {
        window.location.href = "/login";
    };

    return (
        <div className="signup-container">
            <h2 className="signup-title">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="signup-field">
                    <label className="signup-label">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        className="signup-input"
                    />
                </div>
                <div className="signup-field">
                    <label className="signup-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                        className="signup-input"
                    />
                </div>
                <div className="signup-field">
                    <label className="signup-label">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                        minLength={6}
                        className="signup-input"
                    />
                </div>
                {error && <div className="signup-error">{error}</div>}
                {success && <div className="signup-success">{success}</div>}
                <button
                    type="submit"
                    className="signup-btn"
                >
                    Sign Up
                </button>
                <div className="signup-login-row">
                    <span className="signup-login-text">Already have an account?</span>
                    <button
                        type="button"
                        onClick={handleLoginRedirect}
                        className="login-btn"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signup;