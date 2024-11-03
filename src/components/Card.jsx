import React from "react";

const Card = ({ title, description, buttonText }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
      <div>
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <button className="bg-gray-800 text-white py-2 px-4 rounded">{buttonText}</button>
    </div>
  );
};

export default Card;
