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
    console.log("pets", responseData);
    return responseData;
  } else {
    console.error(`Unexpected status: ${response.status}`);
    const responseData = await response.text();
    console.error(`Response body: ${responseData}`);
    throw new Error("Unexpected error. Please try again later!");
  }
}
