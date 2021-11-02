import React, { useState } from "react";
import data from "../localData/aboutData";

const About = () => {
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(false);
  const { name, info } = data[value];

  const handleClick = (index) => {
    setValue(index);
    setActive(true);
  };

  return (
    <section className="container">
      <div className="tabs-container">
        <div className="tabs">
          {data.map((singleData, index) => {
            return (
              <button
                className={`tabs-title ${index === value ? "tabs-active" : ""}`}
                key={index}
                onClick={() => handleClick(index)}
              >
                {singleData.name}
              </button>
            );
          })}
        </div>
        <div className="tabs tabs-details">
          <h1 className="title-main">{name}</h1>
          <p>{info}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
