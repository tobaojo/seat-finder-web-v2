import { useQuery } from "@tanstack/react-query";
import { fetchStrapi } from "../lib/strapi";

export const useSearch = (query: string) => {
  const searchQuery = useQuery({
    queryKey: ["search", query],
    queryFn: () => fetchStrapi(`/api/users/search?q=${query}`),
    enabled: !!query,
  });

  return { searchQuery };
};
