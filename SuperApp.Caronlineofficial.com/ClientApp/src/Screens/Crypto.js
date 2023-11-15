import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import CustomTab from "../components/CustomTab";
import CryptoList from "../components/CryptoList";
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
          data={[
            {
              title: "نمای بازار", Component: <div style={{ height: "80vh" }}>
                <iframe src="https://coin360.com/widget/map?group=all&utm_campaign=https%3A%2F%2Ffactcoins.com&utm_content=https%3A%2F%2Ffactcoins.com%2F&utm_medium=affilate&utm_source=widget&utm_source=embed_map" frameborder="0" title="Coin360.com: Cryptocurrency Market State" width="100%" height="100%"></iframe>
              </div>, id: "tab-1"
            },
            {
              title: "حجم های بازار", Component: <div style={{ height: "80vh" }}>
                <iframe src="https://cryptobubbles.net" width="100%" height="100%" styles={{ border: "none" }}></iframe>
              </div>, id: "tab-2"
            },
            { title: "قیمت ها", Component: <CryptoList />, id: "tab-3" },
            // {title: "اخبار", Component: <NewsList id="1" />, id: "tab-2" },
            { title: "تحلیل ها", Component: <CryptoAnalysis />, id: "tab-4" },
          ]}
        />
      </div>
    </Loading>
  );
}

export default Crypto;
