import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import SignIn from "./components/SignIn.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Redux from "./components/redux/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <nav className="w-full bg-black py-4 text-white flex justify-center gap-8">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/redux"}>Redux</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/redux" element={<Redux />} />
    </Routes>
  </BrowserRouter>
);
