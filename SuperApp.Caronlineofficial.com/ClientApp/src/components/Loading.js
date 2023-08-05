import React from "react";
import logo from "../assets/images/logoapp.png";

function Loading({
  isLoading = false,
  opacity = false,
  hasLogo = true,
  ...props
}) {
  return (
    <>
      {props.children}
      {isLoading ? (
        <>
          <div className={`loading-bg${opacity ? " opacity-bg" : ""}`} />
          <div className="main-loading">
            {hasLogo ? (
              <img src={logo} alt="caronine logo" className="loading-logo" />
            ) : (
              <></>
            )}
            <div class="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
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
