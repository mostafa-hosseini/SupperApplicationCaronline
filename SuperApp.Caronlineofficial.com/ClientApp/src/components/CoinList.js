import React, { useState, useEffect } from "react";
import http from "../api/testApi";
import priceNumber from "../utils/priceNumber";
import SmallLoading from "./SmallLoading";
import CryptoItem from "./CryptoItem";
// import { useNavigate } from "react-router-dom";

function CryptoList() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const api = http();
  //   const navigate = useNavigate();

  useEffect(() => {
    api.GoldPrice(({ data }) => {
      setLoading(false);
      setData(data);
    }, "");
  }, []);

  if (loading) {
    return <SmallLoading />;
  }

  return (
    <div className="pt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-6">
        <h3 className="mt-4 mb-3">قیمت سکه</h3>
          {data.coinPrice.coin.map((item, index) => (
            <div className="w-100 mb-2 row justify-content-center" key={index}>
              <CryptoItem
                name={item.name}
                desc={item.time}
                topPrice={"$" + priceNumber(item.price)}
                noTopPriceStyle
                CurrentPriceStyle={item.type === "high"}
                rtlCurrentPrice
                CurrentPrice={
                  item.percent +
                  `${item.type === "high" ? "+" : ""} ${
                    item.type === "low" ? "-" : ""
                  }`
                }
              />
            </div>
          ))}
        </div>

        <div className="col-12 col-lg-6">
        <h3 className="mt-4 mb-3">قیمت حباب سکه</h3>
          {data.coinPrice.coinBubble.map((item, index) => (
            <div className="w-100 mb-2 row justify-content-center" key={index}>
              <CryptoItem
                name={item.name}
                desc={item.time}
                topPrice={"$" + priceNumber(item.price)}
                noTopPriceStyle
                CurrentPriceStyle={item.type === "high"}
                rtlCurrentPrice
                CurrentPrice={
                  item.percent +
                  `${item.type === "high" ? "+" : ""} ${
                    item.type === "low" ? "-" : ""
                  }`
                }
              />
            </div>
          ))}
        </div>

        <div className="col-12 col-lg-6">
        <h3 className="mt-4 mb-3">قیمت تک فروشی سکه</h3>
          {data.coinPrice.singleSell.map((item, index) => (
            <div className="w-100 mb-2 row justify-content-center" key={index}>
              <CryptoItem
                name={item.name}
                desc={item.time}
                topPrice={"$" + priceNumber(item.price)}
                noTopPriceStyle
                CurrentPriceStyle={item.type === "high"}
                rtlCurrentPrice
                CurrentPrice={
                  item.percent +
                  `${item.type === "high" ? "+" : ""} ${
                    item.type === "low" ? "-" : ""
                  }`
                }
              />
            </div>
          ))}
        </div>

        <div className="col-12 col-lg-6">
        <h3 className="mt-4 mb-3"> قیمت سکه در بورس</h3>
          {data.coinPrice.coinInStock.map((item, index) => (
            <div className="w-100 mb-2 row justify-content-center" key={index}>
              <CryptoItem
                name={item.name}
                desc={item.time}
                topPrice={"$" + priceNumber(item.price)}
                noTopPriceStyle
                CurrentPriceStyle={item.type === "high"}
                rtlCurrentPrice
                CurrentPrice={
                  item.percent +
                  `${item.type === "high" ? "+" : ""} ${
                    item.type === "low" ? "-" : ""
                  }`
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CryptoList;
