import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import Contact from "./Pages/Contact";
import Logo from "./images/logo.svg";
import Con from "./images/contact.svg";
import Bag from "./images/bag.svg";
import "./App.css";
export default function App() {
  return (
    <div className="container">
      <nav>
        <img src={Logo} alt="logo" />
        <ul>
          <li>
            <Link to="/">Каталог</Link>
          </li>
          <li>
            <Link to="/Catalog">О нас</Link>
          </li>
          <li>
            <Link to="/Contact">Контакты</Link>
          </li>
          <li><img src={Con} alt="" /></li>
          <li><img src={Bag} alt="" /></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
