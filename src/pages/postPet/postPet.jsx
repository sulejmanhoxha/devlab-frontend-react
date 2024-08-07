import React, { useState } from "react";

import styles from "./postPet.module.css";

const PostPet = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("dog");
  const [petAge, setPetAge] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [petImage, setPetImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [error, setError] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPetImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (petName && petType && petAge && petDescription && petImage) {
      setError("");
      alert("Your pet has been posted successfully!");
      console.log({
        petName,
        petType,
        petAge,
        petDescription,
        petImage,
      });
    } else {
      setError(
        "Please fill out all required fields, including uploading an image.",
      );
    }
  };

  return (
    <div className={styles.postPetContainer}>
      <h1 className={styles.title}>Post Your Pet</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="pet-name">Pet Name:</label>
        <input
          type="text"
          id="pet-name"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          className={styles.input}
          required
        />

        <label htmlFor="pet-type">Pet Type:</label>
        <select
          id="pet-type"
          value={petType}
          onChange={(e) => setPetType(e.target.value)}
          className={styles.select}
          required
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="pet-age">Pet Age:</label>
        <input
          type="number"
          id="pet-age"
          value={petAge}
          onChange={(e) => setPetAge(e.target.value)}
          className={styles.input}
          min="0"
          required
        />

        <label htmlFor="pet-description">Description:</label>
        <textarea
          id="pet-description"
          value={petDescription}
          onChange={(e) => setPetDescription(e.target.value)}
          className={styles.textarea}
          rows="4"
          required
        ></textarea>

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

export default PostPet;
