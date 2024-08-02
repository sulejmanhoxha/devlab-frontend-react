import React from "react";

const Wishlist = ({ selectedPets }) => {
  return (
    <div className="relative">
      <button className="relative inline-block p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        {selectedPets.length > 0 && (
          <span className="absolute right-0 top-0 -mr-2 -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {selectedPets.length}
          </span>
        )}
      </button>
    </div>
  );
};

export default Wishlist;
