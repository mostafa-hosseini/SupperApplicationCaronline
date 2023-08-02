import React, { useState } from "react";

function NavToggle({ onClick }) {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      id="menuToggle"
      className={active ? "active" : ""}
      // className="active"
      onClick={clickHandler}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default NavToggle;
