import React from "react";
import logo from "../assets/images/logoapp.png";

function Loading({
  isLoading = false,
  opacity = false,
  logo = true,
  ...props
}) {
  return (
    <>
      {props.children}
      {isLoading ? (
        <>
          <div className={`loading-bg${opacity ? " opacity-bg" : ""}`} />
          <div className="main-loading">
          {logo? (
            <img src={logo} alt="caronine logo" className="loading-logo" />
            ): <></>}
            <div className="spinner">
              <div className="blob top"></div>
              <div className="blob bottom"></div>
              <div className="blob left"></div>
              <div className="blob move-blob"></div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Loading;
