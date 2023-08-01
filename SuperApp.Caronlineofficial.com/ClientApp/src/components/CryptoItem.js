import React from "react";

function CryptoItem({
  imgSrc,
  name,
  topPrice,
  noTopPriceStyle = false,
  rtlTopPrice = false,
  topPriceStyle = true,
  desc,
  CurrentPrice,
  CurrentPriceStyle = true,
  noCurrentPriceStyle = false,
  rtlCurrentPrice = false,
  thirdText = "",
}) {
  return (
    <div className="crypto-item">
      {imgSrc ? (
        <div className="crypto-img">
          <img src={imgSrc} alt={name} />
        </div>
      ) : (
        <></>
      )}
      <div className="crupto-text">
        <div className="text-row">
          <p className="text-name mb-2">{name}</p>
          <p
            className={`text-price${rtlTopPrice ? " " : " ltr "}mb-2${
              !noTopPriceStyle
                ? topPriceStyle
                  ? " text-success"
                  : " text-danger"
                : ""
            }`}
          >
            {topPrice ? topPrice : "بدون قیمت"}
          </p>
        </div>

        <div className="text-row">
          <p className="text-name mb-0">{desc}</p>

          <p
            className={`text-price ${!rtlCurrentPrice ? "" : "ltr"} mb-0${
              !noCurrentPriceStyle
                ? CurrentPriceStyle
                  ? " text-success"
                  : " text-danger"
                : ""
            }`}
          >
            {CurrentPrice ? CurrentPrice : "بدون قیمت"}
          </p>
        </div>

        {thirdText ? (
          <div className="text-row mt-2">
            <p className="text-name mb-0">{thirdText}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default CryptoItem;
