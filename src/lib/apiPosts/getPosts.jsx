import React, { useEffect, useState } from "react";

import { getPostDetails } from "../posts/posts";

async function fetchPostData(postId) {
  try {
    const postData = await getPostDetails(postId);
    console.log("Fetched Post:", postData);
  } catch (error) {
    console.error("Failed to fetch post data:", error.message);
  }
}

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
      <h1>{post.title}</h1>
      <p>{post.abstract}</p>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt={post.title} />}
    </div>
  );
}

export default PostDetail;
