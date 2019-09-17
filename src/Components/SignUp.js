import React, { useCallback } from "react";
import logo from "../Images/HourTimeLogo.png";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import firebaseConfig from "../firebaseConfig";
import "../App.css";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password} = event.target.elements;
    try {
      await firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
      history.push("/notes");
    } catch (error) {
      alert(error);
    }
  }, [history]);

    return (
      <div className="signupContainer">
        <img src={logo} className="loginLogo" alt="logo" />
        <p>Please enter the require information to sign up or return to the <Link to="/">log in</Link> page.</p>
        <form onSubmit={handleSignUp}>
          <input className="emailInput" name="email" type="email" placeholder="👩 Enter an email"/><br></br>
          <input className="passwordInput" name="password" type="password" placeholder="🔒 Enter a password"/><br></br>
          <button className="signupButton" type="submit"> Sign Up </button>
        </form>
      </div>
    );
};

export default withRouter(SignUp);