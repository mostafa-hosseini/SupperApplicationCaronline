import React, { useState, useEffect } from "react";
import http from "../api/testApi";
import priceNumber from "../utils/priceNumber";
import SmallLoading from "./SmallLoading";
import CryptoItem from "./CryptoItem";
// import { useNavigate } from "react-router-dom";

function SuperMarketList() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //   const navigate = useNavigate();
  const api = http();

  useEffect(() => {
    api.CommodityExchange(({ data }) => {
      setLoading(false);
      setData(data);
    }, "");
  }, []);

  if (loading) {
    return <SmallLoading />;
  }

  return (
    <div className="pt-4">
      {!data.length ? (
        <p className="text-center font-size-3x my-4">ارزی پیدا نشد!</p>
      ) : (
        <div className="row justify-content-center">
          {data.map((item, index) => (
            <div
              className="col-12 col-lg-6 mb-2 row justify-content-center"
              key={index}
            >
              <CryptoItem
                name={item.name}
                desc={item.time}
                topPrice={priceNumber(item.endPrice) + "ریال"}
                rtlTopPrice
                noTopPriceStyle
                CurrentPrice={
                  item.percent +
                  `${item.type == "high" ? "+" : ""} ${
                    item.type == "low" ? "-" : ""
                  }`
                }
                rtlCurrentPrice
                noCurrentPriceStyle
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SuperMarketList;
