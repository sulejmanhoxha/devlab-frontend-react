import { API_BASE_URL } from "../api";

export async function getAccessToken(formData) {
  let response;
  try {
    const body = new URLSearchParams(formData);
    response = await fetch(`${API_BASE_URL}/users/token`, {
      method: "POST",
      body: body.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
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

export async function createAccount(formData) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}/users/register/`, {
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

export async function updateAccount(formData, id, accessToken) {
  let response;
  console.log("formData", formData);
  try {
    response = await fetch(`${API_BASE_URL}/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
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
    response = await fetch(`${API_BASE_URL}/users/me`, {
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
