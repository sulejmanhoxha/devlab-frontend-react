import CardCarousel from "../components/Carousel";
import Hero from "../components/Hero";
import CountUpStats from "../components/Stats";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CardCarousel />
      <CardCarousel />
      <CountUpStats />
    </>
  );
};

export default HomePage;
