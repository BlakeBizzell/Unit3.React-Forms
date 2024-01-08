import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import "./index.css";
import React from "react";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}
