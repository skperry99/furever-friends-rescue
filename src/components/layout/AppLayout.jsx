import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import banner from "../../assets/images/banner-graphic.jpg";

export default function AppLayout() {
  return (
    <>
      <Header title="Furever Friends Rescue" imageUrl={banner} />
      <Navbar />
      <main role="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
