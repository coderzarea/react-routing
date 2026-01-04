import React from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "./not-found-page";

function User() {
  const { id } = useParams();

  if(id>999) {
    return <NotFoundPage />
  }
  
  return (
    <>
      <h1>Welcome to your profile!</h1>
      <h2>User id: {id}</h2>
    </>
  );
}

export default User;
