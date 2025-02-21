import "./SignUpPage.css"
import backgrounImageForLeft from '../assets/signup-page-photo.jpg' 




function SignUpPage() {
  return (

    <div className="signup-container-first">


        <div className="signup-left-image-container"
         style={{backgroundImage:`url(${backgrounImageForLeft})`}}
        >
           
        </div>

        <div className="signup-right-content-container">

            <p className="signup-question">How would you like to use continue?</p>

            <div className="option-container right-container-client-option">

                <div className="client-option">
                 <span>I'm a Client</span>
                </div>

                <div className="client-option-desc">
                    <p>
                        Streamlining Your Salon Experience. <br/>
                        One Click at a Time.
                    </p>
                </div>
                {/* <img src="" alt="logo" /> */}
            </div>

            <div className="option-container right-container-stylist-option">

             <div  className="stylist-option">
                 <span>I'm a Stylist</span>
             </div>

             <div  className="stylist-option-desc">
                <p>
                    Empowering Stylists to Showcase Their <br/>
                    Talent and Grow Their Bussiness.
                </p>
            </div>

                {/* <img src="" alt="logo" /> */}
            </div>
            <div className="option-container right-container-salon-option">

            <div className="salon-option">
                <span>We're Salon</span>
            </div>

            <div className="salon-option-desc">
                <p>
                    Register Your Salon Today and Simplify. <br/>
                    Bookings for Your Clients.
                </p>
            </div>

                {/* <img src="" alt="logo" /> */}
            </div>

            <div className="have-an-account">
              <p>Already have an account?
                 <span>  
                   <a href="#"> Sign in</a>
                 </span>
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

export default SignUpPage;
