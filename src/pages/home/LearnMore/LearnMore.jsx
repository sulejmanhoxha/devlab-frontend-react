import React from "react";
import { Link } from "react-router-dom";

import "./LearnMore.css";

const LearnMore = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
            PLANNING TO ADOPT A PET?
          </h1>
          <p className="mx-auto text-base leading-relaxed text-gray-500 lg:w-3/4 xl:w-2/4">
            Explore our collection and find the perfect companion for you and
            your family.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="inline-flex h-1 w-16 rounded-full bg-indigo-500"></div>
          </div>
        </div>
        <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0">
          <div className="flex flex-col items-center p-4 text-center md:w-1/3">
            <div className="icon-placeholder mb-5 inline-flex flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
              <img
                src="../public/images/pet.png"
                alt="Placeholder"
                className="icon-image"
              />
            </div>
            <div className="flex-grow">
              <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                Find perfect companion for you
              </h2>
              <p className="text-base leading-relaxed">
                Make the adoption transition as smooth as possible
              </p>
              <a
                className="mt-3 inline-flex items-center text-indigo-500"
                href="#!"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            id="learnMore-container"
            className="flex flex-col items-center p-4 text-center md:w-1/3"
          >
            <div className="icon-placeholder mb-5 inline-flex flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
              <img
                src="../public/images/heartbeat.png"
                alt="Placeholder"
                className="icon-image"
              />
            </div>
            <div className="flex-grow">
              <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                Shelters
              </h2>
              <p className="text-base leading-relaxed">
                Learn how shelters/rescue and help cats and dogs.
              </p>
              <Link
                className="mt-3 inline-flex items-center text-indigo-500"
                to={"/shelters"}
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 text-center md:w-1/3">
            <div className="icon-placeholder mb-5 inline-flex flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
              <img
                src="../public/images/question.png"
                alt="Placeholder"
                className="icon-image"
              />
            </div>
            <div className="flex-grow">
              <h2 className="title-font mb-3 text-lg font-medium text-gray-900">
                Pet Adoption FAQS
              </h2>
              <p className="text-base leading-relaxed">
                Get answers to all the questions you have or haven't thought of
                for your adoption.
              </p>
              <Link
                className="mt-3 inline-flex items-center text-indigo-500"
                to={"/contact2"}
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
