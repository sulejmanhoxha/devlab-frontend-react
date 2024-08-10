import React, { useEffect, useState } from "react";

import { getPosts } from "../posts/posts";

const postedPets = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const userId = 1; // just an example change later

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPosts();
        const userPosts = postsData.filter((post) => post.user_id === userId);
        setPosts(userPosts);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, [userId]); // depended on userId

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>My Posts</h1>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.post_id}>
              <h2>{post.title}</h2>
              <p>{post.abstract}</p>
              <p>{post.content}</p>
              {post.image && <img src={post.image} alt={post.title} />}
            </li>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </ul>
    </div>
  );
};

export default postedPets;
