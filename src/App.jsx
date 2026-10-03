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
 

const StyledNavLinkMain = styled(NavLink)`
color:#A9A9A9;
font-weight:normal;
background-color:white;
text-decoration:underline;
padding:8px 15px;
border-radius:6px;
display:flex;
align-items:center;
gap:10px;

&.active{
color:#00FFFF;
font-weigt:bold;
background-color:#000;
text-decoration:none;
}
` 

function App() {
  return (
    <>
      <>
        <nav>
          <StyledNavLinkMain  to="/">
            صفحه اصلی
          </StyledNavLinkMain >{" "}
          <StyledNavLinkMain  to="/shaghayeghstore">
            فروشگاه شقایق
          </StyledNavLinkMain >
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
