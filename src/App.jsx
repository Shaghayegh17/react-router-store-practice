import { Route, Routes, NavLink } from "react-router-dom";


import {
  Home,
  Store,
  Product,
  ProductDetails,
  About,
  Telephone,
  NotFound,
  Address,
} from "./store";
const navLinkStyleMain = ({ isActive }) => ({
  color: isActive ? "#00FFFF" : "#A9A9A9",
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "none" : "underline",
  padding: "5px 10px",
});

function App() {
  return (
    <>
      <>
        <nav>
          <NavLink style={navLinkStyleMain} to="/">
            صفحه اصلی
          </NavLink>{" "}
          <NavLink style={navLinkStyleMain} to="/shaghayeghstore">
            فروشگاه شقایق
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shaghayeghstore" element={<Store />}>
            <Route path="products" element={<Product />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="aboutus" element={<About />}>
              <Route path="tel" element={<Telephone />} />
              <Route path="address" element={<Address />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </>
  );
}

export default App;
