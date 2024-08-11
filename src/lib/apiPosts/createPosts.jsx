import React, { useState } from "react";

import { createPost } from "../posts/posts";

function CreatePostForm() {
  const [formData, setFormData] = useState({
    user_id: 1, // Example user ID
    pet_id: 1, // Example pet ID
    title: "",
    abstract: "",
    content: "",
    image: "",
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdPost = await createPost(formData);
      setMessage("Post created successfully!");
    } catch (error) {
      setMessage(`Error creating post: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        name="abstract"
        value={formData.abstract}
        onChange={handleChange}
        placeholder="Abstract"
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Content"
      />
      <input
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button type="submit">Create Post</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default CreatePostForm;
