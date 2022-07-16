import "./how2.css";
import { Link, Outlet } from "react-router-dom";

function How2() {
  return (
    <div >

      <div className="vertical-menu">

        <Link to="/how2/example" className="links">
          Example
        </Link>
        <Link to="/how2/link2" className="links">
          Link2
        </Link>
        <Link to="/how2/link3" className="links">
          Link3
        </Link>
        <Link to="/how2/link4" className="links">
          Link4
        </Link>
      </div>
      <Outlet/>
    </div>
    // <div>
    //   <h2>How to do Slide Show?</h2>
    //   <Slideshow/>
    // </div>
  );
}

export default How2;
