import Navbar from '../components/Navbar';
import Headerc from '../components/Headerc';
import Footer from "../components/Footer";
import Features from "../components/Features";
import React from "react"

function Home_hotelR() {
  return (
    <div>
    <Navbar/>
    <Headerc/>
      <div className="container">
        <Features/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home_hotelR;