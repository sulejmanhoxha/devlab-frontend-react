export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

export const addFavorite = (id) => {
  const favorites = getFavorites();
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

export const removeFavorite = (id) => {
  let favorites = getFavorites();
  favorites = favorites.filter((favId) => favId !== id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};
