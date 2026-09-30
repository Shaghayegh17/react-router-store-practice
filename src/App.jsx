import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import {
  Home,
  Store,
  Product,
  ProductDetails,
  About,
  Telephone,
  Address,
} from "./store";

function App() {
  return (
    <>
      <>
        <nav>
          <Link to="/">صفحه اصلی</Link>{" "}
          <Link to="/shaghayeghstore">فروشگاه شقایق</Link>
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
        </Routes>
      </>
    </>
  );
}

export default App;
