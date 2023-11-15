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
import moshavereh from "../assets/images/Icons/moshavere-mashinto.svg";
import Loading from "../components/Loading";
import Lottie from "react-lottie";
import anim1 from '../assets/Animations/anim3.json'
export default function MashintoQuickAccess() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <Loading isLoading={loading}>

      <div className="row">
        <div className="col-3 p-1">
          <RowItem
            imgSrc={mohasebe}
            imgalt="قیمت خودروی شما"
            title="قیمت خودروی شما"
            to="https://mashinto.com/محاسبه-قیمت"
            blank

          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={gheymat}
            imgalt="قیمت خودروهای صفر"
            title="قیمت خودروهای صفر"
            to={"https://mashinto.com/carprice"}
            blank
          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={kharid}
            imgalt="رنت خودرو در دبی"
            title="رنت خودرو در دبی"
            to={"https://mashinto.com/buycar"}
            blank
          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={forosh}
            imgalt="رنت خودرو در ایران"
            title="رنت خودرو در ایران"
            to={"https://mashinto.com/sellcar"}
            blank
            
          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={karshenasi}
            imgalt="تیونینگ"
            title="تیونینگ"
            to={"https://mashinto.com/"}
            blank
            
          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={froshgah}
            imgalt="فروشگاه تخصصی خودرو"
            title="فروشگاه تخصصی خودرو"
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
        <div className="col-3 p-1">
          <RowItem
            imgSrc={sabt}
            imgalt="استعلام"
            title="استعلام"
            to={"https://mashinto.com/ثبت-آگهی"}
            blank
          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={sabt}
            imgalt="موزیک های خودرویی"
            title="موزیک های خودرویی"
            to={"https://mashinto.com/ثبت-آگهی"}
            blank
          />
        </div>
        <div className="col-3 p-1">
          <RowItem
            imgSrc={moshavereh}
            imgalt="مشاوره"
            title="مشاوره"
            to={"https://mashverato.com"}
            blank
          />
        </div>
        <div className="w-100"></div>
        <div className="col-8 col-md-6 mx-auto">
          <button className="btn w-100 mt-2 btn-block btn-primary" style={{backgroundColor:"#1b3fc0"}}>
            ورود به ماشین تو
          </button>
        </div>
        <div className="col-12">
          <Lottie options={{ animationData: anim1, autoplay: true, loop: true }} />
        </div>

      </div>
    </Loading>
  );
}
