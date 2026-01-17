import { Outlet } from "react-router-dom";
import Header from "./components/header.jsx";

function App() {
  return (
    <div className="bg-[#121212] text-white flex flex-col min-h-dvh p-4 justify-start items-center">
      <Header />
      <main className="grow w-full flex-1 pt-12">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
