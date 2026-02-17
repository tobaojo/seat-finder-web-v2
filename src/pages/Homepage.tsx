import Search from "../components/hero/components/Search";
import { useHomepage } from "../hooks/useHomepage";
const STRAPI_URL = import.meta.env.VITE_STRAPI_API_URL;

const Homepage = () => {
  const { homepageQuery } = useHomepage();

  const hero = homepageQuery?.data?.hero;
  const theme = homepageQuery?.data;

  const borderColor = theme?.theme?.colourPicker;
  const image = hero?.image?.url ? `${STRAPI_URL}${hero.image.url}` : null;
  console.log(homepageQuery?.data);

  return (
    <section
      className={`min-h-screen flex flex-col bg-gray-50 border-4`}
      style={{ borderColor }}
    >
      <div className="grow flex flex-col items-center p-6">
        {image && (
          <img
            src={image}
            alt={hero?.image?.alternativeText}
            className="mx-auto my-4 md:w-1/4"
          />
        )}
        <p className="text-center text-gray-500 m-2 font-semibold">
          {hero?.description}
        </p>
        <Search colourPicker={borderColor} />
      </div>
    </section>
  );
};
export default Homepage;
