import React, { useState, useEffect } from "react";
import RowItem from "../components/RowItem";

import mohasebe from "../assets/images/Icons/cars/mohasebe-01.svg";
import gheymat from "../assets/images/Icons/cars/gheymat-01.svg";
import kharid from "../assets/images/Icons/cars/kharid-sefareshi.svg";
import forosh from "../assets/images/Icons/cars/forosh-sefareshi-01.svg";
import karshenasi from "../assets/images/Icons/cars/karshenasi-01.svg";
import froshgah from "../assets/images/Icons/cars/froshgah-01.svg";
import hamkari from "../assets/images/Icons/cars/hamkari-01.svg";
import foroshandeh from "../assets/images/Icons/cars/foroshandeh.svg";
import sabt from "../assets/images/Icons/cars/sabt-01.svg";
import Loading from "../components/Loading";

export default function MashintoQuickAccess() {
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
          imgSrc={mohasebe}
          imgalt="محاسبه قیمت خودرو"
          title="محاسبه قیمت خودرو"
          to="https://mashinto.com/محاسبه-قیمت"
          blank
          
        />
      </div>
      <div className="col-3 p-1">
        <RowItem
          imgSrc={gheymat}
          imgalt="قیمت روز خودرو"
          title="قیمت روز خودرو"
          to={"https://mashinto.com/carprice"}
          blank
        />
      </div>
      <div className="col-3 p-1">
        <RowItem
          imgSrc={kharid}
          imgalt="خرید سفارشی"
          title="خرید سفارشی"
          to={"https://mashinto.com/buycar"}
          blank
        />
      </div>
      <div className="col-3 p-1">
        <RowItem
          imgSrc={forosh}
          imgalt="فروش سفارشی"
          title="فروش سفارشی"
          to={"https://mashinto.com/sellcar"}
          blank
        />
      </div>
      <div className="col-3 p-1">
        <RowItem
          imgSrc={karshenasi}
          imgalt="درخواست کارشناسی"
          title="درخواست کارشناسی"
          to={"https://mashinto.com/"}
          blank
        />
      </div>
      <div className="col-3 p-1">
        <RowItem
          imgSrc={froshgah}
          imgalt="فروشگاه"
          title="فروشگاه"
          to={"https://mashinto.com/shop"}
          blank
        />
      </div>
      <div className="col-3 p-1">
        <RowItem
          imgSrc={hamkari}
          imgalt="همکاری با ماشین تو"
          title="همکاری با ماشین تو"
          to={"https://mashinto.com/cooperation"}
          blank
        />
      </div>
      <div className="col-3 p-1">
        <RowItem
          imgSrc={foroshandeh}
          imgalt="فروشنده شوید"
          title="فروشنده شوید"
          to={"https://mashinto.com/BecomeASeller"}
          blank
        />
      </div>
      <div className="col-3 p-1">
        <RowItem
          imgSrc={sabt}
          imgalt="ثبت آگهی"
          title="ثبت آگهی"
          to={"https://mashinto.com/ثبت-آگهی"}
          blank
        />
      </div>
    </div>
    </Loading>
  );
}
