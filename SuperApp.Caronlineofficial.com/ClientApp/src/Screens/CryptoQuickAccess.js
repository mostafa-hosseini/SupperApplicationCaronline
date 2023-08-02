import React, { useState, useEffect } from "react";
import forosh from "../assets/images/Icons/house/forosh-sefareshi-01.svg";
import foroshandeh from "../assets/images/Icons/house/foroshandeh.svg";
import froshgah from "../assets/images/Icons/house/froshgah-01.svg";
import gheymat from "../assets/images/Icons/house/gheymat-01.svg";
import hamkari from "../assets/images/Icons/house/hamkari-01.svg";
import karshenasi from "../assets/images/Icons/house/karshenasi-01.svg";
import kharid from "../assets/images/Icons/house/kharid-sefareshi-01.svg";
import moshavere from "../assets/images/Icons/house/moshavere-01.svg";
import sabt from "../assets/images/Icons/house/sabt-01.svg";
import Loading from "../components/Loading";
import RowItem from "../components/RowItem";
export default function AmlaktoQuickAccess() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Loading isLoading={loading}>
      <div className="row">
        <div className="col-3">
          <RowItem
            imgSrc={sabt}
            imgalt="ارز دیجیتال"
            title="ارز دیجیتال"
            to={"/Crypto"}
          />
        </div>
        <div className="col-3">
          <RowItem
            imgSrc={gheymat}
            imgalt="فارکس"
            title="فارکس"
            to={"/Forex"}
          />
        </div>
        <div className="col-3">
          <RowItem
            imgSrc={karshenasi}
            imgalt="بورس ایران"
            title="بورس ایران"
            to={"/Market"}
          />
        </div>
        <div className="col-3">
          <RowItem
            imgSrc={moshavere}
            imgalt="طلا و سکه"
            title="طلا و سکه"
            to={"/Gold"}
          />
        </div>
        <div className="col-3">
          <RowItem
            imgSrc={kharid}
            imgalt="دلار و ارز"
            title="دلار و ارز"
            to={"/Currency"}
          />
        </div>
        <div className="col-3">
          <RowItem
            imgSrc={forosh}
            imgalt="مسکن"
            title="مسکن"
            to={"/RealEstate"}
          />
        </div>
        <div className="col-3">
          <RowItem
            imgSrc={foroshandeh}
            imgalt="کامودیتی"
            title="کامودیتی"
            to={"/CommodityExchange"}
          />
        </div>
        <div className="col-3">
          <RowItem
            imgSrc={froshgah}
            imgalt="روزنامه های ایران"
            title="روزنامه های ایران"
            to={"/NewsPaper"}
          />
        </div>
      </div>
    </Loading>
  );
}
