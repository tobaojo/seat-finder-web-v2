import Search from "../components/hero/components/Search";
import { useHomepage } from "../hooks/useHomepage";

const Homepage = () => {
  const { homepageQuery } = useHomepage();

  const hero = homepageQuery?.data?.hero;
  console.log(hero);
  return (
    <section>
      Homepage
      <Search />
    </section>
  );
};

export default Homepage;
