import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/data";

const DataDetails = () => {
  const { id } = useParams();

  const currentData = data.find((d) => d.id === parseInt(id));

  console.log("currentData", currentData);

  return (
    <div>
      <h2>Data Details</h2>
      <p><strong>ID:</strong> {currentData?.id}</p>
      <p><strong>User ID:</strong> {currentData?.userId}</p>
      <p><strong>Title:</strong> {currentData?.title}</p>
      <p><strong>Completed:</strong> {currentData?.completed ? "Yes" : "No"}</p>
    </div>
  );
};

export default DataDetails;
