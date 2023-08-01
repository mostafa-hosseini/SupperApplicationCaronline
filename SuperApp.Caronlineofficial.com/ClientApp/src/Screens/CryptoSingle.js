import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import priceNumber from "../utils/priceNumber";
import Loading from "../components/Loading";
import CryptoChart from "../components/CryptoChart";

function CryptoSingle(props) {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d"
        );
        const data = await res.json();
        setLoading(false);

        const foundCoin = data.find((item) => item.symbol === params.coin);
        setCoin(foundCoin);
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
    };

    loadData();
  }, []);

  return (
    <Loading isLoading={loading}>
      <div className="back-ground bg-light-custom px-3 py-4 h-auto mb-4">
        <div className="d-flex alifn-items-center justify-content-center mb-4">
          <div className="ms-4">
            <img
              style={{ width: 100, height: 100, borderRadius: 100 }}
              src={coin.image}
              alt={coin.name}
            />
          </div>

          <div className="d-flex flex-column justify-content-center">
            <h1 className="font-size-4x dark-color">{coin.name}</h1>
            <h3 className="font-size-3x text-color mb-0">{coin.symbol}</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6 mb-3">
            <div className="h-100 bg-white px-2 py-3 d-flex align-items-center justify-content-between border-radius-1 shadow-sm">
              <p className="mb-0 text-color">رتبه در بازار</p>
              <p className="mb-0">{priceNumber(coin.market_cap_rank)}</p>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <div className="h-100 bg-white px-2 py-3 d-flex align-items-center justify-content-between border-radius-1 shadow-sm">
              <p className="mb-0 text-color">ارزش بازار (دلار):</p>
              <p className="mb-0">{priceNumber(coin.market_cap)}</p>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <div className="h-100 bg-white px-2 py-3 d-flex align-items-center justify-content-between border-radius-1 shadow-sm">
              <p className="mb-0 text-color">کل حجم:</p>
              <p className="mb-0">{priceNumber(coin.total_volume)}</p>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <div className="h-100 bg-white px-2 py-3 d-flex align-items-center justify-content-between border-radius-1 shadow-sm">
              <p className="mb-0 text-color">ارزش معاملات 24 ساعت گذشته:</p>
              <p className="mb-0 ltr">
                {priceNumber(coin.price_change_percentage_24h)}
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <div className="h-100 bg-white px-2 py-3 d-flex align-items-center justify-content-between border-radius-1 shadow-sm">
              <p className="mb-0 text-color">
                حجم معاملات نماد به حجم کل معاملات بازار
              </p>
              <p className="mb-0">&nbsp;</p>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <div className="h-100 bg-white px-2 py-3 d-flex align-items-center justify-content-between border-radius-1 shadow-sm">
              <p className="mb-0 text-color">درصد تغییرات هفتگی</p>
              <p className="mb-0 ltr">
                {priceNumber(
                  coin?.price_change_percentage_7d_in_currency
                    ?.toString()
                    ?.substring(0, 4)
                )}
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <div className="h-100 bg-white px-2 py-3 d-flex align-items-center justify-content-between border-radius-1 shadow-sm">
              <p className="mb-0 text-color">بیشترین در 24 گذشته</p>
              <p className="mb-0">{priceNumber(coin.high_24h)}</p>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <div className="h-100 bg-white px-2 py-3 d-flex align-items-center justify-content-between border-radius-1 shadow-sm">
              <p className="mb-0 text-color">بیشترین در 24 گذشته</p>
              <p className="mb-0">{priceNumber(coin.low_24h)}</p>
            </div>
          </div>
        </div>

        <div className="w-100 mt-4">
          <CryptoChart
            coinName={coin.name}
            color={coin.price_change_percentage_24h > 0 ? "#00B589" : "#fc4422"}
            priceList={coin?.sparkline_in_7d?.price}
          />
        </div>
      </div>
    </Loading>
  );
}

export default CryptoSingle;
