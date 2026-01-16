import React from "react";

function Profile() {
  return (
    <div className="flex flex-col items-center py-5 text-neutral-300">
      <img
        src="https://picsum.photos/900/500"
        alt="Profile"
        className="w-xl rounded-lg"
      />

      <div className="max-w-xl w-full mt-4">
        <p>
          This profile page simulates a real-world user profile containing
          images and text.
        </p>

        <p>
          In most applications, profile pages are not required immediately on
          app load, which makes them a good candidate for lazy loading.
        </p>
      </div>
    </div>
  );
}

export default Profile;
