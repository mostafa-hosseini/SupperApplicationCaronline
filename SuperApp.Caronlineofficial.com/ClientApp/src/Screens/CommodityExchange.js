import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import CustomTab from "../components/CustomTab";
import BaseMetalList from "../components/BaseMetalList";
import IranMetalList from "../components/IranMetalList";
import InternationalMetalList from "../components/InternationalMetalList";
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
          smallTab
          data={[
            { title: "فلزات پایه", Component: <BaseMetalList />, id: "tab-1" },
            { title: "ایران", Component: <IranMetalList />, id: "tab-2" },
            {
              title: "جهان",
              Component: <InternationalMetalList />,
              id: "tab-3",
            },
            // { title: "اخبار", Component: <NewsList id="1" />, id: "tab-4" },
            { title: "تحلیل ها", Component: <CryptoAnalysis />, id: "tab-5" },
          ]}
        />
      </div>
    </Loading>
  );
}

export default Crypto;
