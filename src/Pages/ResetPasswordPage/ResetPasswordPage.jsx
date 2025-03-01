import "./ResetPasswordPage.css";
// import lockIcon from '../assets/lock-icon-original';

function ResetPasswordPage() {
  return (
    <div className="resetpassword-main-container">
      <div className="resetpassword-left-image-container"></div>

      <div className="resetpassword-right-content-container">

        <div className="left-arrow-button">
          <button>
            <i class="fa-solid fa-arrow-left"></i>
          </button>
        </div>

        <div className="resetpassword-second-right-content-container">

            <div className="resetpassword-lock-logo"></div>

            <div className="resetpass-subtitle">
            <p>Reset Password</p>
            </div>

            <div className="resetpass-subtitle-desc">
            <p>
               Your new password must be a different password.
            </p>
            </div>
            
            {/* for set password */}
            <div className="resetpass-password-input-box">
            <input
                type="password"
                id="password"
                title="Type New Password"
                placeholder="Set New Password"
                required
            />
            </div>

            {/* for confirm password */}
            <div className="resetpass-password-input-box">
            <input
                type="password"
                id="password"
                title="Type New Password"
                placeholder="Confirm Password"
                required
            />
            </div>

            <div className="resetpass-signin-button">
            <button type="submit">Reset Password</button>
            </div>

        </div>

      </div>
    </div>
  );
}

export default ResetPasswordPage;
