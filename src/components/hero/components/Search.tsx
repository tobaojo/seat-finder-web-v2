import { useState } from "react";

import { useSearch } from "../../../hooks/useSearch";
import { useDebounce } from "../../../hooks/useDebounce";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { searchQuery } = useSearch(debouncedSearchTerm);
  const users = searchQuery?.data;
  console.log(users);
  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => searchQuery.refetch()}>Search</button>
    </div>
  );
};

export default Search;
