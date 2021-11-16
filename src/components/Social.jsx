import React from "react";

const SocialShare = [
  {
    iconName: "fa  fa-linkedin",
    link: "https://www.linkedin.com/in/sawyerpaccione/",
  },
  {
    iconName: "fa fa-youtube",
    link: "https://www.youtube.com/watch?v=WrCtn0HD7bc&list=PL8x_oaw7WPIKmYdH6yHr6_GRv5VZokT7q",
  },
  {
    iconName: "fa fa-github",
    link: "https://github.com/paccionesawyer",
  },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
