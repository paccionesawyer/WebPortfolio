import React from "react";

function Nav(props) {
  let buttonList = ["All", "Robotics", "Computer Science"];
  return (
    <div style={{ margin: "10px" }}>
      <h1>
        Current filter <u>{props.filter}</u>
      </h1>
      {buttonList.map((list) => (
        <button className="button" key={list} onClick={() => props.setFilter(list)}>
        <span className="button-text">{list}</span>
        <span className="button-icon fa fa-arrow-right"></span>
        </button>
      ))}
    </div>
  );
}

export default Nav;