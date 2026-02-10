import { useQuery } from "@tanstack/react-query";
import { getHomepage } from "../api/homepage";

export const useHomepage = () => {
  const homepageQuery = useQuery({
    queryKey: ["homepage"],
    queryFn: getHomepage,
  });
  return { homepageQuery };
};
