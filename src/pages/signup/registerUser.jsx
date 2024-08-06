export const registerUser = async (userData) => {
  const response = await fetch(
    "https://33d6-31-204-223-118.ngrok-free.app/api/users/register/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    },
  );

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message || "Unknown error");
  }
};
