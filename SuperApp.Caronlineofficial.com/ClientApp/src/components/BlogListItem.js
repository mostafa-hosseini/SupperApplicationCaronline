import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function BlogListItem({ imgSrc, title = "", disc, date, noBottom = false, fitImg=false ,carousel=false}) {
  return (
    <div className={`car-slider-item${fitImg? " fit-img":""}`}>
      <LazyLoadImage
        src={imgSrc}
        effect="black-and-white"
        wrapperClassName={carousel?"car-lazy-loader-custom":"car-lazy-loader"}
        alt={title ? title : "no alt"}
      />

      <div className="w-100 blur">
        <h6 className={`title-text m-2 mt-3 ${noBottom ? "pb-2" : ""}`}>
          {disc}
        </h6>
        {noBottom ? (
          <></>
        ) : (
          <>
            <hr className="m-0" />
            <div className="d-flex flex-row align-items-center justify-content-between px-2 mb-2 mt-2">
              <div className="d-flex flex-row align-items-center ">
                <span className="new-car-text fw-bold text-mobile">{date}</span>
              </div>
              <span className="title-text tx-link text-mobile">ادامه مطلب</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BlogListItem;
