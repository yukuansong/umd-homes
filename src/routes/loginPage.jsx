import { useState } from "react";

import "./loginPage.css";
import axios from "axios";

export default function LoginPage(props) {
  const { screen, setScreen } = props;
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleChange = (event) => {
    let name = event.target.name;
    if (name === "uname") {
      setUsername(event.target.value);
    } else if (name === "psw") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    const res = await axios.get("/authenticate", { auth: { username, password } });
    if (res.data.screen !== undefined) {
      setScreen(res.data.screen);
    }
  };

  return (
    <div>
      {/* The Modal */}
      <div id="myModal" className="modal001">
        <div className="modal-content001">
          <div className="image-container">
            <img
              src={process.env.PUBLIC_URL + "img_avatar2.png"}
              alt="Avatar"
              className="avatar"
            ></img>
          </div>
          <div className="container">
            <label>
              <b>User name</b>
            </label>

            <input
              placeholder="Enter user name"
              type="text"
              name="uname"
              onChange={handleChange}
            ></input>
            <label>
              <b>Password</b>
            </label>
            <input
              onChange={handleChange}
              placeholder="password"
              type="password"
              name="psw"
            ></input>
            <button type="button" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
