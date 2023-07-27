import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import defaultBanner from "../assets/images/default-banner.jpg";

function AdSliderItem({ imgSrc, imgAlt }) {
  return (
    <LazyLoadImage
      effect="black-and-white"
      src={imgSrc}
      alt={imgAlt}
      placeholderSrc={defaultBanner}
    />
  );
}

export default AdSliderItem;
