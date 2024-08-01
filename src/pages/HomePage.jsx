import { useEffect } from "react";

import CardCarousel from "../components/CardCarousel";
import Hero from "../components/Hero";
import LearnMore from "../components/LearnMore";
import CountUpStats from "../components/Stats";
import "../css/base.css";
import { usePets } from "../hooks/usePets";

const HomePage = () => {
  const { petsQuery } = usePets();

  useEffect(() => {
    console.log("petsQuery.data", petsQuery.data);
  }, [petsQuery.data]);
  return (
    <>
      <Hero />
      {petsQuery.isLoading || petsQuery.isRefetching ? (
        <h1>Loading...</h1>
      ) : null}
      {petsQuery.error ? <h1>Error: {petsQuery.error.message}</h1> : null}

      {petsQuery.isSuccess && !petsQuery.isRefetching && petsQuery.data ? (
        <>
          <CardCarousel pets={petsQuery.data} title={"Dogs"} />
          <CardCarousel pets={petsQuery.data} title={"Cats"} />
        </>
      ) : null}
      <CountUpStats />
    </>
  );
};

export default HomePage;
