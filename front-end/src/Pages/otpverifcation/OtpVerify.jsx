import React, { useEffect, useState } from "react";
import salonxlogo from '../../assets/logo.webp';
import '../otpverifcation/otpverify.css';
import OtpInput from "../../Components/otpinput/OtpInput";


const OtpVerify = () => {

  const [email, setEmail] = useState();

  useEffect(() => {
    const storedUserEmail = localStorage.getItem('userEmail');

    if(storedUserEmail){
      setEmail(storedUserEmail);
    }
  },[])

  function handleChangeEmail(){

  }

  const onOtpSubmit = () => {

  }


  return (
    <>
      <header>
        <img src={salonxlogo} alt="img" />

        <h2>Salon-X</h2>
      </header>

      <hr />

      <main>

        <div className="main-content">
           <h2>We just sent you a 6 digit code</h2>
           <p id="user-email">{email}  &nbsp;
            <span
             onClick={handleChangeEmail}
            >Change</span> 
          </p>


          <div className="otp-container">
           <OtpInput length={6} onOtpSubmit={onOtpSubmit}/>
          </div>
        </div>
       
      </main>
    </>
  );
};

export default OtpVerify;
