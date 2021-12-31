import React from "react";
import Interest from "./Interest";

const interestsData = [
  {
    id: 1,
    icon: "lightbulb.svg",
    title: "Design Engineering",
    content:"",
    color: "#6C6CE5",
    contentColor: "light",
  },
  {
    id: 2,
    icon: "robot.svg",
    title: "Robotics",
    content:"Prior Experience: Teaching Assistant of Graduate Level Robotics at Tufts University",
    color: "#F9D74C",
    contentColor: "dark",
  },
  {
    id: 3,
    icon: "car.svg",
    title: "Vehicle Engineering",
    content:"",
    color: "#F97B8B",
    contentColor: "light",
  },
];

function Interests() {
  return (
    <section id="interests">
      <div className="container">
        <div className="row fix-spacing">
          {interestsData.map((interest) => (
            <div className="col-md-4" key={interest.id}>
              <Interest interest={interest} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Interests;
