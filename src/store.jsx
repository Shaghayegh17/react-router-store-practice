import { Link, useParams, Outlet } from "react-router-dom";

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
      <h1>فروشگاه</h1>
      <nav>
        <Link to="products">محصولات</Link> <Link to="aboutus">درباره ما</Link>
      </nav>
      <Outlet />
    </>
  );
}
const products = [
  { id: 1, name: "شومیز سفید", price: 850000 },
  { id: 2, name: "شومیز مشکی", price: 920000 },
  { id: 3, name: "کت مجلسی", price: 1500000 },
];

export function Product() {
  return (
    <>
      <h1>فروشگاه شقایق</h1>
      {products.map((item) => (
        <nav key={item.id}>
          <Link to={`${item.id}`}>{item.name}</Link>{" "}
        </nav>
      ))}
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
        <Link to="tel">شماره تلفن</Link> <Link to="address">آدرس حضوری</Link>
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
