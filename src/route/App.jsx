import React from "react";
import Header from "../components/Header";
import Footer from '../components/Footer'
import Home from "./Home";
import Bag from './Bag'


let App = () =>{
    return(
        <>
            <Header/>
            <Bag/>
            <Home/>
            <Footer/>
        </>
    )
}

export default App;