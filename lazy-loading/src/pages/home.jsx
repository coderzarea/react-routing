import React from "react";

function Home() {
  return (
    <main className="min-h-[calc(100vh-6.5rem)] flex justify-center py-5 text-neutral-300">
      <div className="text-center max-w-xl flex flex-col items-start">

        <p>
          This page loads instantly and is part of the main bundle.
        </p>

        <p className="">
          Other pages like <span className="font-semibold">Profile</span> and{" "}
          <span className="font-semibold">Dashboard</span> are lazy loaded to
          improve performance.
        </p>
      </div>
    </main>
  );
}

export default Home;
