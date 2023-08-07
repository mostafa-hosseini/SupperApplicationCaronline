import React from "react";
import { useState } from "react";

function IconToggle({
  DisableIcon,
  ActiveIcon,
  onClick,
  activeProps,
  desableProps,
}) {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
    if (onClick) {
      onClick(active);
    }
  };

  return (
    <div onClick={clickHandler} style={{ cursor: "pointer" }}>
      {active ? (
        <ActiveIcon {...activeProps} />
      ) : (
        <DisableIcon {...desableProps} />
      )}
    </div>
  );
}

export default IconToggle;
