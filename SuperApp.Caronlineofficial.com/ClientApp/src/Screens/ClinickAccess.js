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
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function ClinickAccess() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <Loading isLoading={loading}>
      <div className="row">
        <div className="col-12  mb-3  row justify-content-around">
          <Swiper
            // slidesPerView={3}

            modules={[Navigation]}
            // navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              // when window width is >= 480px
            }}
            className="mb-2"
          >
            <SwiperSlide
              className="nbt "
              style={{ overflow: "hidden", borderRadius: 15 }}
              key={"key"}
            >
              <LazyLoadImage
                // height={200}
                width={"100%"}
                effect="black-and-white"
                src={require("../assets/images/Banners/23.jpg")}
                onClick={() => window.open("https://mashinto.com/BecomeASeller")}
                alt={""}
                style={{ width: "100%" }}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src =
                    "https://mashinto.com/media/ads/defualt.png";
                  currentTarget.style = "max-height:180px";
                }}
              />
            </SwiperSlide>

            <SwiperSlide
              className="nbt "
              style={{ overflow: "hidden", borderRadius: 15 }}
              key={"key"}
            >
              <LazyLoadImage
                // height={200}
                onClick={() => window.open("https://amlakto.com/BecomeASeller")}
                width={"100%"}
                effect="black-and-white"
                src={require("../assets/images/Banners/24.jpg")}
                alt={""}
                style={{ width: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide
              className="nbt "
              style={{ overflow: "hidden", borderRadius: 15 }}
              key={"key"}
            >
              <LazyLoadImage
                // height={200}
                onClick={() => window.open("https://amlakto.com/BecomeASeller")}
                width={"100%"}
                effect="black-and-white"
                src={require("../assets/images/Banners/25.jpg")}
                alt={""}
                style={{ width: "100%" }}
              />
            </SwiperSlide>
            {/* <SwiperSlide
              className="nbt "
              style={{ overflow: "hidden", borderRadius: 15 }}
              key={"key"}
            >
              <LazyLoadImage
                onClick={() => window.open("https://amlakto.com/BecomeASeller")}
                width={"100%"}
                effect="black-and-white"
                src={require("../assets/images/Banners/26.jpg")}
                alt={""}
                style={{ width: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide
              className="nbt "
              style={{ overflow: "hidden", borderRadius: 15 }}
              key={"key"}
            >
              <LazyLoadImage
                onClick={() => window.open("https://amlakto.com/BecomeASeller")}
                width={"100%"}
                effect="black-and-white"
                src={require("../assets/images/Banners/27.jpg")}
                alt={""}
                style={{ width: "100%" }}
              />
            </SwiperSlide> */}

          </Swiper>
        </div>
        <div className="col-3 p-0">
          <RowItem
            imgSrc={digitalmarketing}
            imgalt="دیجیتال مارکتینگ"
            title="دیجیتال مارکتینگ"
            to={"/"}
          />
        </div>

        <div className="col-3 p-0">
          <RowItem
            imgSrc={tarahi}
            imgalt="طراحی سایت"
            title="طراحی سایت"
            to={"/"}
          />
        </div>

        <div className="col-3 p-0">
          <RowItem imgSrc={seo} imgalt="سئو" title="سئو" to={"/"} />
        </div>

        <div className="col-3 p-0">
          <RowItem
            imgSrc={app}
            imgalt="ساخت اپلیکیشن"
            title="ساخت اپلیکیشن"
            to={"/"}
          />
        </div>

        <div className="col-3 p-0">
          <RowItem
            imgSrc={teaser}
            imgalt="ساخت تیزر"
            title="ساخت تیزر"
            to={"/"}
          />
        </div>

        <div className="col-3 p-0">
          <RowItem
            imgSrc={graphic}
            imgalt="طراحی گرافیک"
            title="طراحی گرافیک"
            to={"/"}
          />
        </div>

        <div className="col-3 p-0">
          <RowItem
            imgSrc={tolidmohtava}
            imgalt="تولید محتوا"
            title="تولید محتوا"
            to={"/"}
          />
        </div>

        <div className="col-3 p-0">
          <RowItem
            imgSrc={catalog}
            imgalt="کاتالوگ دیجیتال"
            title="کاتالوگ دیجیتال"
            to={"/"}
          />
        </div>

        <div className="col-3 p-0">
          <RowItem
            imgSrc={brandsazi}
            imgalt="برندسازی"
            title="برندسازی"
            to={"/"}
          />
        </div>

        <div className="col-3 p-0">
          <RowItem
            imgSrc={sabtbrand}
            imgalt="ثبت شرکت و برند"
            title="ثبت شرکت و برند"
            to={"/"}
          />
        </div>

        <div className="col-3 p-0">
          <RowItem imgSrc={axasi} imgalt="عکاسی" title="عکاسی" to={"/"} />
        </div>
      </div>
    </Loading>
  );
}
