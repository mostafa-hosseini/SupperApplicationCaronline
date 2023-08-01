import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import CustomTab from "../components/CustomTab";
import MarketList from "../components/MarketList";
import GoldList from "../components/GoldList";
import CoinList from "../components/CoinList";
// import NewsList from "../components/NewsList";
import CryptoAnalysis from "./CryptoAnalysis";

function Crypto(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Loading isLoading={loading}>
      <div className="mb-4">
        <CustomTab
          setLoading={setLoading}
          data={[
            {
              title: "قیمت طلا و فلزات گرانبها",
              Component: <GoldList />,
              id: "tab-1",
            },
            { title: "قیمت سکه", Component: <CoinList />, id: "tab-2" },
            // { title: "اخبار", Component: <NewsList id="1" />, id: "tab-3" },
            { title: "تحلیل ها", Component: <CryptoAnalysis />, id: "tab-4" },
          ]}
        />
      </div>
    </Loading>
  );
}

export default Crypto;
