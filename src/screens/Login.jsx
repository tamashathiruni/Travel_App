import React from 'react'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Userlogin from '../components/Userlogin'

function Login() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Userlogin/>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
