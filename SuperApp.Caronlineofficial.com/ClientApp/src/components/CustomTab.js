import React, { useState } from "react";

function CustomTab({ data, ...props }) {
  const [activeId, setActiveId] = useState("tab-1");

  return (
    <div className="custom-tab">
      <div className="tabs-wrapper">
        {data.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className={`tab-btn${item.id === activeId ? " active" : ""}`}
            onClick={() => setActiveId(item.id)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="tab-body">
        {data
          .filter((item) => item.id === activeId)
          .map((item) => {
            return (
              <div
                key={item.id}
                id={"tab-" + item.id}
                className="tab-body-wrapper active"
              >
                <item.Component {...props} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CustomTab;
