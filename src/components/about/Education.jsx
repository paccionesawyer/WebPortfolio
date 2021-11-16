import React from "react";

const educationContent = [
  {
    year: "Expected 2022",
    degree: "BSME Mechanical Engineering & BS Mathematics",
    institute: "Tufts University",
    details: `In addition to these two majors, I am also expected to complete Minor in Computer Science.`,
  },
  {
    year: "2018",
    degree: "High School Degree",
    institute: "New Rochelle High School",
    details: `todo`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
