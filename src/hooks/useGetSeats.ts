import { useQuery } from "@tanstack/react-query";

const fetchSeats = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_STRAPI_API_URL}/api/users?populate=*`,
  );
  const data = await response.json();
  return data.data;
};

export const useGetSeats = () => {
  const seatsQuery = useQuery({
    queryKey: ["seats"],
    queryFn: fetchSeats,
  });
  return { seatsQuery };
};
