import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogin = async() => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Login successful");
    navigate("/dashboard", { replace: true, state: { subsCount: 265 } });
  }
  
  return (
    <>
      <h1>Welcome to Coderz Area</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Home;
