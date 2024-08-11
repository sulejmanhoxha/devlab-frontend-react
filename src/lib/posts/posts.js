import { API_BASE_URL } from "../api";

export async function getPosts() {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}/posts/`);
  } catch (error) {
    console.error("Network error:", error);
    throw new Error("Network error");
  }
  if (response.ok) {
    const responseData = await response.json();
    console.log("posts", responseData);
    return responseData;
  } else {
    console.error(`Unexpected status: ${response.status}`);
    const responseData = await response.text();
    console.error(`Response body: ${responseData}`);
    throw new Error("Unexpected error. Please try again later!");
  }
}

export async function getPostDetails(id) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}/posts/${id}`);
  } catch (error) {
    console.error("Network error:", error);
    throw new Error("Network error");
  }
  if (response.ok) {
    const responseData = await response.json();
    return responseData;
  } else {
    console.error(`Unexpected status: ${response.status}`);
    const responseData = await response.text();
    console.error(`Response body: ${responseData}`);
    throw new Error("Unexpected error. Please try again later!");
  }
}

export async function createPost(postData) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}/posts/create_post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  } catch (error) {
    console.error("Network error:", error);
    throw new Error("Network error");
  }

  if (response.ok) {
    const responseData = await response.json();
    console.log("Created Post:", responseData);
    return responseData;
  } else {
    console.error(`Unexpected status: ${response.status}`);
    const responseData = await response.text();
    console.error(`Response body: ${responseData}`);
    throw new Error("Unexpected error. Please try again later!");
  }
}

export async function updatePost(id, postData) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  } catch (error) {
    console.error("Network error:", error);
    throw new Error("Network error");
  }

  if (response.ok) {
    const responseData = await response.json();
    console.log("Updated Post:", responseData);
    return responseData;
  } else {
    console.error(`Unexpected status: ${response.status}`);
    const responseData = await response.text();
    console.error(`Response body: ${responseData}`);
    throw new Error("Unexpected error. Please try again later!");
  }
}
