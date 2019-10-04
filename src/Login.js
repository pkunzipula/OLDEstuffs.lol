/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import { navigate } from "@reach/router";
import xss from "xss";

const Login = ({ loggedIn, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const logToTheIn = event => {
    event.preventDefault();
    if (!email) {
      alert("Please enter your email");
      return;
    }
    if (!password) {
      alert("Please enter your password");
      return;
    }
    if (!passwordConfirm) {
      alert("Please enter your password confirmation");
      return;
    }
    if (password.length < 8) {
      alert("Your password must be at least 8 characters long");
      return;
    }
    if (password !== passwordConfirm) {
      alert("Your passwords DO NOT MATCH!");
      return;
    }

    const sanitizedEmail = xss(email);
    const sanitizedPassword = xss(password);
    alert(loggedIn);
    navigate("stuffs");
    setLoggedIn(true);
  };

  return (
    <div
      css={css`
        max-width: 800px;
        margin: 20px auto;
      `}
    >
      <h1>Log In Please</h1>
      <form onSubmit={logToTheIn}>
        <input
          type="email"
          onChange={event => setEmail(event.target.value)}
          placeholder="Enter your email"
          css={css`
            width: 100%;
            font-family: Fresca;
            font-size: 1.8rem;
            padding: 8px;
            margin: 25px 0;
          `}
        />
        <input
          type="password"
          onChange={event => setPassword(event.target.value)}
          placeholder="Enter your password"
          css={css`
            width: 100%;
            font-family: Fresca;
            font-size: 1.8rem;
            padding: 8px;
            margin-bottom: 25px;
          `}
        />
        <input
          type="password"
          onChange={event => setPasswordConfirm(event.target.value)}
          placeholder="Enter your password again"
          css={css`
            width: 100%;
            font-family: Fresca;
            font-size: 1.8rem;
            padding: 8px;
            margin-bottom: 25px;
          `}
        />
        <button
          css={css`
            background-color: limegreen;
            font-family: Fresca;
            font-size: 1.4rem;
            padding: 1rem;
            color: white;
            outline: none;
            border-color: transparent;
          `}
          type="submit"
        >
          Login!
        </button>
      </form>
    </div>
  );
};

export default Login;
