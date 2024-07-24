import { Route, Routes } from "react-router-dom";

import ContactUs from "./components/ContactUs";
// import "./App.css";
import Footer from "./components/Footer";
import FlipNav from "./components/navbar/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import HomePageSave from "./pages/HomePageSave";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import PetsPage from "./pages/PetsPage";
import Shelters from "./pages/Shelters";
import ViewPetPage from "./pages/ViewPetPage";

function App() {
  return (
    <>
      <FlipNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pets" element={<PetsPage />} />
        <Route path="/pets/:id" element={<ViewPetPage />} />
        <Route path="/contact2" element={<ContactUs />} />
        <Route path="/shelters" element={<Shelters />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
