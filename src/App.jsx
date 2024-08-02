import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import ContactUs from "./components/ContactUs";
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
import SignUpPage from "./pages/SignUpPage";
import ViewPetPage from "./pages/ViewPetPage";

function App() {
  const [selectedPets, setSelectedPets] = useState([]);

  const addPetToSelection = (petId) => {
    setSelectedPets((prev) => [...prev, petId]);
  };

  const removePetFromSelection = (petId) => {
    setSelectedPets((prev) => prev.filter((id) => id !== petId));
  };

  return (
    <>
      <FlipNav selectedPets={selectedPets} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact2" element={<ContactUs />} />
        <Route path="/shelters" element={<Shelters />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/pets" element={<PetsPage />} />
        <Route
          path="/pets/:id"
          element={
            <ViewPetPage
              addPetToSelection={addPetToSelection}
              removePetFromSelection={removePetFromSelection}
              selectedPets={selectedPets}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
