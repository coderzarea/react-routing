import { Outlet } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <div className="flex flex-col items-center text-white p-4 min-h-dvh bg-[#121212]">
      <Header />

      <main className="w-full pt-18 grow">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
