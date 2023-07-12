const Header = () => {
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
          </ul>
        </div>
      </div>
    )
  }
  export default Header;