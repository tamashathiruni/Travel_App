import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import React from "react"
import UserRegister from "../components/UserRegister"

function Register() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <UserRegister/>
      </div>
      <Footer/>
    </div>
  )
}

export default Register
