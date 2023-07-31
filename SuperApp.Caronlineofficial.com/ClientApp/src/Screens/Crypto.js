import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import CustomTab from "../components/CustomTab";
import CryptoList from "../components/CryptoList";
import NewsList from "../components/NewsList";

function Crypto(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Loading isLoading={loading}>
      <CustomTab
        setLoading={setLoading}
        tabNames={["نمای بازار", "اخبار", "تحلیل ها"]}
        tabComponents={[CryptoList, NewsList, CryptoList]}
      />
    </Loading>
  );
}

export default Crypto;
