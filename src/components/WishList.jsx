import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './form/wish.css'


export default function WishList() {
  return (
    <div>
      <Header/>

      <div>
        <div id="item-box">
        <h2>My Wishlist <span>0</span> Items</h2>
        <div id="items"></div>
    </div>
    
   
    <div id="footer">
        <div id="_1">
            <div id="_11">
                <div id="_111">
                    <h5> ONLINE SHOPPING</h5>
                </div>
                <div id="_112">
                    <h5>USEFUL LINKS</h5>
                </div>
            </div>
            <div id="_12">
                <h5>CUSTOMER POLICIES</h5>
            </div>
            <div id="_13">
                <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
                <div id="buttons">
                    <img src="img/google_play.png" href="https://play.google.com/store/apps/details?id=com.myntra.android"/>
                    <img src="img/ios.png" href="https://apps.apple.com/in/app/myntra-indias-fashion-store/id907394059"/>
                </div>
            </div>
            <div id="_14"></div>
        </div>
        <div id="_2">
            <h5>POPULAR SEARCHES</h5>
        </div>
        </div>
    </div>
      <Footer/>
    </div>
  )
}
