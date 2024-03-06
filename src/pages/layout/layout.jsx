import Header from "../../composents/header/header";
import Footer from "../../composents/footer/footer";
/* Rajoute a l'interieur du contenue */
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
