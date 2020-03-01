
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
const speakeasy = require("speakeasy");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secret: "",
      keylength: "20",
      key: "",
      otpInput: ""
    }

    this.handleSecretLength = this.handleSecretLength.bind(this);
  }

  handleSecretLength = (event) => {
    event.preventDefault();
    this.setState({ keylength: event.target.value });
  }

  handleotpInput = (event) => {
    event.preventDefault();
    this.setState({ otpInput: event.target.value });
  }

  lengthHandler = (event) => {
    event.preventDefault();
    if (isNaN(this.state.keylength) || this.state.keylength === "") {
      ReactDOM.render("Please enter a number.", document.getElementById('key-holder'));
    }
    else if (parseInt(this.state.keylength) <= 0 || parseInt(this.state.keylength) > 32) {
      ReactDOM.render("Key length should be between 1 and 32.", document.getElementById('key-holder'));
    }
    else {
      let generated_secret = speakeasy.generateSecret({ length: parseInt(this.state.keylength) });
      this.setState({ secret: generated_secret })
      ReactDOM.render(generated_secret.base32, document.getElementById('key-holder'));
    }
  }

  otpInputHandler = (event) => {
    event.preventDefault();
    if (this.state.secret == '') {
      ReactDOM.render("Please generate a secret key first.", document.getElementById('validation'));
    }
    else if (isNaN(this.state.otpInput) || this.state.otpInput == "" || this.state.otpInput.length != 6) {
      ReactDOM.render("Please enter a six-digit number.", document.getElementById('validation'));
    }
    else if (parseInt(speakeasy.totp({
      secret: this.state.secret.ascii,
      encoding: "ascii"
    })) === parseInt(this.state.otpInput)) {
      ReactDOM.render("Correct!", document.getElementById('validation'));
    }
    else {
      ReactDOM.render("Incorrect.", document.getElementById('validation'));
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Simple Google Authenticator App
          <p className="general-text">
            Zwe Nyan Toe
          </p>
        </header>
        <div className="length-request-holder">
          <div className="form-holder">
            <p className="general-text">Enter the ASCII length of your secret key.</p>
            <form
              id="secret-length-form"
              className="secret-form"
              onSubmit={this.lengthHandler}
            >
              <input
                type="text"
                className="input-styling"
                placeholder="Length of the secret"
                onChange={this.handleSecretLength}
                defaultValue={this.state.keylength} />
              <input
                className="generate-button"
                value="Generate"
                type="submit" />
            </form>
            <p className="general-text">
              Please enter this key into Google Authenticator  ↴
            </p>
            <div
              id="key-holder"
              className="key-holder">
              Click on generate!
          </div>
            <p className="general-text">
              Test your OTP here.
          </p>
            <form
              id="secret-length-form"
              className="secret-form"
              onSubmit={this.otpInputHandler}
            >
              <input
                type="text"
                className="input-styling"
                onChange={this.handleotpInput}
                placeholder="OTP from app" />
              <input
                className="generate-button"
                value="Validate"
                type="submit" />
            </form>
            <p className="general-text"
              id="validation" />

          </div>

        </div>
      </div>
    );
  }
}

export default App;