import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./base.css";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import PetsPage from "./pages/pets/PetsPage";
import Shelters from "./pages/shelters/Shelters";
import SignUpPage from "./pages/signup/SignUpPage";
import ViewPetPage from "./pages/viewPet/ViewPetPage";

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
      <Navbar selectedPets={selectedPets} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
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
