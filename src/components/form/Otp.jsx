import React from 'react'
import './otp.css';
import Header from '../Header';


function Otp() {
  return (
    <div>
      <Header className="navbar"> 
      </Header>
      <div className="container">
        <div id="box">
        <form>
            <h3 style={{textAlign:'left'}}>
              Verify With OTP
             
            </h3>
              <div className="otp">
            <input type='text'className='ip' inputmode="numeric" maxlength="1" />
            <input type='text'className='ip' inputmode="numeric" maxlength="1" />
            <input type='text'className='ip' inputmode="numeric" maxlength="1" />
            <input type='text'className='ip' inputmode="numeric" maxlength="1" />
           </div>
           <div className="helpText">
             <b style={{color:'#FE3E6C',textDecoration:'none',fontSize:"13px"}} href="#"> Resend</b><br/>
             <a style={{color:'#B2B3BA',fontSize:"13px"}}> Login using  </a> <b style={{color:'#FE3E6C',textDecoration:'none',fontSize:"13px"}} href="#"> Password</b><br/>

            <a style={{color:'#B2B3BA',fontSize:"13px"}}> Have trouble logging in?</a> <b style={{color:'#FE3E6C',textDecoration:'none',fontSize:"13px"}} href="#"> Get help</b>
            </div> 
            </form>
        </div>
        </div>
    </div>
  )
}

export default Otp
