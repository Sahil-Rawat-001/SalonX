import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RolePage from '../Pages/rolepage/RolePage';
import SignUp from '../Pages/signup/SignUp';
import OtpVerify from '../Pages/otpverifcation/otpVerify';



const router = createBrowserRouter([
    {
        path: '/category',
        element: <RolePage/>,
    },
    {
        path: '/signup',
        element: <SignUp/>,
    },
    {
        path: '/user/verify',
        element: <OtpVerify/>,
    }
])

export default router