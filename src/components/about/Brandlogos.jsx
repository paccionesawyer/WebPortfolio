import React from "react";

const brandlogoData = [
  {
    id: 1,
    image: "img/about/skills/c++_logo.svg",
    name: "C Plus Plus"
  },
  {
    id: 2,
    image: "img/about/skills/python_logo.svg",
    name: "Python"
  },
  {
    id: 3,
    image: "img/about/skills/solidworks_logo.svg",
    name: "Solidworks"
  },
  {
    id: 4,
    image: "img/about/skills/latex_logo.svg",
    name: "Latex"
  },
  {
    id: 5,
    image: "img/about/skills/kicad-logo.svg",
    name: "KiCad"
  },
  {
    id: 6,
    image: "img/about/skills/react_logo.svg",
    name: "React"
  },
  {
    id: 7,
    image: "img/about/skills/matlab.svg",
    name: "Matlab"
  },
  {
    id: 8,
    image: "img/about/skills/raspberry_pi_logo.svg",
    name: "Raspberry Pi"
  },
  {
    id: 9,
    image: "img/about/skills/arduino_logo.svg",
    name: "Arduino"
  },
];

function Brandlogos() {
  return (
    <div id="branglogos">
      <div className="container">
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-3 col-6 d-flex justify-content-center"  key={brandlogo.id}>
              <figure
                className="direction-reveal__card"
              >
                <img src={brandlogo.image} alt="Portolio" />
                <div className="hover-content-wrapper">
                  <span className="content-title"> {brandlogo.name}</span>
                </div>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brandlogos;
