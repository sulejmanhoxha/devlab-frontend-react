import { useNavigate } from "react-router-dom";

import Colaborators from "../components/Colaborators";
import stylesShelter from "../css/Shelters.module.css";

const Shelters = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className={stylesShelter.textBox}>
        <div className={stylesShelter.sectionIntro}>
          <h2 className={stylesShelter.sectionTitle2}>Our Mission</h2>
          <p className={stylesShelter.sectionText}>
            At PawLand, our mission is to connect loving families with pets in
            need of a home. We believe every animal deserves a chance at a happy
            life. Our commitment is to ensure that every pet finds a nurturing
            environment where they can thrive and be loved unconditionally.
          </p>
        </div>
        <div className={stylesShelter.sectionSub}>
          <h2 className={stylesShelter.sectionTitle2}>What We Do</h2>
          <p className={stylesShelter.sectionText}>
            We offer a unique platform where you can buy, sell, and adopt pets.
            Whether you’re looking for a new furry friend or need to find a
            loving home for a pet, we’re here to help. Our comprehensive
            database allows you to browse through numerous profiles, ensuring
            you find the perfect match for your family.
          </p>
          <p className={stylesShelter.sectionText}>
            Beyond pet adoption, we provide resources and support for pet care.
            From veterinary advice to training tips, our goal is to support pet
            owners in every step of their journey.
          </p>
          <h2 className={stylesShelter.sectionTitle2}>Our Story</h2>
          <p className={stylesShelter.sectionText}>
            Founded in 2022, PawLand started with a simple goal: to make pet
            adoption and care accessible and easy for everyone. Over the years,
            we've grown into a community of pet lovers and advocates. Our
            journey began with a small team of passionate individuals who wanted
            to make a difference in the lives of pets and their future owners.
          </p>
          <p className={stylesShelter.sectionText}>
            Today, PawLand is proud to have facilitated thousands of successful
            adoptions. Our community continues to grow, united by a shared love
            for animals and a commitment to their well-being. Join us in our
            mission to create a world where every pet has a loving home.
          </p>
        </div>
      </div>

      <section className={stylesShelter.textGray}>
        <div className={stylesShelter.container}>
          <div
            className={`${stylesShelter.flex} ${stylesShelter.borderBottom} ${stylesShelter.marginBottom}`}
          >
            <div
              className={`${stylesShelter.iconContainer} ${stylesShelter.bgIndigo100} ${stylesShelter.textIndigo500}`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={stylesShelter.icon}
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className={stylesShelter.textContainer}>
              <h2 className={stylesShelter.title}>Adopt a Pet</h2>
              <p className={stylesShelter.text}>
                Discover the joy of bringing a new furry friend into your life.
                Our platform connects you with pets in need of a loving home,
                making it easy to find your perfect companion.
              </p>
              <a className={stylesShelter.learnMore} href="#">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={stylesShelter.arrow}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            className={`${stylesShelter.flex} ${stylesShelter.borderBottom} ${stylesShelter.marginBottom}`}
          >
            <div className={stylesShelter.textContainer}>
              <h2 className={stylesShelter.title}>Sell Your Pet</h2>
              <p className={stylesShelter.text}>
                Looking to find a new home for your pet? Our platform provides
                an easy and safe way to connect with potential buyers who are
                ready to provide a loving environment for your pet.
              </p>
              <a className={stylesShelter.learnMore} href="#">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={stylesShelter.arrow}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div
              className={`${stylesShelter.iconContainer} ${stylesShelter.bgIndigo100} ${stylesShelter.textIndigo500}`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={stylesShelter.icon}
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
          </div>
          <div className={`${stylesShelter.flex}`}>
            <div
              className={`${stylesShelter.iconContainer} ${stylesShelter.bgIndigo100} ${stylesShelter.textIndigo500}`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={stylesShelter.icon}
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className={stylesShelter.textContainer}>
              <h2 className={stylesShelter.title}>Pet Care Tips</h2>
              <p className={stylesShelter.text}>
                Ensure the well-being of your pet with our expert care tips and
                advice. From nutrition to grooming, we provide the resources you
                need to keep your pet healthy and happy.
              </p>
              <a className={stylesShelter.learnMore} href="#">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={stylesShelter.arrow}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <button className={stylesShelter.button}>Get Started</button>
        </div>
      </section>

      <section>
        <div className={stylesShelter.shelterTitle}>
          <h1>Our Shelter Statistics</h1>
          <p>
            We are committed to providing the best care for our animals and
            ensuring they find loving homes.
          </p>
        </div>
        <div className={stylesShelter.statsRow}>
          <div className={stylesShelter.stat}>
            <img src="images/animal-shelter2.png"></img>
            <p className={stylesShelter.statNum}>146</p>
            <p className={stylesShelter.statText}>Animals Housed</p>
          </div>
          <div className={stylesShelter.stat}>
            <img src="images/friends.png"></img>
            <p className={stylesShelter.statNum}>32</p>
            <p className={stylesShelter.statText}>Volunteers</p>
          </div>
          <div className={stylesShelter.stat}>
            <img src="images/location.png"></img>
            <p className={stylesShelter.statNum}>3</p>
            <p className={stylesShelter.statText}>Shelter Locations</p>
          </div>
          <div className={stylesShelter.stat}>
            <img src="images/kitten.png"></img>
            <p className={stylesShelter.statNum}>94</p>
            <p className={stylesShelter.statText}>Animals Adopted</p>
          </div>
        </div>
        <Colaborators />
        <a href="#" onClick={handleButtonClick}>
          Go Back
        </a>
      </section>
    </>
  );
};

export default Shelters;
