import React, { useState } from "react";

import { API_BASE_URL } from "../../../lib/api";
import styles from "./postPet.module.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [petTypeId, setPetTypeId] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petName, setPetName] = useState("");
  const [petGender, setPetGender] = useState("");
  const [petAge, setPetAge] = useState(0);
  const [petSize, setPetSize] = useState("");
  const [petCoatLength, setPetCoatLength] = useState("");
  const [petColor, setPetColor] = useState("");
  const [medicalCard, setMedicalCard] = useState("");
  const [location, setLocation] = useState(0);
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (petName && petTypeId && petAge && petBreed && image) {
      setError("");

      const formData = new FormData();
      formData.append("pet_type_id", petTypeId);
      formData.append("pet_breed", petBreed);
      formData.append("pet_name", petName);
      formData.append("pet_gender", petGender);
      formData.append("pet_age", petAge);
      formData.append("pet_size", petSize);
      formData.append("pet_coatLength", petCoatLength);
      formData.append("pet_color", petColor);
      formData.append("medical_card", medicalCard);
      formData.append("location", location);
      formData.append("image", image);

      try {
        const response = await fetch(`${API_BASE_URL}/pets/`, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          alert("Your pet has been posted successfully!");
        } else {
          const errorResponse = await response.json();
          setError(`Error: ${errorResponse.message}`);
        }
      } catch (error) {
        setError("Network error. Please try again later.");
      }
    } else {
      setError(
        "Please fill out all required fields, including uploading an image.",
      );
    }
  };

  return (
    <div className={styles.CreatePostContainer}>
      <h1 className={styles.title}>Post Your Pet</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Add more here */}
        <label htmlFor="pet-name">Pet Name:</label>
        <input
          type="text"
          id="pet-name"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          className={styles.input}
          required
        />

        <label htmlFor="pet-type-id">Pet Type:</label>
        <select
          id="pet-type-id"
          value={petTypeId}
          onChange={(e) => setPetTypeId(e.target.value)}
          className={styles.select}
          required
        >
          <option value="">Select Type</option>
          <option value="1">Dog</option>
          <option value="2">Cat</option>
          {/* Add more here */}
        </select>

        <label htmlFor="pet-breed">Breed:</label>
        <input
          type="text"
          id="pet-breed"
          value={petBreed}
          onChange={(e) => setPetBreed(e.target.value)}
          className={styles.input}
          required
        />

        {/* Add more here */}

        <label htmlFor="pet-image">Pet Image:</label>
        <input
          type="file"
          id="pet-image"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.fileInput}
          required
        />

        {imagePreview && (
          <div className={styles.imagePreview}>
            <img
              src={imagePreview}
              alt="Pet preview"
              className={styles.previewImage}
            />
          </div>
        )}

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.button}>
          Post Pet
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
