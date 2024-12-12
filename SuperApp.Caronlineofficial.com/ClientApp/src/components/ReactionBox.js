import React, { useRef, useEffect } from "react";
import {
  BsEmojiLaughingFill,
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiKissFill,
} from "react-icons/bs";

function ReactionBox({ clientX, clientY, closeHandler, onClick }) {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && closeHandler) {
        closeHandler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const clickHandler = (id) => {
    if (onClick) {
      onClick(id);
    }
    if (closeHandler) {
      closeHandler();
    }
  };

  return (
    <div
      className="reaction-box"
      style={{ top: clientY, left: clientX }}
      ref={ref}
    >
      <span onClick={() => clickHandler(1)}>
        <BsEmojiLaughingFill size={20} color="#f7c64b" />
      </span>
      <span onClick={() => clickHandler(2)}>
        <BsFillEmojiFrownFill size={20} color="#f7c64b" />
      </span>
      <span onClick={() => clickHandler(3)}>
        <BsFillEmojiHeartEyesFill size={20} color="#f7c64b" />
      </span>
      <span onClick={() => clickHandler(4)}>
        <BsFillEmojiKissFill size={20} color="#f7c64b" />
      </span>
    </div>
  );
}

export default ReactionBox;
