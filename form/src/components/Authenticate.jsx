import React, { useState } from "react";

export default function Authenticate({ token, setToken }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [userData, setUserData] = useState(null);

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();
      console.log(result);

      if (result.success) {
        // Store the success message in state
        setSuccessMessage(result.message);
        setUserData(result.data);
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Authenticate!</h2>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      {userData && <p>Logged in as: {userData.username}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
}
