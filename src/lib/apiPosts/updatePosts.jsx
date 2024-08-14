import React, { useEffect, useState } from "react";

import { getPostDetails, updatePost } from "../posts/posts";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const post = await getPostDetails(postId);
        setPostData(post);
      } catch (error) {
        setError("Failed to load post details.");
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [postId]);

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!postData.title || !postData.abstract || !postData.content) {
      setMessage("Please fill in all required fields.");
      return;
    }
    try {
      await updatePost(postId, postData);
      setMessage("Post updated successfully!");
    } catch (error) {
      setMessage(`Error updating post: ${error.message}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
