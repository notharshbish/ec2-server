import React from 'react'
import '../css/LoginPage.css'
import logo from '../images/twitter-logo.png'
import google from '../images/google.png'

function SignUpPage() {
  return (
    <div className='container'>
        <div className="loginContainer">
            {/* Logo */}
            <img className = "loginContainer_img" src={logo} alt="" srcset="" />
            {/* Sign in with google */}
            <div className = "loginContainer_google">
                <img className = "loginContainer_google--img" src={google}alt="" />
                <span>Sign Up with Google</span>
            </div>
            {/* or */}
            <span style = {{fontWeight : 800, fontSize : '15px'}}>Or</span>
            {/* user input form  */}
            <div className = "loginContainer_user">
                <input className = "loginContainer_user--username" type="text" placeholder = "Username"/>
                <input className = "loginContainer_user--username" type="text" placeholder = "Phone or email"/>
                <input className = "loginContainer_user--password" type="password" placeholder='Password'/>
            </div>
            {/* next button */}
            <div className = "loginContainer_next">
                <span>Next</span>
            </div>
            {/* forgot password */}
            <span className = "loginContainer_sign">Already have an account ? <a href="http://localhost:3000/login">Sign In</a></span>
        </div>
    </div>
  )
}

export default SignUpPage