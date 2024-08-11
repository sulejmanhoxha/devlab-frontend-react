import React, { useState } from "react";

import { updatePost } from "../posts/posts";

function UpdatePostForm({ postId }) {
  const [postData, setPostData] = useState({
    user_id: 1,
    pet_id: 1,
    title: "",
    abstract: "",
    content: "",
    image: "",
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedPost = await updatePost(postId, postData);
      setMessage("Post updated successfully!");
    } catch (error) {
      setMessage(`Error updating post: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={postData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        name="abstract"
        value={postData.abstract}
        onChange={handleChange}
        placeholder="Abstract"
      />
      <textarea
        name="content"
        value={postData.content}
        onChange={handleChange}
        placeholder="Content"
      />
      <input
        name="image"
        value={postData.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button type="submit">Update Post</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default UpdatePostForm;
