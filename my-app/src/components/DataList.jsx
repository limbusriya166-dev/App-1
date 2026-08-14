import React, { useState } from "react";
import { data } from "../data/data";
import DataCard from "./DataCard";

const DataList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    const filter = searchQuery
      ? data.filter((d) =>
          d.title
            .trim()
            .toLowerCase()
            .includes(searchQuery.trim().toLowerCase())
        )
      : data;

    setFilteredData(filter);
    console.log("filteredData", filter);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by title"
      />

      <button onClick={handleSearch}>Search</button>

      {filteredData.map((d) => (
        <DataCard
          key={d.id}
          userID={d.userId}
          id={d.id}
          title={d.title}
          completed={d.completed}
        />
      ))}
    </div>
  );
};

export default DataList;