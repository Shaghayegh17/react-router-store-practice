import { useParams, Outlet, NavLink, Link } from "react-router-dom";
import styled from "styled-components";
const navLinkStyle = ({ isActive }) => ({
  color: isActive ? "#00FFFF" : "#A9A9A9",
  fontWeight: isActive ? "bold" : "normal",
  backgroundColor: isActive ? "#000" : "white",
  textDecoration: isActive ? "none" : "underline",
  padding: "8px 15px",
  borderRadius: "6px",
  disPlay: "flex",
  alignItems: "center",
  gap: "10px",
});
const StyledNavLink = styled(NavLink)`
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

export function Home() {
  return (
    <>
      <h1>به فروشگاه شقایق خوش آمدید</h1>
    </>
  );
}
export function Store() {
  return (
    <>
      <StoreTitle>فروشگاه</StoreTitle>
      <SorteNav>
        <StyledNavLink  to="products">
          محصولات
        </StyledNavLink>{" "}
        <StyledNavLink to="aboutus" >
          درباره ما
        </StyledNavLink>
      </SorteNav>
      <Outlet />
    </>
  );
}
const StoreTitle = styled.h1`
  color: #222;
  font-size: 32px;
  text-align: center;
  margin-bottom: 25px;
  width: 700px;
`;
const SorteNav = styled.nav`
  display: flex;
  gap: 20px;
  background-color: #222;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;
const ProductCard = styled.nav`
  width: 220px;
  padding: 20px;
  background-color: white;
  align-items: center;
  box-shadow:
    rgba(0, 0, 0, 0.09) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
const ProductLink = styled(Link)`
  color: #00a6b2;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: #007c85;
    text-decoration: underline;
  }
`;
const products = [
  { id: 1, name: "شومیز سفید", price: 850000 },
  { id: 2, name: "شومیز مشکی", price: 920000 },
  { id: 3, name: "کت مجلسی", price: 1500000 },
];

export function Product() {
  return (
    <>
      <h1>فروشگاه شقایق</h1>
      <ProductList>
        {products.map((item) => (
          <ProductCard key={item.id}>
            <ProductLink to={`${item.id}`}>{item.name}</ProductLink>{" "}
          </ProductCard>
        ))}
      </ProductList>
    </>
  );
}
export function ProductDetails() {
  const { id } = useParams();
  const productSelect = products.find((item) => item.id === Number(id));
  return (
    <>
      <p>
        {productSelect.name} {productSelect.price} تومان قیمت دارد.
      </p>
    </>
  );
}

export function About() {
  return (
    <>
      <h1>درباره ما</h1>
      <nav>
        <NavLink style={navLinkStyle} to="tel">
          شماره تلفن
        </NavLink>{" "}
        <NavLink to="address" style={navLinkStyle}>
          آدرس حضوری
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
export function Telephone() {
  return <h1>شماره تلفن</h1>;
}
export function Address() {
  return <h1>آدرس حضوری</h1>;
}
export function NotFound() {
  return <h1>صفحه مورد نظر یافت نشد</h1>;
}
