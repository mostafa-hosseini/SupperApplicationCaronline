import React from "react";
import { Link } from "react-router-dom";

function RowItem({
  imgSrc,
  imgalt,
  title,
  onClick,
  to,
  blank = false,
  disabled = false,
}) {
  const Wrapper = disabled ? "div" : Link;

  return (
    <div
      onClick={() => onClick && onClick()}
      className={`d-flex align-items-center flex-column row-item${
        disabled ? " disbaled-item" : ""
      }`}
    >
      <Wrapper to={to} target={blank ? "_blank" : "_self"}>
        <img src={imgSrc} className="w-100 img-logo" alt={imgalt} />
        <h6 className="text-center mt-2 text-mobile p-0">{title}</h6>
      </Wrapper>
    </div>
  );
}

export default RowItem;
