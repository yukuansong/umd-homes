import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Expenses from "./routes/Expenses";
// import Townhouse5303 from "./routes/Townhouse5303";

// import NavigationBar from "./navigationBar";
import Home from "../home";
// import Zigzag from "./zigzag";
// import Color from "./routes/colors";
// import Blogs from "./routes/blogs";
// import How2 from "./routes/how2";
// import Slideshow from "./routes/slideshow";
// import Example from "./routes/example";
// import Login from "./login"
import Header from "../header";
import NavigationBar from "../navigationBar";
import Logout from './logout';
import {Registration} from './registration';
import {useEffect} from 'react';
import axios from 'axios';

function View(props) {
  const { screen, setScreen } = props;

  const readCookie = async () => {
    try {
      const res = await axios.get('/read-cookie');
      
      console.log("====== read cookie!")
      if (res.data.screen !== undefined) {
        setScreen(res.data.screen);
      }
    } catch (e) {
      setScreen('auth');
      console.log(e);
    }
  };

  useEffect(() => {
    readCookie();
  });

  return (
    <div>
      <Header />
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/logout" element={<Logout setScreen={setScreen} />} />
          <Route path="/registration" element={<Registration/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default View;
