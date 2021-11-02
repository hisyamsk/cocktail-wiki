import React, { useState } from "react";
import data from "../localData/aboutData";

const About = () => {
  const [value, setValue] = useState(0);
  const { name, info } = data[value];

  return (
    <section className="container">
      <div className="tabs-container">
        <div className="tabs-wrapper tabs">
          {data.map((singleData, index) => {
            return (
              <button
                className={`tabs-title ${index === value ? "tabs-active" : ""}`}
                key={index}
                onClick={() => setValue(index)}
              >
                {singleData.name}
              </button>
            );
          })}
        </div>
        <div className="tabs-wrapper tabs-details">
          <h1 className="title-main">{name}</h1>
          <p>{info}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
