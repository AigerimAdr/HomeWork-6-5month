import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AllProductsPage from "./pages/AllProductsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<span className="text-2xl">Home Page</span>} />
          <Route path="/" element={<AllProductsPage />} />
          <Route
            path="*"
            element={<span className="text-2xl">Not found</span>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
