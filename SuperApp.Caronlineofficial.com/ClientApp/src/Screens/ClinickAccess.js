import React, { useState, useEffect } from "react";
import axasi from "../assets/images/Icons/axasi-01.svg";
import app from "../assets/images/Icons/app-01.svg";
import brandsazi from "../assets/images/Icons/brandsazi-01.svg";
import catalog from "../assets/images/Icons/catalog-01.svg";
import digitalmarketing from "../assets/images/Icons/digitalmarketing-01.svg";
import graphic from "../assets/images/Icons/graphic-01.svg";
import sabtbrand from "../assets/images/Icons/sabtbrand-01.svg";
import seo from "../assets/images/Icons/seo-01.svg";
import tarahi from "../assets/images/Icons/tarahi-site-01.svg";
import teaser from "../assets/images/Icons/teaser-01.svg";
import tolidmohtava from "../assets/images/Icons/tolidmohtava-01.svg";
import RowItem from "../components/RowItem";
import Loading from "../components/Loading";

export default function ClinickAccess() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Loading isLoading={loading}>
      <div className="row">
        <div className="col-3">
          <RowItem imgSrc={axasi} imgalt="عکاسی" title="عکاسی" to={"/"} />
        </div>
        <div className="col-3">
          <RowItem imgSrc={app} imgalt="اپلیکیشن" title="اپلیکیشن" to={"/"} />
        </div>
        <div className="col-3">
          <RowItem
            imgSrc={brandsazi}
            imgalt="برندسازی"
            title="برندسازی"
            to={"/"}
          />
        </div>
        <div className="col-3">
          <RowItem
            imgSrc={catalog}
            imgalt="کاتالوگ دیجیتال"
            title="کاتالوگ دیجیتال"
            to={"/"}
          />
        </div>
        <div className="col-3">
          <RowItem
            imgSrc={digitalmarketing}
            imgalt="دیجیتال مارکتینگ"
            title="دیجیتال مارکتینگ"
            to={"/"}
          />
        </div>
        <div className="col-3">
          <RowItem imgSrc={graphic} imgalt="گرافیک" title="گرافیک" to={"/"} />
        </div>
        <div className="col-3">
          <RowItem
            imgSrc={sabtbrand}
            imgalt="ثبت برند"
            title="ثبت برند"
            to={"/"}
          />
        </div>
        <div className="col-3">
          <RowItem imgSrc={seo} imgalt="سئو" title="سئو" to={"/"} />
        </div>
        <div className="col-3">
          <RowItem
            imgSrc={tarahi}
            imgalt="طراحی سایت"
            title="طراحی سایت"
            to={"/"}
          />
        </div>
        <div className="col-3">
          <RowItem
            imgSrc={teaser}
            imgalt="ساخت تیزر"
            title="ساخت تیزر"
            to={"/"}
          />
        </div>
        <div className="col-3">
          <RowItem
            imgSrc={tolidmohtava}
            imgalt="تولید محتوا"
            title="تولید محتوا"
            to={"/"}
          />
        </div>
      </div>
    </Loading>
  );
}
