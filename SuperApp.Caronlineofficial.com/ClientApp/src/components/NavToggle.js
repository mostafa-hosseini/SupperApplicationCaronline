import React, { useState, useEffect } from "react";

function NavToggle({ onClick, isActive }) {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
    if (onClick) {
      onClick(active);
    }
  };

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

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
