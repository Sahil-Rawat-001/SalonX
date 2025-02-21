// import backgroundImageLeft from '../assets/signup-page-photo.jpg'
import './SignInPage.css'
import logo from '../assets/logo.png'
// import brand from '../assets/brand.png'



function SignInPage(){

    document.title = 'Sign-in';

    return(


        <div className="signin-container-first">

            <div className="signin-left-image-container"
             
            >


            </div>

            <div className="signin-right-content-container">

                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="greet-message">
                    <p>Welcome Back !</p>
                </div>

                <div className="sub-title">
                    <p>Get your campaign up and running in just minutes.</p>
                </div>

                <div className="input-box-email">
                    <input type="email" id='email' placeholder='Email address' required/>
                </div>

                <div className="input-box-password">
                    <input type="password" id='pass' placeholder='Password' required/>
                </div>

               <div className="remember-forget-container">

               <label>
                <input type="checkbox" id="remember-me" />
                Remeber me
                </label>

                <a href="#" className="forgot-password">Forgot Password?</a>

               </div>

               <div className="signin-button">
                 <button
                  type='submit'
                 >SIGN IN</button>
               </div>

               <div className="havean-account">
                <p>Did not have an account?
                   <span> Sign up</span>
                </p>
               </div>

               <hr />

                <div className="privacy-policy-agreement">
                    <p>
                        By proceeding, You agree to the Terms and Conditions and Privacy and Policy.
                    </p>

                    <div className="links-privacy-policy">
                        <a href="#" className="help-link">Help</a>
                        <a href="#" className="privacy-link">Privacy</a>
                        <a href="#" className="terms-link">Terms</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInPage