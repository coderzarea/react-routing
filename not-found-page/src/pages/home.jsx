import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate(`/users/${userId}`);
  }

  return (
    <>
      <h1>Welcome to Coderz Area</h1>
      <form onSubmit={(e) => handleLogin(e)}>
        <input
          type="text"
          placeholder="User id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Home;
