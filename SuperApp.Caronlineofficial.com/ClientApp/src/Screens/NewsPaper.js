import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import CustomTab from "../components/CustomTab";
import NewsPaperList from "../components/NewsPaperList";

function Crypto(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Loading isLoading={loading}>
      <div className="mb-4 newspaper-list">
        <CustomTab
          setLoading={setLoading}
          scrollTabs
          data={[
            { title: "اقتصادی", Component: <NewsPaperList id={2} />, id: "tab-1" },
            { title: "ورزشی", Component: <NewsPaperList id={3} />, id: "tab-2" },
            { title: "استانها", Component: <NewsPaperList id={4} />, id: "tab-3" },
            { title: "مجله", Component: <NewsPaperList id={6} />, id: "tab-4" },
            { title: "سایر", Component: <NewsPaperList id={5} />, id: "tab-5" },
          ]}
        />
      </div>
    </Loading>
  );
}

export default Crypto;
