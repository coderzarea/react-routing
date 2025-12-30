import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id, username } = useParams();
  return (
    <>
      <h1>Welcome to your profile!</h1>
      <h2>User id: {id}</h2>
      <h2>Username: {username}</h2>
    </>
  );
}

export default User;
