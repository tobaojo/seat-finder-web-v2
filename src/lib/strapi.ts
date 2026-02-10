const STRAPI_URL = import.meta.env.VITE_STRAPI_API_URL;

export async function fetchStrapi(path: string) {
  const response = await fetch(`${STRAPI_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from Strapi: ${response.statusText}`);
  }
  return response.json();
}
