import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './route/App.jsx'
import './index.css'
import Bag from './route/Bag.jsx'
import {createBrowserRouter ,RouterProvider} from "react-router-dom";
import Profile from './components/Profile.jsx'
import WishList from './components/WishList.jsx'
import Otp from './components/form/Otp.jsx'
  

const router =createBrowserRouter([

{
path:"/",
element:<App/>
},

{
  path:"/Bag",
  element:<Bag/>

},
{
  path:"/Profile",
  element:<Profile/>
},
{
  path:"/wishList",
  element:<WishList/>
},
{
 path:"/OTP",
 element:<Otp/>
}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router = {router}/>
  </React.StrictMode>,
)
