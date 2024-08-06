import React, { useState } from "react";

const NeuButton = () => {
  const [isPaid, setIsPaid] = useState(true);

  const toggleText = () => {
    setIsPaid((prevIsPaid) => !prevIsPaid);
  };

  return (
    <div
      className="flex items-center justify-center bg-white"
      style={{ marginTop: "-8px", marginBottom: "5px" }}
    >
      <button
        onClick={toggleText}
        className="bg-indigo-500 px-6 py-2 font-medium text-white shadow-[3px_3px_0px_black] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
      >
        {isPaid ? "Paid" : "Free"}
      </button>
    </div>
  );
};

export default NeuButton;
