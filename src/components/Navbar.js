import React from "react";
import { Router, Route} from "react-router-dom";
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"

function Navbar() {
  return (
    <nav>
         <Router>
                <Route path="/home" component={Home} />
                <Route path="/home" component={Login} />
                <Route path="/home" component={Register} />
    </Router>
        {/* <Link to="/home" component={Home} />
        <Link to="/login" component={Login} />
        <Link to="/register" component={Register} /> */}
   
    </nav>
  );
}

export default Navbar;