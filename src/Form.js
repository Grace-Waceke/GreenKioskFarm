import React from "react";
import './Form.css';
import Profile from './Profile.png'
import {FaFacebook,FaLinkedin,FaGoogle} from "react-icons/fa";

const Form = () =>{
    return(
        <div className="login">
        <div className="container">
        <div  className="sign">
        <p>Dont have an account? <b className="sign">Signup</b></p>
        <h1>Welcome Back</h1>
         </div>
        <div className="form">
        <div className="your email">Your Email</div> 
        <input type="email" id="youremail" name="your email"/>
            </div>
            <br/>
            <br/>
        <div className="form1">
            <div className="password">password</div> 
      <input type="password" id="password" name="password"/>
     <div className="accept">
        <input type="checkbox" className="check"/>
        <h6>Keep me logged in</h6>
        </div>
        <h5>forget password</h5>
        </div>
      <button class="btn">Login</button>
      <div className="choice">
        <p>_____________OR______________</p>
       </div>
       <img src={Profile} className='photo' alt='profile'/>  
       <div className="icons">
        <div className="facebook">
                    <FaFacebook/>
                    </div>
                    <div className="linkedIn">
                    <FaLinkedin/>
                    </div>
                    <div className="google">
                    <FaGoogle/>
                    </div>
                 </div>
                 </div>
                </div>
                );
}


export default Form;