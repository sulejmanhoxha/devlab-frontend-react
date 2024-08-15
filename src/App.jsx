import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./base.css";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import CreatePostForm from "./lib/apiPosts/createPosts";
import PostDetail from "./lib/apiPosts/getPosts";
import postedPets from "./lib/apiPosts/postedPets";
import PostedPets from "./lib/apiPosts/postedPets";
import UpdatePostForm from "./lib/apiPosts/updatePosts";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import PetsPage from "./pages/pets/PetsPage";
import CreatePetsPage from "./pages/pets/create/CreatePetsPage";
import UpdatePetsPage from "./pages/pets/update/UpdatePetsPage";
import PostPet from "./pages/postPet/postPet";
import PostsPage from "./pages/posts/PostsPage";
import CreatePost from "./pages/posts/create/CreatePost";
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
        {/* public view all posts routes */}
        <Route path="/posts" element={<PostsPage />} />{" "}
        {/* view public all posts */}
        {/* private filip */}
        <Route path="/myposts" element={<PostedPets />} />
        {"PostedPets "}
        {/* /api/posts/user/{username} view my routes */}
        <Route path="/posts/create" element={<CreatePostForm />} />
        <Route path="/posts/:id/update" element={<UpdatePostForm />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        {/* about routes */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shelters" element={<Shelters />} />
        {/* auth routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* private pets sulejman routes */}
        <Route path="/pets" element={<PetsPage />} /> {/* my pets */}
        <Route path="/pets/create" element={<CreatePetsPage />} />{" "}
        {/* create pets */}
        <Route path="/pets/:id/update" element={<UpdatePetsPage />} />{" "}
        {/* udpate pets */}
        <Route
          path="/pets/:id"
          element={
            <ViewPetPage
              addPetToSelection={addPetToSelection}
              removePetFromSelection={removePetFromSelection}
              selectedPets={selectedPets}
            />
          }
        />{" "}
        {/* view a single  pet */}
        {/* 404 route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
