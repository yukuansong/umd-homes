import { Component } from "react";
import "./login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { style: "hide-it" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(displayvalue) {
    this.setState({ style: displayvalue });
  }

  render() {
      let modalstyle = `${this.state.style} modal-container`;
    return (
      <div className="login-home">
        {/* login button */}
        <div className="modal-opener-container">
          <button
            className="modal-opener"
            onClick={(event) => {
              this.handleClick("display-it");
            }}
          >
            Login
          </button>
        </div>
        {/* Modal section */}
        <div className={modalstyle}>
            <div className="image-container">
                <h2>Put the image here!</h2>
            </div>
          <form className="my-modal">
            <label>
              <b>User name: </b>
            </label>
            <input type="text" placeholder="Enter user name" name="uanme" />
            <label>
              <b>Password: </b>
            </label>
            <input type="password" placeholder="password" name="psw" />
            <button type="button">Login</button>
          </form>
        </div>
      </div>
    );
  }
}
