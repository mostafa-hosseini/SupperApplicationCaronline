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
import Lottie from "react-lottie";
import anim1 from '../assets/Animations/anim1.json'
import { useNavigate } from "react-router-dom";

export default function AmlaktoQuickAccess() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <Loading isLoading={loading}>
      <div className="row">
        <div className="col-6 mt-3  mx-auto">
          <div className="br-100 shadow " style={{ borderRadius: 15, overflow: "hidden", cursor: "pointer" }} onClick={() => {
            window.location = "https://amlakto.com/expertRequest"
          }} >
            <img src={require("../assets/images/Untitled-5.jpg")} className="w-100 " alt="" />
            
          </div>
        </div>
        <div className="w-100 mt-5"></div>
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
            imgSrc={forosh}
            imgalt="رنت ملک"
            title="رنت ملک"
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
        <div className="col-3 p-1">
          <RowItem
            imgSrc={sabt}
            imgalt="مقالات"
            title="مقالات"
          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={sabt}
            imgalt="3d max"
            title="3d max"
          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={kharid}
            imgalt="سبک های معماری"
            title="سبک های معماری"
          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={kharid}
            imgalt="ساختمان های روز "
            title="ساختمان های روز "

          />
        </div><div className="col-3 p-1">
          <RowItem
            imgSrc={kharid}
            imgalt="معماری مدرن"
            title="معماری مدرن"

          />
        </div><div className="col-3 p-1">
          <RowItem
            imgSrc={kharid}
            imgalt="مصالح نوین"
            title="مصالح نوین"

          />
        </div><div className="col-3 p-1">
          <RowItem
            imgSrc={kharid}
            imgalt="معماری نئوکلاسیک"
            title="معماری نئوکلاسیک"

          />
        </div><div className="col-3 p-1">
          <RowItem
            imgSrc={kharid}
            imgalt="معماری سنتی ایران"
            title="معماری سنتی ایران"

          />
        </div><div className="col-3 p-1">
          <RowItem
            imgSrc={kharid}
            imgalt="ساختمان های زیبا ایران"
            title="ساختمان های زیبا ایران"

          />
        </div><div className="col-3 p-1">
          <RowItem
            imgSrc={kharid}
            imgalt="معماران برتر"
            title="معماران برتر"

          />
        </div><div className="col-3 p-1">
          <RowItem
            imgSrc={kharid}
            imgalt="طراحی داخلی"
            title="طراحی داخلی"

          />
        </div>
        <div className="w-100"></div>
        <div className="col-12">
          <Lottie options={{ animationData: anim1, autoplay: true, loop: true }} />
        </div>
      </div>
    </Loading>
  );
}
