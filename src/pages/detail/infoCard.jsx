import React from "react";

const InfoCard = ({ item }) => {
  return (
    <div className="bg-gray-200 text-gray-600 p-4 rounded-lg shodow-md">
      <p className="text-sm font-semibold mb-2 capitalize ">
        {item[0].replace("_", " ")}
      </p>

      <h2 className="text-lg font-bold text-gray-800">{item[1]}</h2>
    </div>
  );
};

export default InfoCard;
