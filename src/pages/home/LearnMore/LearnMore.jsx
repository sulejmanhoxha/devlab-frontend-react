import React from "react";
import { Link } from "react-router-dom";

import stylesLearnMore from "./LearnMore.module.css";

const LearnMore = () => {
  return (
    <section className={stylesLearnMore.bodyfont}>
      <div className={stylesLearnMore.sectionDiv}>
        <div className={stylesLearnMore.sectionHeader}>
          <h1 className={stylesLearnMore.sectionHeaderH1}>
            PLANNING TO ADOPT A PET?
          </h1>
          <p className={stylesLearnMore.sectionHeaderParagraph}>
            Explore our collection and find the perfect companion for you and
            your family.
          </p>
          <div className={stylesLearnMore.divHead}>
            <div className={stylesLearnMore.divSemi}></div>
          </div>
        </div>

        <div className={stylesLearnMore.bottomSection}>
          <div className={stylesLearnMore.bottomItem}>
            <div className={stylesLearnMore.iconPlaceholder}>
              <img
                src="../public/images/question.png"
                alt="Placeholder"
                className={stylesLearnMore.iconImage}
              />
            </div>
            <div className={stylesLearnMore.flexGrow}>
              <h2 className={stylesLearnMore.titleFont}>Pet Adoption FAQS</h2>
              <p className={stylesLearnMore.flexGrowParagraph1}>
                Get answers to all the questions you have or haven't thought of
                for your adoption.
              </p>
              <Link className={stylesLearnMore.flexGrowLink} to={"/contact"}>
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={stylesLearnMore.svgPer1}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className={stylesLearnMore.bottomItem}>
            <div className={stylesLearnMore.iconPlaceholder}>
              <img
                src="../public/images/heartbeat.png"
                alt="Placeholder"
                className={stylesLearnMore.iconImage}
              />
            </div>
            <div className={stylesLearnMore.flexGrow}>
              <h2 className={stylesLearnMore.titleFont}>Shelters</h2>
              <p className="text-base leading-relaxed">
                Learn how shelters/rescue and help cats and dogs.
              </p>
              <Link className={stylesLearnMore.flexGrowLink} to={"/shelters"}>
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={stylesLearnMore.svgPer1}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className={stylesLearnMore.topSection}>
          <div className={stylesLearnMore.topItem}>
            <div className={stylesLearnMore.iconPlaceholder}>
              <img
                src="../public/images/pet.png"
                alt="Placeholder"
                className={stylesLearnMore.iconImage}
              />
            </div>
            <div className={stylesLearnMore.flexGrow}>
              <h2 className={stylesLearnMore.titleFont}>
                Find perfect companion for you
              </h2>
              <p className={stylesLearnMore.flexGrowParagraph}>
                Make the adoption transition as smooth as possible
              </p>
              <Link className={stylesLearnMore.flexGrowLink} to={"/posts"}>
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
