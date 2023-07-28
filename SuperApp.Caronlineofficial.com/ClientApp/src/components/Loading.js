import React from "react";
import logo from "../assets/images/logoapp.png";

function Loading({ isLoading = false, ...props }) {
  return (
    <>
      {props.children}
      {isLoading ? (
        <div className="main-loading">
          <img src={logo} alt="caronine logo" className="loading-logo" />

          <div class="spinner">
            <div class="blob top"></div>
            <div class="blob bottom"></div>
            <div class="blob left"></div>

            <div class="blob move-blob"></div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Loading;
