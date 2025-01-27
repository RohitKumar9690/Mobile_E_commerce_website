import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LatestDeals from "./Pages/LatestDeals";
import ContactUs from "./Pages/ContactUs";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import CategoriesBrand from "./Pages/CategoriesBrand";
import Layout from "./Components/Layout";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/latest-deals" element={<LatestDeals />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/Product-Details/:id" element={<ProductDetailsPage />} />
        <Route path="/category/:category" element={<CategoriesBrand />} />
        <Route path="/networkCategory/:network" element={<CategoriesBrand />} />
        <Route path="/operatingSystem/:os" element={<CategoriesBrand />} />
        <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
