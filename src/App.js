 import "./styles.css";
import Header from "./components/Header";

import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
        <Outlet />
    </div>
  );
}

export default App;




//not using Keys(not acceptable) <<<<<index as keys <<<<<<<<<<  unique ID