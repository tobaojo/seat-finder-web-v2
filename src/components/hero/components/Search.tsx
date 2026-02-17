import { useState } from "react";

import { useSearch } from "../../../hooks/useSearch";
import { useDebounce } from "../../../hooks/useDebounce";
import type { User } from "../../../types/types";

type SearchProps = {
  colourPicker: string;
};

const Search = ({ colourPicker }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { searchQuery } = useSearch(debouncedSearchTerm);
  const users = searchQuery?.data as User[];
  return (
    <>
      <div className="flex w-full max-w-md mb-6">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search by first or last name"
          className="grow p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6e2d4b]"
        />
        <button
          onClick={() => searchQuery.refetch()}
          style={{ backgroundColor: colourPicker }}
          className={`text-white px-4 rounded-r-lg hover:opacity-90 transition`}
        >
          Search
        </button>
      </div>
      {users?.length === 0 && debouncedSearchTerm && (
        <p className="text-gray-500">No users found.</p>
      )}
      {users && (
        <ul className="w-full max-w-md bg-white rounded-lg shadow-md">
          {users?.map((user: User) => (
            <li
              key={user.id}
              className="px-4 py-2 border-b border-gray-200 hover:bg-gray-50 transition"
            >
              {user.firstName} {user.lastName}
              {user.tableNumber === "n/a"
                ? ""
                : ` • Table: ${user.tableNumber}`}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Search;
