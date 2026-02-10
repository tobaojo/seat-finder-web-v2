import { fetchStrapi } from "../lib/strapi";

export const HOMEPAGE_QUERY = "/api/homepage?populate[hero][populate]=image";

export async function getHomepage() {
  const res = await fetchStrapi(HOMEPAGE_QUERY);
  return res.data;
}
