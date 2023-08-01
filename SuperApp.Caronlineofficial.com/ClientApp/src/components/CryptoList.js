import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import priceNumber from "../utils/priceNumber";
import SmallLoading from "./SmallLoading";
// import { useNavigate } from "react-router-dom";

function CryptoList() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  //   const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d"
        );
        const data = await res.json();
        setCoins(data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        toast.error("مشکلی رخ داده.\n لطفا دوباره تلاش کنید.");
        console.log(e);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <SmallLoading />;
  }

  return (
    <div className="pt-4">
      {!coins.length ? (
        <p className="text-center font-size-3x my-4">ارزی پیدا نشد!</p>
      ) : (
        <div className="row justify-content-center">
          <div className="col-12">
            <input
              type="text"
              name="search-currency"
              className="form-control back-ground mb-4 bg-white"
              placeholder="جستجو در ارز ها"
              id="currency-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {coins
            .filter(
              (coin) =>
                coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
                coin.symbol
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
            )
            .map((item) => (
              <div
                className="col-12 col-lg-6 mb-2 row justify-content-center"
                key={item.id}
              >
                <div
                  className="crypto-item"
                  onClick={() =>
                    // navigate(`/crypto/${item.symbol}`, { state: { coin: item } })
                    console.log("hi")
                  }
                >
                  <div className="crypto-img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="crupto-text">
                    <div className="text-row">
                      <p className="text-name mb-2">{item.name}</p>
                      <p
                        className={`text-price mb-2${
                          item.price_change_percentage_24h > 0
                            ? " text-success"
                            : " text-danger"
                        }`}
                      >
                        {item.price_change_percentage_24h.toFixed(2)}%
                      </p>
                    </div>

                    <div className="text-row">
                      <p className="text-name mb-0">{item.symbol}</p>

                      <p
                        className={`text-price mb-0${
                          item.price_change_percentage_24h > 0
                            ? " text-success"
                            : " text-danger"
                        }`}
                      >
                        ${priceNumber(item.current_price)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default CryptoList;
