import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Profile() {
    const data = useLoaderData();
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch("https://api.github.com/users/coderzarea")
//       .then((res) => res.json())
//       .then((profile) => {
//         console.log(profile);
//         setData(profile);
//       });
//   }, []);
  return (
    <main className="w-full flex flex-col justify-center items-center gap-4 pt-16">
      <img
        src={data.avatar_url}
        alt="profile picture"
        className="w-72 rounded-xl"
      />
      <h1 className="text-2xl font-semibold">{data.name}</h1>
    </main>
  );
}

export default Profile;
