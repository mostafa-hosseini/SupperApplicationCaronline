import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import CustomTab from "../components/CustomTab";
import RealEstateList from "../components/RealEstateList";
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
            { title: "مسکن", Component: <RealEstateList />, id: "tab-1" },
            // { title: "اخبار", Component: <NewsList id="1" />, id: "tab-2" },
            { title: "تحلیل ها", Component: <CryptoAnalysis />, id: "tab-3" },
          ]}
        />
      </div>
    </Loading>
  );
}

export default Crypto;
