import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate(`/users/${userId}/${username}`);
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
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Home;
