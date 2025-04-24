import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../signup/signup.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios"; // Make sure axios is imported
import salonxlogo from "../../assets/logo.webp";

const SignUp = () => {
  const location = useLocation();
  const selectedRole = location.state?.selectedRole;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpverified, setIsOtpVerified] = useState(false);
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, password, confirmPassword } =
      formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      // check if otp is sent or not
      if (!isOtpSent) {
        try {
          const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/send-otp`, { email });
      
          if (response.status === 200) {
            setIsOtpSent(true);
            localStorage.setItem('userEmail',email);
            navigate('/user/verify');
          }
        } catch (err) {
          // 🔥 Display error from backend (like OTP already sent)
          alert(err.response?.data?.message || "Failed to send OTP");
        }
      
        return; // Make sure to stop further execution
      } else if (!isOtpverified) {
        // Verify OTP
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/auth/user/verify`,
          {
            email,
            otp,
          }
        );

        if (response.status === 200) {
          setIsOtpVerified(true);
          alert("OTP verified successfully! Now you can create your account.");
        } else {
          alert("Invalid OTP, please try again.");
        }
      } else {
        // save user
        // Final step, create user if OTP is verified
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`,
          {
            firstName,
            lastName,
            email,
            phone,
            password,
            role: selectedRole,
          }
        );

        if (response.status === 201) {
          alert("Signup successful!");
          // Redirect or move to the login page
        } else {
          alert(response.data.message || "Signup failed");
        }
      }
    } catch (err) {
      console.error(`Sign up error: ${err}`);
      if (err.response && err.response.status === 400) {
        alert(err.response.data.message); // shows: 'An OTP has already been sent. Please check your email.'
      }
      alert(err.response?.data?.message || "Signup failed, try again.");
    }
  };

  return (
    <>
      <header>
        <img src={salonxlogo} alt="img" />

        <h2>Salon-X</h2>
      </header>

      <hr />

      <main>
        <div className="main-content">
          <div className="left-arrow-button">
            <button>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </div>

          <div className="heading-content">
            <h2>Personal information</h2>

            <p>
              Welcome to our Platform! Please fill out the form below to create
              your account for {selectedRole || "guest"}.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group name-input-wrapper">
              <div className="firstname-field">
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange} // added onChange
                  required
                  placeholder="First Name"
                  className="name-input"
                />
              </div>

              <div className="lastname-field">
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange} // added onChange
                  required
                  placeholder="Last Name"
                  className="name-input"
                />
              </div>
            </div>

            <div className="form-group email-input-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange} // added onChange
                required
                placeholder="Email"
                className="email-input"
              />
            </div>

            {/* Phone input */}
            <div className="form-group phone-input-wrapper">
              <PhoneInput
                country={"in"} // Default country
                value={formData.phone}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    phone: value, // ✅ safe and correct
                  }))
                }
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                  placeholder: "Phone number",
                }}
                containerClass="custom-phone-container"
                inputClass="custom-phone-input"
                buttonClass="custom-flag-button"
              />
            </div>

            <div className="form-group password-field-container">
              {/* Password */}
              <div className="create-password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange} // added onChange
                  className="create-password-input"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="toggle-password-btn"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Confirm Password */}
              <div className="confirm-password-input-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange} // added onChange
                  className="confirm-password-input"
                  onPaste={(e) => e.preventDefault()}
                  onCopy={(e) => e.preventDefault()}
                  onCut={(e) => e.preventDefault()}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="toggle-password-btn"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button type="submit" className="signin-submit-btn">
              Sign In
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignUp;
