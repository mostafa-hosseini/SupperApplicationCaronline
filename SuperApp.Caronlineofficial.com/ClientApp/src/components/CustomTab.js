import React, { useState } from "react";
import $ from "jquery";

function CustomTab({ tabNames, tabComponents, ...props }) {
  const [activeId, setActiveId] = useState(0);

  return (
    <div className="custom-tab">
      <div className="tabs-wrapper">
        {tabNames.map((name, index) => (
          <div
            key={index}
            className={`tab-btn${index === activeId ? " active" : ""}`}
            onClick={() => setActiveId(index)}
          >
            {name}
          </div>
        ))}
      </div>
      <div
        className="tab-body"
        style={{ height: $(`#tab-${activeId}`).outerHeight() }}
      >
        {tabComponents.map((Component, index) => (
          <div
            key={index}
            id={"tab-" + index}
            className={`tab-body-wrapper${activeId === index ? " active" : ""}`}
          >
            <Component {...props} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomTab;
