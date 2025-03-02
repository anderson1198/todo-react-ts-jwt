import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./pages/home/Layout";
const Router = () => {
  const Pets = () => <h1>Pet List</h1>;
  // const Layout = () => <h1>Layout</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>
          {/* <Route path="home" element={<Home />}></Route>
          <Route path="pets" element={<Pets />}></Route>
          **<Route path="*" element={<h1>404</h1>}></Route>** */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
