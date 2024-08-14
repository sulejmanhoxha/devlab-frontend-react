import React, { useEffect, useState } from "react";
import { getPostDetails } from "../posts/posts";

function PostDetail({ postId }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPost() {
      try {
        const fetchedPost = await getPostDetails(postId);
        setPost(fetchedPost);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [postId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!post) return <p>No post found</p>;

  return (
    <div>
      <h1>{post.title || "Untitled Post"}</h1>
      <p>{post.abstract || "No abstract available."}</p>
      <p>{post.content || "No content available."}</p>
      {post.image ? (
        <img src={post.image} alt={post.title || "Post Image"} />
      ) : (
        <p>No image available.</p>
      )}
    </div>
  );
}

export default PostDetail;
