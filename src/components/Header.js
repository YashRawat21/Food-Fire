import {useState} from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [loginBtn , setLoginBtn] = useState("login")

    return(
      <div className="header">
        <div className = "logo-container">
        <img src = "Food Fire Logo.png"  className="logoImg"/>
        </div>
      
        <div className="navItems">
          <ul>
            <li><Link to= "/" style={{textDecoration : "none" , color : "inherit"}}> Home</Link></li>
            <li><Link to="/about" style={{textDecoration : "none" , color:"inherit"}}>About Us</Link></li>
            <li><Link to= "/contact" style={{textDecoration : "none" , color : "inherit"}}>Contact Us</Link></li>
            <li> Cart</li>
            <li onClick={() => {loginBtn === "login" ? setLoginBtn("logout") : setLoginBtn("login")}}>{loginBtn}</li>
           {/* <button className = "login-btn"onClick = {() => { loginBtn === "login" ? setLoginBtn("logout") : setLoginBtn("login")}}>{loginBtn}</button> */}
           </ul>
        </div>
        
      </div>
    )
  }
  export default Header;