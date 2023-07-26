import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function BannerSliderItem({ imgSrc, title }) {
  return (
    <div
      className="mx-3 banner-slider-item"
    >
      <LazyLoadImage
        width={"100%"}
        src={imgSrc}
        height={"100%"}
        effect="black-and-white"
        style={{ position: "relative", minHeight: 150 }}
      />

      <div
        className="blur"
        style={{
          position: "absolute",
          zIndex: 5,
          bottom: 0,
        }}
      >
        <hr className="m-0" />
        <div className="d-flex flex-row align-items-center justify-content-between px-2 mb-2 mt-2 ">
          <div className="d-flex flex-row align-items-center ">
            <h6 className="title-text  my-1 mx-2 mb-3">{title}</h6>
          </div>
          <span
            className="title-text tx-link text-mobile px-4 py-1"
            style={{ border: "1.5px solid #3333", borderRadius: 15 }}
          >
            ادامه مطلب
          </span>
        </div>
      </div>
    </div>
  );
}

export default BannerSliderItem;
