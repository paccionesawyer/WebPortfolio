import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Interests from "./Interests";
import Brandlogos from "./Brandlogos";

const index = () => {
  return (
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}
          <a className="button" href="img/resume.pdf" download>
            <span className="button-text">Download Résumé</span>
            <span className="button-icon fa fa-download"></span>
          </a>
          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              
              {/* End .col */}

              <div className="col-12 d-block d-sm-none">
                <img
                  src="img/hero/hero-img-mobile.jpg"
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>
              
              
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

        </div>
        {/* End .row */}

        <hr className="separator" />

        {/* Interests Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              My Interests
            </h3>
          </div>
          <Interests />
        </div>
        {/* Interests Ends */}

        <hr className="separator" />

        {/* Skills Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              My Skills
            </h3>
          </div>
          <Brandlogos />
        </div>
        {/* Skill Ends */}

        <hr className="separator" />

        {/* Experience & Education Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Experience <span>&</span> Education
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
      </div>
    </section>
  );
};

export default index;
