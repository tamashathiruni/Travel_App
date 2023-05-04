import "./navbar.css"
import { useNavigate } from "react-router-dom";
  

function Navbar() {

  const navigate = useNavigate()

  const handleRegister = ()=>{
    navigate("/register", {state:{}})
  }

  const handleLogin = ()=>{
    navigate("/login", {state:{}})
  }

  const handleHome = ()=>{
    navigate("/", {state:{}})
  }

  return (
    <div className="navbar">
     <div className="navcontainer">
     
     {/* <img className="logoimage" src="hotel_images/Logo.jpg" alt="logoImg" /> */}
     
      <span className="logo" onClick={handleHome}>Holidaycentral</span>
      <div className="navitens">
        <button className="navbtn">Post your proprty here</button>
        <button className="navbtn" onClick={handleRegister}>Register</button>
        <button className="navbtn" onClick={handleLogin}>Login</button>
      </div>
     </div>
    </div>
  )
}

export default Navbar
