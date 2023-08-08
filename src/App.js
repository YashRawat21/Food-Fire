 import "./styles.css";
import Header from "./components/Header";

import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "./components/utils/UserContext";

function App() {
   const [userName , setUserName] = useState();

   useEffect(() => {
    const data = {
      name: "Yash Rawat"
    }
    setUserName(data.name)
   },[])
  return (
    <UserContext.Provider value={{loggedIn : userName ,setUserName}}>
    <div className="App">
      <Header />
        <Outlet />
    </div>
    </UserContext.Provider>
  );
}

export default App;
