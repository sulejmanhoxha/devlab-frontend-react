import React from "react";

import "../css/Colaborators.css";

const teamMembers = [
  {
    name: "Holden Caulfield",
    role: "UI Developer",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    imgSrc: "https://dummyimage.com/200x200",
    icons: [
      "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
      "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
      "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
    ],
  },
  {
    name: "Alper Kamu",
    role: "Designer",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    imgSrc: "https://dummyimage.com/201x201",
    icons: [
      "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
      "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
      "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
    ],
  },
  {
    name: "Atticus Finch",
    role: "UI Developer",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    imgSrc: "https://dummyimage.com/204x204",
    icons: [
      "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
      "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
      "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
    ],
  },
  {
    name: "Henry Letham",
    role: "Designer",
    description:
      "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    imgSrc: "https://dummyimage.com/206x206",
    icons: [
      "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
      "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
      "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
    ],
  },
  // Add more team members here as needed
];

const Colaborators = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium tracking-widest text-gray-900">
            OUR TEAM
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img alt="team" src={member.imgSrc} />
              <div className="team-card-content">
                <h2>{member.name}</h2>
                <h3>{member.role}</h3>
                <p>{member.description}</p>
                <div className="icon-container">
                  {member.icons.map((iconPath, idx) => (
                    <a key={idx} className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="icon"
                        viewBox="0 0 24 24"
                      >
                        <path d={iconPath}></path>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Colaborators;
