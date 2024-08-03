import { usePets } from "../../hooks/usePets";
import CardCarousel from "./CardCarousel";
import Hero from "./Hero";
import LearnMore from "./LearnMore/LearnMore";
import CountUpStats from "./Stats";

const HomePage = () => {
  const { petsQuery } = usePets();

  return (
    <>
      <Hero />
      {/* {petsQuery.isLoading || petsQuery.isRefetching ? (
        <h1>Loading...</h1>
      ) : null}
      {petsQuery.error ? <h1>Error: {petsQuery.error.message}</h1> : null} */}

      {petsQuery.isSuccess && !petsQuery.isRefetching && petsQuery.data ? (
        <>
          <CardCarousel pets={petsQuery.data} title={"Dogs"} />
          <CardCarousel pets={petsQuery.data} title={"Cats"} />
        </>
      ) : null}
      <CountUpStats />
      <LearnMore />
    </>
  );
};

export default HomePage;
