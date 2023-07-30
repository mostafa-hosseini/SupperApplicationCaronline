import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import $ from "jquery";

function Accordion({ data }) {
  const [activeItem, setActiveItem] = useState(false);

  const clickHandler = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="custom-accordion-wrapper">
      {data.map((item, index) => (
        <div
          className={`custom-accordion-item${
            item.id === activeItem ? " active" : ""
          }`}
          key={item.id}
        >
          <div
            className="custom-accordion-header"
            onClick={() => clickHandler(item.id)}
          >
            <BiChevronLeft size={25} color="rgba(0,0,0,.54)" />
            {item.title}
          </div>
          <div
            className="custom-accordion-body"
            style={{
              height: `${
                item.id === activeItem ? $(`#${item.id}`).outerHeight() + 32 : 0
              }px`,
            }}
          >
            <div id={item.id}>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
