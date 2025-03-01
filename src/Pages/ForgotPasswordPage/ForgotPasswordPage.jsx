import "./ForgotPasswordPage.css";
// import lockIcon from '../assets/lock-icon-original';

function ForgotPasswordPage() {
  return (
    <div className="forgotpassword-main-container">
      <div className="forgotpassword-left-image-container"></div>

      <div className="forgotpassword-right-content-container">

        <div className="left-arrow-button">
          <button>
            <i class="fa-solid fa-arrow-left"></i>
          </button>
        </div>

        <div className="forgotpassword-second-right-content-container">

            <div className="forgotpassword-lock-logo"></div>

            <div className="forgotpass-subtitle">
            <p>Forgot Password?</p>
            </div>

            <div className="forgotpass-subtitle-desc">
            <p>
                All good. Enter your account's Email address and we will send you a
                <br />
                link to reset your password.
            </p>
            </div>

            <div className="forgotpass-email-input-box">
            <input
                type="email"
                id="email"
                title="E-mail"
                placeholder="Email address"
                required
            />
            </div>

            <div className="forgotpass-signin-button">
            <button type="submit">SIGN IN</button>
            </div>

        </div>

      </div>
    </div>
  );
}

export default ForgotPasswordPage;
