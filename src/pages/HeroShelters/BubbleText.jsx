import React from "react";

import styles from "./bubble.module.css";

const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300">
      {"Finding Forever Homes for Pets".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

const Example = () => {
  return (
    <div className="grid h-screen place-content-center bg-black">
      <BubbleText />
    </div>
  );
};

export default Example;
export { BubbleText };
