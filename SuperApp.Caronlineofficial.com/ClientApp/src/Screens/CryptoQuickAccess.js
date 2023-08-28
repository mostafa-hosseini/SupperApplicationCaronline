import React, { useState, useEffect } from "react";

import bitcoin from '../assets/images/Icons/Dideban/bitcoin-01.svg'
import borse from '../assets/images/Icons/Dideban/borse-01.svg'
import camodity from '../assets/images/Icons/Dideban/camodity-01.svg'
import dollor from '../assets/images/Icons/Dideban/dollor-01.svg'
import mashin from '../assets/images/Icons/Dideban/mashin-01.svg'
import melk from '../assets/images/Icons/Dideban/melk-01.svg'
import newspaper from '../assets/images/Icons/Dideban/newspaper-01.svg'
import tala from '../assets/images/Icons/Dideban/tala-01.svg'
import forex from '../assets/images/Icons/Dideban/‌forex-01.svg'


import sabt from "../assets/images/Icons/house/sabt-01.svg";
import Loading from "../components/Loading";
import RowItem from "../components/RowItem";
export default function CryptoQuickAccess() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Loading isLoading={loading}>
      <div className="row">
        <div className="col-3 p-1">
          <RowItem
            imgSrc={bitcoin}
            imgalt="ارز دیجیتال"
            title="ارز دیجیتال"
            to={"/Crypto"}
          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={forex}
            imgalt="فارکس"
            title="فارکس"
            to={"/Forex"}
          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={borse}
            imgalt="بورس ایران"
            title="بورس ایران"
            to={"/Market"}
          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={tala}
            imgalt="طلا و سکه"
            title="طلا و سکه"
            to={"/Gold"}
          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={dollor}
            imgalt="دلار و ارز"
            title="دلار و ارز"
            to={"/Currency"}
          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={melk}
            imgalt="مسکن"
            title="مسکن"
            to={"/RealEstate"}
          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={camodity}
            imgalt="کامودیتی"
            title="کامودیتی"
            to={"/CommodityExchange"}
          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={newspaper}
            imgalt="روزنامه های ایران"
            title="روزنامه های ایران"
            to={"/NewsPaper"}
          />
        </div>
      </div>
    </Loading>
  );
}
