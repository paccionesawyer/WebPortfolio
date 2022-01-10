import React from "react";

const experienceContent = [
  {
    year: "2021 - Present",
    position: "Advanced Robotics Teaching Assistant",
    companyName: "Tufts University Department of Mechanical Engineering",
    details: <ul className="open-sans-font"><li>Created a ‘Getting Started’ sheet for the electrical components in the classes’ kit.</li><li>Fabricated a wooden brachiation rig for the classes’ final project.</li></ul>,
  },
  {
    year: "Summer 2021",
    position: "Undergraduate Intern",
    companyName: "Tufts University Office of Residential Life and Learning",
    details: <ul className="open-sans-font"><li>Led a team in successfully creating an Augmented Reality Interface for a Lego SPIKE PRIME using the PTC Vuforia Spatial Edge Server and Toolbox run on a Raspberry Pi.</li><li>Developed a standard of communicating using MQTT between a WiFi enabled micro-controller and the PTC Vuforia Spatial Edge Server.</li><li>Created a program to convert a 3D STL file to a list of xyz Coordinates.</li></ul>,
  },
  {
    year: "2019 - Present",
    position: "Resident Assistant",
    companyName: "Tufts University Office of Residential Life and Learning",
    details: <ul className="open-sans-font"><li>Interact and connect with residents from a variety of backgrounds to ensure they are adjusting well to new living environments and classes.</li><li> Work with Co-Resident Assistants to execute creative programs, fostering student development politically, socially, and culturally.</li></ul>,
  },
  {
    year: "2020",
    position: "Data Structures Teaching Assistant",
    companyName: "Tufts University Department of Computer Science",
    details: <ul className="open-sans-font"><li>Guided students through homework and lab assignments during bi-weekly office hours.</li><li>Guided a laboratory section of 27 students by lecturing on important concepts and tools.</li><li>Graded students submitted code for homework, labs, and exams.</li></ul>,
  },
  {
    year: "Summer 2019",
    position: "Assistant Engineer – Intern",
    companyName: "SBI Consultants",
    details: <ul className="open-sans-font"><li>Verified medical equipment specifications matched Architectural, Structural, and MEP drawings plans for White Plains Hospital Development.</li><li>Audited subcontractor’s Notifications of Change to ensure price changes were supported by alterations in the drawings.</li></ul>,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          {val.details}
        </li>
      ))}
    </ul>
  );
};

export default Experience;
