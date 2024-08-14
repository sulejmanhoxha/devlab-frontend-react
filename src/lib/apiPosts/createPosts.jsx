import React, { useState } from "react";
import { createPost } from "../posts/posts";

function CreatePostForm({ userId, petId }) {
  const [formData, setFormData] = useState({
    user_id: userId,
    pet_id: petId,
    title: "",
    abstract: "",
    content: "",
    image: "",
  });
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (!formData.title || !formData.content) {
      setMessage("Title and content are required!");
      setLoading(false);
      return;
    }

    try {
      const createdPost = await createPost(formData);
      setMessage(`Post created successfully! View it here: /posts/${createdPost.post_id}`);
      setFormData({
        user_id: userId,
        pet_id: petId,
        title: "",
        abstract: "",
        content: "",
        image: "",
      });
    } catch (error) {
      setMessage(`Error creating post: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
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
        required
      />
      <input
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Post"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default CreatePostForm;
