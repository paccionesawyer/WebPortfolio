import React from "react";

const ModalTwoBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          Post <span>Details</span>
        </h1>
        <span className="title-bg">posts</span>
      </div>
      {/* Meta Starts */}

      <div className="meta open-sans-font">
        <span>
          <i className="fa fa-user"></i> Sawyer
        </span>
        <span className="date">
          <i className="fa fa-calendar"></i> 9 January 2017
        </span>
        <span>
          <i className="fa fa-tags"></i> wordpress, business, economy, design
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Web Pi Car</h1>
      <img src="img/blog/PI_CAR_Labelled.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
      <p>In the figure below, what you see is a LEGO Spike Prime connected to two motors and a Rasberry Pi. The Raspberry PI hosts a server using the python library flask that has a custom Graphical User Interface. The webpage can be accessed by any desktop or laptop of mobile device on the same wifi by going to <code>[Pi ip-address]:5000</code>. The graphical user interface also shown below consists of a wheel that can be used to control the direction that the car moves in and a slider that controls the velocity of the car. The inputs are taken from the webpage and communicated from the Raspberry PI to the Lego SPIKE PRIME using serial communication. The SPIKE PRIME then parses the user input into a motor response (i.e. increasing/decreasing the motors to speed up/slow down or their relative speeds to turn)</p>
<p><a href="https://youtu.be/HMzt1AFN9BQ">Full Video</a></p>
<h2 id="getting-started">Getting Started</h2>
<p>These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.</p>
<h3 id="prerequisites">Prerequisites</h3>
<ul>
<li><p><a href="https://www.google.com/search?q=raspberry+pi+4&amp;sxsrf=ALeKk03vsMgGCu7PQVxu5BVM5yzeNxULQw:1613717510216&amp;source=lnms&amp;tbm=shop&amp;sa=X&amp;ved=2ahUKEwjM7dqXrvXuAhWYWc0KHdwgBTIQ_AUoAXoECAUQAw&amp;biw=958&amp;bih=1087">Raspberry Pi 4</a></p>
<ul>
<li>Libraries<ul>
<li><a href="https://flask.palletsprojects.com/en/1.1.x/">Flask</a> 3.4.6</li>
<li><a href="https://pypi.org/project/opencv-python/">OpenCV</a> 1.02</li>
<li><a href="https://pyserial.readthedocs.io/en/latest/pyserial.html">Serial</a> 3.4</li>
</ul>
</li>
</ul>
</li>
<li><p>A LEGO SPIKE PRIME Kit <a href="https://education.lego.com/en-us/products/lego-education-spike-prime-set/45678#spike%E2%84%A2-prime">Purchase One Here.</a></p>
<ul>
<li>The LEGO SPIKE PRIME kit IDE should be downloaded to update the firmware <a href="https://education.lego.com/en-us/downloads/spike-prime/software">here</a><ul>
<li>Once the firmware is updated you can connect via Serial Communication using Putty or <a href="https://github.com/chrisbuerginrogers/ME35_21">this IDE</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="installing">Installing</h3>
<p>Simply download the files in this repository and first run the code on the WIO Terminal using the Arduino IDE. Then run the SPIKE PRIME Code in REPL or the IDE that can be found here, <a href="https://github.com/chrisbuerginrogers/ME35_21">SPIKE PRIME IDE</a>. To run the PI code, use <code>flask run --host=0.0.0.0</code>. The file must be named <code>app.py</code>. This will start a webpage on your Raspberry Pi being served to port 5000.</p>
<p><img src="img/blog/web-pi-car-gui.jpg" alt="GUI"/></p>
<h2 id="authors">Authors</h2>
<ul>
<li><strong>Sawyer Bailey Paccione</strong> - <em>Raspberry PI CODE, SPIKE CODE</em> - <a href="http://sawyerbaileypaccione.tech/">Portfolio</a></li>
</ul>
<h2 id="license">License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details</p>

      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalTwoBlogContent;
