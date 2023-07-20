import {useState} from "react"

const Header = () => {
  const [loginBtn , setLoginBtn] = useState("login")
    return(
      <div className="header">
        <div className = "logo-container">
        <img src = "Food Fire Logo.png"  className="logoImg"/>
        </div>
      
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li> Cart</li>
            <li onClick={() => {loginBtn === "login" ? setLoginBtn("logout") : setLoginBtn("login")}}>{loginBtn}</li>
           {/* <button className = "login-btn"onClick = {() => { loginBtn === "login" ? setLoginBtn("logout") : setLoginBtn("login")}}>{loginBtn}</button> */}
           </ul>
        </div>
        
      </div>
    )
  }
  export default Header;