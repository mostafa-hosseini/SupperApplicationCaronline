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
      <div className="col-3 p-1">
        <RowItem
          imgSrc={sabt}
          imgalt="ثبت آگهی"
          title="ثبت آگهی"
          to={"/https://amlakto.com/%D8%AB%D8%A8%D8%AA-%D8%A2%DA%AF%D9%87%DB%8C"}
        />
      </div>
      <div className="col-3 p-1">
        <RowItem
          imgSrc={gheymat}
          imgalt="قیمت روز ملک"
          title="قیمت روز ملک"
          to={"https://amlakto.com/price"}
        />
      </div>
      <div className="col-3 p-1">
        <RowItem
          imgSrc={karshenasi}
          imgalt="درخواست کارشناسی"
          title="درخواست کارشناسی"
          
        />
      </div>
      <div className="col-3 p-1">
        <RowItem
          imgSrc={moshavere}
          imgalt="مشاوره"
          title="مشاوره"
          to={"https://mashverato.com/"}
        />
      </div>
      <div className="col-3 p-1">
        <RowItem
          imgSrc={kharid}
          imgalt="خرید سفارشی"
          title="خرید سفارشی"
          
        />
      </div>
      <div className="col-3 p-1">
        <RowItem
          imgSrc={forosh}
          imgalt="فروش سفارشی"
          title="فروش سفارشی"
          to={"/MashintoQuickAcces"}
        />
      </div>
      <div className="col-3 p-1">
        <RowItem
          imgSrc={foroshandeh}
          imgalt="فروشنده شوید"
          title="فروشنده شوید"
          to={"https://amlakto.com/becomeASeller"}
        />
      </div>
      <div className="col-3 p-1">
        <RowItem
          imgSrc={hamkari}
          imgalt="فایل های زیر قیمت"
          title="فایل های زیر قیمت"
          
        />
      </div>
      <div className="col-3 p-1">
        <RowItem
          imgSrc={froshgah}
          imgalt="فروشگاه"
          title="فروشگاه"
          to={"https://amlakto.com/shop"}
        />
      </div>
    </div>
    </Loading>
  );
}
