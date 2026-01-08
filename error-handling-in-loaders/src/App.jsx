import { Outlet } from "react-router-dom";

import Header from "./components/header";

function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-[#121212] text-white">
      <Header />

      <main className="w-full grow pt-16">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
