import React from "react";

function ListTitle({ title, color = "pink", showMore = true }) {
  return (
    <div className="w-100 p-0 mx-auto row justify-content-between align-items-center">
      <div className={`${showMore?"col-8":"col-12"} d-flex align-items-center`}>
        <span className={`circle-pointer ${color}-pointer`} />

        <h5>{title}</h5>
      </div>
      {showMore ? (
        <div className="col-auto">
          <h6 className="tx-primary">مشاهده همه</h6>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ListTitle;
