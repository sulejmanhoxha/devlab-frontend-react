import { usePosts } from "../../hooks/usePosts";
import CardCarousel from "./CardCarousel";
import Hero from "./Hero";
import LearnMore from "./LearnMore/LearnMore";
import CountUpStats from "./Stats";

const HomePage = () => {
  const { postsQuery } = usePosts();

  return (
    <>
      <Hero />
      {/* {postsQuery.isLoading || postsQuery.isRefetching ? (
        <h1>Loading...</h1>
      ) : null}
      {postsQuery.error ? <h1>Error: {postsQuery.error.message}</h1> : null} */}

      {postsQuery.isSuccess && !postsQuery.isRefetching && postsQuery.data ? (
        <>
          <CardCarousel pets={postsQuery.data} title={"Dogs"} />
          <CardCarousel pets={postsQuery.data} title={"Cats"} />
        </>
      ) : null}
      <CountUpStats />
      <LearnMore />
    </>
  );
};

export default HomePage;
