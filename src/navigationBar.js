import "./navigationBar.css";
import { Link } from "react-router-dom";


function NavigationBar() {

  return (
    <div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/5306">5306 North Center Dr</Link>
        <Link to="/5303">5303 Smiths Cove Ln</Link>
        <Link to="/zigzag">Zigzag</Link>
        <Link to="/colors">Colors</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/how2">HowTo</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/registration">Registration</Link>
      </div>
    </div>
  );
}

export default NavigationBar;
