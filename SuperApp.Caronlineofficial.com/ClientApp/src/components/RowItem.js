import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
 import defaultImg from "../assets/images/Icons/default.svg";

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
      className={`row  align-items-center flex-column row-item${
        disabled ? " disbaled-item" : ""
      }`}
    >
      <Wrapper to={to} target={blank ? "_blank" : "_self"}>
        <LazyLoadImage
          src={imgSrc}
          effect="black-and-white"
          alt={imgalt}
          className="w-100 img-logo"
          placeholderSrc={defaultImg}

        />
        <h6 className="text-center mt-2 text-mobile p-0">{title}</h6>
      </Wrapper>
    </div>
  );
}

export default RowItem;
