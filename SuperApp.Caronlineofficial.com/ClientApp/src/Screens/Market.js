import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import CustomTab from "../components/CustomTab";
import MarketList from "../components/MarketList";
import SuperMarketList from "../components/SuperMarketList";
import CommodityList from "../components/CommodityList";
// import NewsList from "../components/NewsList";
import CryptoAnalysis from "./CryptoAnalysis";

function Crypto(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <Loading isLoading={loading}>
      <div className="mb-4">
        <CustomTab
          setLoading={setLoading}
          smallTab
          data={[
            { title: "بورس", Component: <MarketList />, id: "tab-1" },
            { title: "فرابورس", Component: <SuperMarketList />, id: "tab-2" },
            { title: "بورس کالا", Component: <CommodityList />, id: "tab-3" },
            // { title: "اخبار", Component: <NewsList id="1" />, id: "tab-4" },
            { title: "تحلیل ها", Component: <CryptoAnalysis />, id: "tab-5" },
          ]}
        />
      </div>
    </Loading>
  );
}

export default Crypto;
