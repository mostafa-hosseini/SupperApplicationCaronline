import React, { useState, useEffect } from "react";
import $ from "jquery";

function CustomTab({ tabNames, tabComponents, ...props }) {
  const [activeId, setActiveId] = useState(0);
  const [height, setHeight] = useState(150);

  const resetHeight = () => {
    const h = $(`#tab-${activeId}`).outerHeight();
    setHeight(h);
  };

  useEffect(() => {
    resetHeight();
  }, [activeId]);

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
      <div className="tab-body" style={{ height: height }}>
        {tabComponents.map((Component, index) => {
          const changeHandler = activeId === index ? resetHeight : undefined;
          return (
            <div
              key={index}
              id={"tab-" + index}
              className={`tab-body-wrapper${
                activeId === index ? " active" : ""
              }`}
            >
              <Component onChange={changeHandler} {...props} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CustomTab;
