import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import AllProductsPage from "../pages/AllProductsPage";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <AllProductsPage />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
