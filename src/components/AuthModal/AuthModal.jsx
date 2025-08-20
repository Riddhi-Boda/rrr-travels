import React, { useState } from "react";
import "./AuthModal.css";

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert(`Logging in with phone: ${formData.phone}`);
    } else {
      alert(`Signing up with name: ${formData.name}, phone: ${formData.phone}`);
    }
    onClose(); // Close modal after action
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal-container">
        {/* Left Banner Image */}
        <div className="auth-modal-image">
          <img src="public/images/auth-banner.png" alt="auth-banner"/> 
        </div>

        {/* Right Form Section */}
        <div className="auth-modal-form">
          <div className="auth-modal-header">
            <div className="auth-toggle-buttons">
              <button
                className={isLogin ? "active" : ""}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={!isLogin ? "active" : ""}
                onClick={() => setIsLogin(false)}
              >
                Signup
              </button>
            </div>
            <span className="close-icon" onClick={onClose}>
              &times;
            </span>
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}

            <div className="form-group">
              <label>Phone Number</label>
              <div className="phone-input-group">
                <span className="country-code">+91</span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {!isLogin && (
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Set your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <button type="submit" className="submit-btn">
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
