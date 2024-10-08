import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

import HeroShelters from "../HeroShelters/HeroShelters";
import Colaborators from "./Colaborators/Colaborators";
import stylesShelter from "./Shelters.module.css";
import stylesDisclosure from "./disclosure.module.css";

const Shelters = () => {
  return (
    <>
      <HeroShelters />
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
          <div>
            <h2 className={stylesShelter.sectionTitle2}>What We Do</h2>
            <p className={stylesShelter.sectionText}>
              We offer a unique platform where you can buy, sell, and adopt
              pets. Whether you're looking for a new furry friend or need to
              find a loving home for a pet, we're here to help. Our
              comprehensive database allows you to browse through numerous
              profiles, ensuring you find the perfect match for your family.
            </p>
            <p className={stylesShelter.sectionText}>
              Beyond pet adoption, we provide resources and support for pet
              care. From veterinary advice to training tips, our goal is to
              support pet owners in every step of their journey.
            </p>
          </div>
          <div>
            <h2 className={stylesShelter.sectionTitle2}>Our Story</h2>
            <p className={stylesShelter.sectionText}>
              Founded in 2022, PawLand started with a simple goal: to make pet
              adoption and care accessible and easy for everyone. Over the
              years, we've grown into a community of pet lovers and advocates.
              Our journey began with a small team of passionate individuals who
              wanted to make a difference in the lives of pets and their future
              owners.
            </p>
            <p className={stylesShelter.sectionText}>
              Today, PawLand is proud to have facilitated thousands of
              successful adoptions. Our community continues to grow, united by a
              shared love for animals and a commitment to their well-being. Join
              us in our mission to create a world where every pet has a loving
              home.
            </p>
          </div>
        </div>
      </div>

      <section className={`${stylesShelter.textGray} ${stylesShelter.section}`}>
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
              <h2 className={stylesShelter.title}>
                Secure and Reliable Platform
              </h2>
              <p className={stylesShelter.text}>
                Our platform ensures safe and secure transactions for buying,
                selling, and adopting pets. We prioritize the safety of both
                pets and users, implementing robust security measures to protect
                your personal information and ensure a trustworthy experience.
              </p>
            </div>
          </div>
          <div
            className={`${stylesShelter.flex} ${stylesShelter.borderBottom} ${stylesShelter.marginBottom}`}
          >
            <div className={stylesShelter.textContainer}>
              <h2 className={stylesShelter.title}>
                Community-Centered Approach
              </h2>
              <p className={stylesShelter.text}>
                We are dedicated to supporting shelters and rescue
                organizations. Our community-focused approach means we work
                closely with these groups to help find loving homes for pets in
                need. By choosing us, you're also contributing to the welfare of
                animals and supporting rescue efforts.
              </p>
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
              <h2 className={stylesShelter.title}>Diverse Pet Selection</h2>
              <p className={stylesShelter.text}>
                Whether you're looking for a dog, cat, bird, or reptile, we
                cater to all pet lovers. Our wide variety of pets ensures that
                you can find the perfect companion to match your lifestyle and
                preferences. Explore our extensive selection and discover your
                new best friend today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={stylesShelter.section}>
        <div className={stylesShelter.shelterTitle}>
          <h1>Our Shelter Statistics</h1>
          <p>
            We are committed to providing the best care for our animals and
            ensuring they find loving homes.
          </p>
        </div>
        <div className={stylesShelter.statsRow}>
          <div className={stylesShelter.stat}>
            <img src="images/animal-shelter2.png" alt="Animals Housed" />
            <p className={stylesShelter.statNum}>146</p>
            <p className={stylesShelter.statText}>Animals Housed</p>
          </div>
          <div className={stylesShelter.stat}>
            <img src="images/friends.png" alt="Volunteers" />
            <p className={stylesShelter.statNum}>32</p>
            <p className={stylesShelter.statText}>Volunteers</p>
          </div>
          <div className={stylesShelter.stat}>
            <img src="images/location.png" alt="Shelter Locations" />
            <p className={stylesShelter.statNum}>3</p>
            <p className={stylesShelter.statText}>Shelter Locations</p>
          </div>
          <div className={stylesShelter.stat}>
            <img src="images/kitten.png" alt="Animals Adopted" />
            <p className={stylesShelter.statNum}>94</p>
            <p className={stylesShelter.statText}>Animals Adopted</p>
          </div>
        </div>

        {/* Disclosure Component */}
        <div className={stylesDisclosure.container}>
          <div className={stylesDisclosure.innerContainer}>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${stylesDisclosure.disclosureButton} ${open ? stylesDisclosure.buttonOpen : ""}`}
                  >
                    <span>What is your return policy for pet products?</span>
                    <ChevronUpIcon
                      className={`${stylesDisclosure.icon} ${open ? stylesDisclosure.iconOpen : ""}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={stylesDisclosure.disclosurePanel}
                  >
                    If you're unhappy with your purchase for any reason, email
                    us within 30 days and we'll provide a full refund or
                    exchange.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className={stylesDisclosure.disclosureItem}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${stylesDisclosure.disclosureButton} ${open ? stylesDisclosure.buttonOpen : ""}`}
                  >
                    <span>Do you offer grooming services?</span>
                    <ChevronUpIcon
                      className={`${stylesDisclosure.icon} ${open ? stylesDisclosure.iconOpen : ""}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={stylesDisclosure.disclosurePanel}
                  >
                    Yes, we offer grooming services for dogs and cats. Please
                    contact us to schedule an appointment.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className={stylesDisclosure.disclosureItem}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${stylesDisclosure.disclosureButton} ${open ? stylesDisclosure.buttonOpen : ""}`}
                  >
                    <span>How long does delivery take?</span>
                    <ChevronUpIcon
                      className={`${stylesDisclosure.icon} ${open ? stylesDisclosure.iconOpen : ""}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={stylesDisclosure.disclosurePanel}
                  >
                    Delivery typically takes 3-5 business days.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className={stylesDisclosure.disclosureItem}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${stylesDisclosure.disclosureButton} ${open ? stylesDisclosure.buttonOpen : ""}`}
                  >
                    <span>Can I change my order after placing it?</span>
                    <ChevronUpIcon
                      className={`${stylesDisclosure.icon} ${open ? stylesDisclosure.iconOpen : ""}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={stylesDisclosure.disclosurePanel}
                  >
                    Yes, you can change your order within 24 hours of placing
                    it.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className={stylesDisclosure.disclosureItem}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`${stylesDisclosure.disclosureButton} ${open ? stylesDisclosure.buttonOpen : ""}`}
                  >
                    <span>Do you offer pet adoption services?</span>
                    <ChevronUpIcon
                      className={`${stylesDisclosure.icon} ${open ? stylesDisclosure.iconOpen : ""}`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={stylesDisclosure.disclosurePanel}
                  >
                    Yes, we partner with local shelters to offer pet adoption
                    services. Visit our adoption page for more details.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <Colaborators />
      </section>
    </>
  );
};

export default Shelters;
