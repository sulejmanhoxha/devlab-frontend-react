export function getAuthToken() {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return;
  }

  return token;
}
