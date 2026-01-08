import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import ErrorPage from "./pages/error-page.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/profile"
        element={<Profile />}
        loader={async () => {
          const response = await fetch("https://api.github.com/users/coderzarea");

          if(!response.ok) {
            throw new Error("Something went wrong")
          }

          return response.json();
        }}
        errorElement={<ErrorPage />}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
