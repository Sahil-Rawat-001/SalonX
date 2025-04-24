import React, { useEffect, useRef, useState } from 'react'
import '../otpinput/otpinput.css'


const OtpInput = ({length=6,onOtpSubmit = () => {}}) => {

    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    useEffect(() => {
        if(inputRefs.current[0]){
            inputRefs.current[0].focus(); 
        }
    },[])

    const handleChange = (index, element) => {
       const value = element.target.value;

       if(isNaN(value)) return;

    
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);

        setOtp(newOtp);
        const combinedOtp = newOtp.join("");
    
        // Auto-focus next input
        if (value && index < length - 1 && inputRefs.current[index+1]) {
          inputRefs.current[index + 1].focus();
        }
    }

    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1,1);
    }

    const handleKeyDown = (index, e) =>{

        if(e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index-1])
        {
            inputRefs.current[index-1].focus();
        }
    }
      

  return (
    <div>
        {
            otp.map((value, index) => {
                return <input
                 key={index}
                 ref={(input) => (inputRefs.current[index] = input)}
                 type='text'
                 value={value}
                 onChange={(e) => handleChange(index,e)}
                 onClick={() => handleClick(index)}
                 onKeyDown={(e) => handleKeyDown(index,e)}
                 className='otpInput-field'
                />
            })
        }
    </div>
  )
}

export default OtpInput