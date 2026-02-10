import { useState } from "react";
import { buildSearchQuery } from "../../../api/search";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => buildSearchQuery(searchTerm)}>Search</button>
    </div>
  );
};

export default Search;
