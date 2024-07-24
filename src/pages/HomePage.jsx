import { useEffect } from "react";

import CardCarousel from "../components/CardCarousel";
import Hero from "../components/Hero";
import CountUpStats from "../components/Stats";
import { usePets } from "../hooks/usePets";

const HomePage = () => {
  const { petsQuery } = usePets();

  useEffect(() => {
    console.log("petsQuery.data", petsQuery.data);
  }, [petsQuery.data]);

  if (petsQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (petsQuery.error) {
    return <h1>Error: {petsQuery.error.message}</h1>;
  }

  if (petsQuery.isSuccess) {
    return (
      <>
        <Hero />
        <CardCarousel pets={petsQuery.data} title={"Dogs"} />
        <CardCarousel pets={petsQuery.data} title={"Cats"} />
        <CountUpStats />
      </>
    );
  }

  return <h1>sdi...</h1>;
  // return (
  //   <>
  //     <Hero />

  //     {/* {petsQuery.isLoading && <h1>Loading...</h1>}

  //     {petsQuery.error && <h1>Error: {petsQuery.error.message}</h1>} */}

  //     {/* {!petsQuery.isLoading && !petsQuery.error && petsQuery.data && (
  //       <>
  //         <h1>Data: {JSON.stringify(petsQuery.data)}</h1>
  //         <CardCarousel pets={petsQuery.data} title={"Dogs"} />
  //         <CardCarousel pets={petsQuery.data} title={"Cats"} />
  //       </>
  //     )} */}

  //     <CardCarousel pets={petsQuery.data} title={"Dogs"} />
  //     <CardCarousel pets={petsQuery.data} title={"Cats"} />

  //     <CountUpStats />
  //   </>
  // );
};

export default HomePage;
