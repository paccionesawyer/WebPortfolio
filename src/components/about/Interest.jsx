import React from "react";

function Interest({ interest }) {
  const { title, content, icon, color, contentColor } = interest;
  const hexToRgb = (hex) => {
    const temp = hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));
    return temp.join(",");
  };

  return (
    <div
      className={
        "interest-box rounded data-background padding-30 text-center shadow-blue"
      }
      data-color="#6C6CE5"
      style={{
        background: color,
        padding: 30,
        boxShadow: `0px 5px 20px 0px rgba(${hexToRgb(color)}, 0.5)`,
      }}
    >
      <img src={`img/about/${icon}`} alt={title} />
      <h4 className="mb-4 mt-4">{title}</h4>
      <p className="mb-0">{content}</p>
    </div>
  );
}

export default Interest;
