import React, { useState } from "react";

function NavToggle(props) {
  const [active, setActive] = useState(false);
  return (
    <div
      id="menuToggle"
      className={active ? "active" : ""}
      // className="active"
      onClick={() => setActive(!active)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default NavToggle;
