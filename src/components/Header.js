import {useState} from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "./useOnlineStatus"

const Header = () => {
  const [loginBtn , setLoginBtn] = useState("login")
   const onlineStatus = useOnlineStatus();  
    return(
      <div className="flex justify-between bg-red-500 ">
        <div className = "w-28 ">
        <img src = "FoodFire.png"  className="h-24 mt-4 w-29 cursor-pointer" alt="logoImg"/>
        </div>
      
        <div className="navItems ">
          <ul className="flex items-center p-8 m-4 gap-4 cursor-pointer font-medium text-white">
            <li className="hover:text-gray-500">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
            <li className="hover:text-gray-500"><Link to= "/" style={{textDecoration : "none" , color : "inherit"}}> Home</Link></li>
            <li className="hover:text-gray-500"><Link to="/about" style={{textDecoration : "none" , color:"inherit"}}>About Us</Link></li>
            <li className="hover:text-gray-500"><Link to= "/contact" style={{textDecoration : "none" , color : "inherit"}}>Contact Us</Link></li>
           <li className="hover:text-gray-500"><Link to= "/grocery" style={{textDecoration : "none" , color : "inherit"}}>Grocery</Link></li>
            <li className="hover:text-gray-500"> Cart</li>
            <li className="hover:text-gray-500" onClick={() => {loginBtn === "login" ? setLoginBtn("logout") : setLoginBtn("login")}}>{loginBtn}</li>
           {/* <button className = "login-btn"onClick = {() => { loginBtn === "login" ? setLoginBtn("logout") : setLoginBtn("login")}}>{loginBtn}</button> */}
           </ul>
        </div>
        
      </div>
    )
  }
  export default Header;