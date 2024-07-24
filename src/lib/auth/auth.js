import { API_BASE_URL } from "../api";

export async function getAccessToken(refreshToken) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}/auth/refresh-token`, {
      method: "POST",
      body: JSON.stringify({ refreshToken }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error("Network error");
  }

  if (response.ok) {
    const responseData = await response.json();
    return responseData;
  } else if (response.status === 401) {
    const responseData = await response.json();
    throw new Error(responseData?.detail || "Invalid token");
  } else {
    console.error(`Unexpected status: ${response.status}`);
    const responseData = await response.text();
    console.error(`Response body: ${responseData}`);
    throw new Error("Unexpected error. Please try again later!");
  }
}

export async function login(formData) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error("Network Error");
  }

  if (response.ok) {
    const responseData = await response.json();
    return responseData;
  } else if (response.status === 401) {
    const responseData = await response.json();
    throw new Error(responseData?.message || "Invalid credentials");
  } else {
    throw new Error("Unexpected error. Please try again later!");
  }
}

export async function getUserDetails(accessToken) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}/api/v1/auth/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    throw new Error("Network error");
  }

  if (response.ok) {
    const responseData = await response.json();
    return responseData;
  } else if (response.status === 401) {
    const responseData = await response.json();
    throw new Error(responseData?.message || "Unauthorised.");
  } else {
    console.error(`Unexpected status: ${response.status}`);
    const responseData = await response.text();
    console.error(`Response body: ${responseData}`);
    throw new Error("Unexpected error. Please try again later!");
  }
}
