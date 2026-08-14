import React from "react";

function Datacard({ userID,id,title,completed  }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default Datacard;