import React from "react";

function CryptoItem({
  imgSrc,
  name,
  topPrice,
  noTopPriceStyle = false,
  topPriceStyle = true,
  desc,
  CurrentPrice,
  CurrentPriceStyle = true,
}) {
  return (
    <div
      className="crypto-item"
      onClick={() =>
        // navigate(`/crypto/${desc}`, { state: { coin: item } })
        console.log("hi")
      }
    >
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
            className={`text-price ltr mb-2${
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
            className={`text-price ltr mb-0${
              CurrentPriceStyle ? " text-success" : " text-danger"
            }`}
          >
            {CurrentPrice ? CurrentPrice : "بدون قیمت"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CryptoItem;
