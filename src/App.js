import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
// import AnimatedCursor from "react-animated-cursor";

const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
