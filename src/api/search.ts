import { fetchStrapi } from "../lib/strapi";

export async function buildSearchQuery(searchTerm: string) {
  const res = await fetchStrapi(`/api/users/search?q=${searchTerm}`);
  console.log(res);
  return res.data;
}
