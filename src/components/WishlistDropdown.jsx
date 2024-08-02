import React from "react";

import { PetCard } from "../pages/PetsPage";

// Adjust the import path if necessary

const WishlistDropdown = ({ selectedPets }) => {
  return (
    <div className="absolute right-0 top-full mt-2 w-64 rounded-lg bg-white p-4 shadow-lg">
      <h2 className="mb-2 text-lg font-semibold">Your Wishlist</h2>
      <div className="space-y-2">
        {selectedPets.length > 0 ? (
          selectedPets.map((pet) => (
            <PetCard
              key={pet.id}
              id={pet.id}
              images={pet.images}
              breed={pet.breed}
              name={pet.name}
              description={pet.description}
            />
          ))
        ) : (
          <p className="text-gray-500">No pets in wishlist</p>
        )}
      </div>
    </div>
  );
};

export default WishlistDropdown;
