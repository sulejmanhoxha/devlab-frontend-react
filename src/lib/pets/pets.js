import { API_BASE_URL } from "../api";

export async function getPets(accessToken) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}/pets/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.error("Network error:", error);
    throw new Error("Network error");
  }
  if (response.ok) {
    const responseData = await response.json();
    console.log("pets", responseData);
    return responseData;
  } else {
    console.error(`Unexpected status: ${response.status}`);
    const responseData = await response.text();
    console.error(`Response body: ${responseData}`);
    throw new Error("Unexpected error. Please try again later!");
  }
}

export async function createPet(data, accessToken) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}/pets/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Network error:", error);
    throw new Error("Network error");
  }
  if (response.ok) {
    const responseData = await response.json();
    console.log("pets", responseData);
    return responseData;
  } else {
    console.error(`Unexpected status: ${response.status}`);
    const responseData = await response.text();
    console.error(`Response body: ${responseData}`);
    throw new Error("Unexpected error. Please try again later!");
  }
}

export async function deletePet(id, accessToken) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}/pets/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.error("Network error:", error);
    throw new Error("Network error");
  }
  if (response.ok) {
    const responseData = await response.json();
    console.log("pets", responseData);
    return responseData;
  } else {
    console.error(`Unexpected status: ${response.status}`);
    const responseData = await response.text();
    console.error(`Response body: ${responseData}`);
    throw new Error("Unexpected error. Please try again later!");
  }
}

export async function updatePet(data, id, accessToken) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}/pets/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Network error:", error);
    throw new Error("Network error");
  }
  if (response.ok) {
    const responseData = await response.json();
    console.log("update pets", responseData);
    return responseData;
  } else {
    console.error(`Unexpected status: ${response.status}`);
    const responseData = await response.text();
    console.error(`Response body: ${responseData}`);
    throw new Error("Unexpected error. Please try again later!");
  }
}

export async function getPetDetails(id, accessToken) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}/pets/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
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
