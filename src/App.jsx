import { Route, Routes } from "react-router-dom";

// import "./App.css";
import Footer from "./components/Footer";
import FlipNav from "./components/navbar/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import PetsPage from "./pages/PetsPage";
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

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
