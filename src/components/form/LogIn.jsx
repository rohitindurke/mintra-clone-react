import React from "react";
import './styles.css';
import Header from '../Header'
import ad from './ad.png'
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <Header className="navbar"> 
      </Header>
      <div className="container">
        <div id="box">
        <img src={ad} alt="mintra sale img" className="login-image" />
          <div className="content">
          
          
          <form>
            <h3 style={{textAlign:'left'}}>
              Login or Signup
            </h3>
            
              <div className="containt">
                <div className="input-group mb-3">
                  <input type="number" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="+91  |  Mobile No" maxLength={10} />
                </div> 
                <div id="note"style={{color:'#B2B3BA',fontSize:"13px"}}>
                  By continuing, I agree to the <b href="https://www.myntra.com/termsofuse" style={{color:'#FE3E6C',textDecoration:'none',fontSize:"13px"}}>Terms of Use</b> & <b href="https://www.myntra.com/privacypolicy" style={{fontSize:"13px",color:'#FE3E6C',textDecoration:'none'}}> Privacy Policy</b>
                </div><Link to="/OTP">
                <button type="button" className="btn">continue</button></Link><br/>
               <a style={{color:'#B2B3BA',fontSize:"13px"}}> Have trouble logging in?</a> <b style={{color:'#FE3E6C',textDecoration:'none',fontSize:"13px"}} href="#"> Get help</b>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
