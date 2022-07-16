import { Component } from "react";

import "./login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { style: "hide-it",
                   username: "",
                   password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    if (name === "uname") {
      this.setState({username: event.target.value})
    }
    else if (name === "psw") {
      this.setState({password: event.target.value})
    }
  }

  handleSubmit(event) {
    let username = this.state.username;
    let password = this.state.password;
    alert(username + password);
  }

  render() {
    const modalclass = `modal001 ${this.state.style}`;
    return (
      <div
        onClick={(event) => {
          if (event.target.id === "myModal") {
            this.setState({ style: "hide-it" });
          }
        }}
      >
        {/* Trigger/Open the Modal */}
        <button
          id="myBtn"
          onClick={() => {
            this.setState({ style: "display-it" });
          }}
        >
          Open Modal
        </button>

        {/* The Modal */}
        <div id="myModal" className={modalclass}>
          <div className="modal-content001">
            <div className="image-container">
              <span
                className="close001"
                onClick={() => {
                  this.setState({ style: "hide-it" });
                }}
              >
                &times;
              </span>
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
                onChange={this.handleChange}
              ></input>
              <label>
                <b>Password</b>
              </label>
              <input onChange={this.handleChange} placeholder="password" type="password" name="psw"></input>
              <button type="button" onClick={this.handleSubmit}>Login</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
