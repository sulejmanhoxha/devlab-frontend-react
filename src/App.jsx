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
import PostPet from "./pages/postPet/postPet";
import PostsPage from "./pages/posts/PostsPage";
import ProfilePage from "./pages/profile/ProfilePage";
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
        {/* posts routes */}
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostsPage />} />
        {/* about routes */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shelters" element={<Shelters />} />
        {/* auth routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* pets routes */}
        <Route path="/pets" element={<PetsPage />} />
        <Route path="/postPet" element={<PostPet />} />
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
        {/* 404 route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
