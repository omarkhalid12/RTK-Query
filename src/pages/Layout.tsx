import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <main className="container">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
