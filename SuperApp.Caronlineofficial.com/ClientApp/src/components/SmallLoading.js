import React from "react";

function SmallLoading(props) {
  return (
    <div className="small-loading">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default SmallLoading;
