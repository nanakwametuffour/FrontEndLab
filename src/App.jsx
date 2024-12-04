import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import LayOut from "./components/LayOut";
import AboutUs from "./pages/AboutUs";
import HeaderAndFooter from "./components/HeaderAndFooter";
import Service from "./pages/Service";
import WebDeveloment from "./pages/WebDeveloment";
import WebDesign from "./pages/WebDesign";
import Seo from "./pages/Seo";
import GraphicDesign from "./pages/GraphicDesign";
import Order from "./pages/Order";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HeaderAndFooter />}>
            <Route path="/service" element={<Service />} />
            <Route path="/web-development" element={<WebDeveloment />} />
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/seo" element={<Seo />} />
          </Route>
          <Route element={<LayOut />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/order" element={<Order />} />
             <Route path="/contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
