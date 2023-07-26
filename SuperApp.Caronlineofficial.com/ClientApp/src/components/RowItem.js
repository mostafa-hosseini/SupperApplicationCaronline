import React from "react";
import { Link } from "react-router-dom";

function RowItem({ imgSrc, imgalt, title, onClick, to }) {
  return (
    <div
      onClick={() => onClick && onClick()}
      className="d-flex align-items-center flex-column row-item"
    >
      <Link to={to}>
        <img src={imgSrc} className="w-100 img-logo" alt={imgalt} />
        <h6 className="text-center mt-2 text-mobile p-0">{title}</h6>
      </Link>
    </div>
  );
}

export default RowItem;
