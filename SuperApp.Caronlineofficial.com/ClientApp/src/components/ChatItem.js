import React, { useRef, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import ReactionBox from "./ReactionBox";

function ChatItem({ text, view, date }) {
  const timerRef = useRef();
  const isLongPress = useRef();
  const boxRef = useRef();
  const [down, setDown] = useState(false);
  const [show, setShow] = useState(false);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  function handleOnClick() {
    if (isLongPress.current) {
      return;
    }
  }

  function startPressTimer(x, y) {
    isLongPress.current = false;
    timerRef.current = setTimeout(() => {
      isLongPress.current = true;

      setDown(false);

      setShow(true);

      setClientX(x);
      setClientY(y);
    }, 500);
  }

  function handleOnMouseDown(e) {
    const boundry = boxRef.current.getBoundingClientRect();
    const x = e.clientX - boundry.left - 90;
    const y = e.clientY - boundry.top - 45;

    startPressTimer(x, y);
    setDown(true);
  }

  function handleOnMouseUp() {
    clearTimeout(timerRef.current);
    setDown(false);
  }

  function handleOnTouchStart(e) {
    const boundry = boxRef.current.getBoundingClientRect();
    const x = e.changedTouches[0].clientX - boundry.left;
    const y = e.changedTouches[0].clientY - boundry.top - 45;

    if (boundry.right > x + 180) {
      startPressTimer(x, y);
    } else {
      startPressTimer(x - 180, y);
    }
    setDown(true);
  }

  function handleOnTouchEnd() {
    clearTimeout(timerRef.current);
    setDown(false);
  }

  const reactionClick = (id) => {
    console.log(id + " is clicked!");
    alert(id + " is clicked!");
  };

  return (
    <>
      <div
        className={`chat-item${down ? " active-chat-item" : ""}`}
        onClick={handleOnClick}
        onMouseDown={handleOnMouseDown}
        onMouseUp={handleOnMouseUp}
        onTouchStart={handleOnTouchStart}
        onTouchEnd={handleOnTouchEnd}
        ref={boxRef}
      >
        <div className="chat-body">{text}</div>

        <div className="chat-footer">
          <span className="sender">
            {view}
            <AiFillEye size={24} className="me-1" />
          </span>

          <div>
            <div className="time">{date}</div>
          </div>
        </div>
        {show && (
          <ReactionBox
            clientX={clientX}
            clientY={clientY}
            closeHandler={() => setShow(false)}
            onClick={reactionClick}
          />
        )}
      </div>
    </>
  );
}

export default ChatItem;
