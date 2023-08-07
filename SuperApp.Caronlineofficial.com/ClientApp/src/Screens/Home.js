import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/styles/custom.css";
// import required modules
// import Accordion from "react-bootstrap/Accordion";
import { Navigation, Pagination } from "swiper";

import amoozesh from "../assets/images/Icons/amoozesh-01.svg";
import bimeh from "../assets/images/Icons/bimeh-01.png";
import cars from "../assets/images/Icons/cars-01.svg";
import froshgah from "../assets/images/Icons/froshgah-01.svg";
import game from "../assets/images/Icons/game-01.svg";
import house from "../assets/images/Icons/house-01.svg";
import moshavereh from "../assets/images/Icons/moshavereh-01.svg";
import sarmaye from "../assets/images/Icons/sarmaye-01.svg";
import clinick from "../assets/images/Icons/clinick-01.svg";
import dideban from "../assets/images/Icons/dideban-01.svg";

import amlakto from "../assets/images/Icons/logo/amlakto-01.png";
import kalato from "../assets/images/Icons/logo/kalato-01.png";
import mashinto from "../assets/images/Icons/logo/mashinto-01.svg";
import moshaverto from "../assets/images/Icons/logo/moshaverto-01.svg";

import defaultTest from "../assets/testImages/default-test.jpg";
import RowItem from "../components/RowItem";
import BlogListItem from "../components/BlogListItem";
import ListTitle from "../components/ListTitle";
import BannerSliderItem from "../components/BannerSliderItem";
import Accordion from "../components/Accordion";
import AdSliderItem from "../components/AdSliderItem";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

export function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Loading isLoading={loading}>
      <div className="main-page">
        <section className="w-100">
          <div className="row home-icons">
            <div className="col-3">
              <RowItem
                imgSrc={cars}
                imgalt="خودرو"
                title="خودرو"
                to={"/خودرو"}
              />
            </div>

            <div className="col-3">
              <RowItem
                imgSrc={house}
                imgalt="املاک"
                title="املاک"
                to={"/املاک"}
              />
            </div>

            <div className="col-3">
              <RowItem
                imgSrc={bimeh}
                imgalt="بیمه"
                title="بیمه"
                to={"https://bimehato.com/"}
              />
            </div>

            <div className="col-3">
              <RowItem
                imgSrc={froshgah}
                imgalt="فروشگاه"
                title="فروشگاه"
                to={"/فروشگاه"}
              />
            </div>

            <div className="col-3">
              <RowItem
                imgSrc={moshavereh}
                imgalt="مشاوره"
                title="مشاوره"
                to={"https://mashverato.com"}
              />
            </div>

            <div className="col-3">
              <RowItem
                imgSrc={game}
                imgalt="سرگرمی"
                title="سرگرمی"
                to={"https://navar.live"}
              />
            </div>

            <div className="col-3">
              <RowItem
                imgSrc={amoozesh}
                imgalt="آموزش"
                title="آموزش"
                to={"https://academy.caronlineofficial.com"}
              />
            </div>

            <div className="col-3">
              <RowItem
                imgSrc={sarmaye}
                imgalt="سرمایه گذاری"
                title="سرمایه گذاری"
                to={"https://club.caronlineofficial.com"}
              />
            </div>

            <div className="col-3">
              <RowItem
                imgSrc={clinick}
                imgalt="کلینیک کسب و کار"
                title="کلینیک کسب و کار"
                to={"/کلینیک-کسب-و-کار"}
              />
            </div>

            <div className="col-3">
              <RowItem
                imgSrc={dideban}
                imgalt="کریپتو و ارز دیجیتال"
                title="دیده بان"
                to={"/دیده-بان"}
              />
            </div>

            <div className="col-3">
              <RowItem
                imgSrc={game}
                imgalt="اخبار"
                title="اخبار"
                to={"/اخبار"}
              />
            </div>
          </div>
        </section>

        {/* <div className="col-12   mt-3 row justify-content-around">
        {rendericon(
          <BsFlower1 size={40} color="#fff" className="mx-auto" />,
          "بانوان",
          "iconDarkBlue"
        )}
        {rendericon(
          <BiNews size={40} color="#fff" className="mx-auto" />,
          "اخبار",
          "iconGreen"
        )}
        {rendericon(
          <FaChartLine size={40} color="#fff" className="mx-auto" />,
          "سرمایه گذاری",
          "iconGray"
        )}
        {rendericon(
          <MdMoreHoriz size={40} color="#fff" className="mx-auto" />,
          "بیشتر",
          "iconGray"
        )}
      </div> */}

        <section className="w-100">
          <Swiper
            style={{ paddingBottom: 30 }}
            // slidesPerView={3}
            centeredSlides
            modules={[Pagination]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            pagination={true}
            className="new-car-slider-container mb-0"
          >
            <SwiperSlide
              className="nbt banner-slider-item"
              // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
            >
              <AdSliderItem
                imgSrc={require("../assets/images/Banners/01.jpg")}
                imgAlt="item.title"
              />
            </SwiperSlide>

            <SwiperSlide
              className="nbt banner-slider-item"
              // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
            >
              <AdSliderItem
                imgSrc={require("../assets/images/Banners/02.jpg")}
                imgAlt="item.title"
              />
            </SwiperSlide>

            <SwiperSlide
              className="nbt banner-slider-item"
              // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
            >
              <LazyLoadImage
                width={"100%"}
                effect="black-and-white"
                src={require("../assets/images/Banners/03.jpg")}
                alt={"item.title"}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src =
                    "https://mashinto.com/media/ads/defualt.png";
                  currentTarget.style = "max-height:180px";
                }}
              />
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="mt-5 w-100">
          <ListTitle title="به دلخواه خود تخفیف بگیرید" color="yellow" />

          <div className="col-12 p-0 w-100">
            <Swiper
              style={{ paddingBottom: 30 }}
              slidesPerView={4}
              spaceBetween={30}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 1.4,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2.2,
                },
              }}
              // className="new-car-slider-container"
            >
              <SwiperSlide key="1w">
                <BlogListItem
                  imgSrc={require("../assets/testImages/download.jpg")}
                  disc="متن تست برای این بخش"
                  date="تاریخ تستی"
                />
              </SwiperSlide>

              <SwiperSlide key="2w">
                <BlogListItem
                  imgSrc={require("../assets/testImages/download.jpg")}
                  disc="متن تست برای این بخش"
                  date="تاریخ تستی"
                />
              </SwiperSlide>

              <SwiperSlide key="3w">
                <BlogListItem
                  imgSrc={require("../assets/testImages/download.jpg")}
                  disc="متن تست برای این بخش"
                  date="تاریخ تستی"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="mt-3 w-100">
          <ListTitle title="انتخاب از بین بیمه های متنوع" color="pink" />

          <div className="col-12 p-0 w-100">
            <Swiper
              style={{ paddingBottom: 30 }}
              slidesPerView={4}
              modules={[Navigation]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide key={"1w"}>
                <BannerSliderItem
                  imgSrc={require("../assets/testImages/download-1.jpg")}
                  title="متن تست برای این بخش"
                />
              </SwiperSlide>

              <SwiperSlide key={"2w"}>
                <BannerSliderItem
                  imgSrc={require("../assets/testImages/download-1.jpg")}
                  title="متن تست برای این بخش"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="mt-3 w-100">
          <ListTitle
            title="انتخاب از بین بیمه های متنوع"
            color="orange"
            showMore={false}
          />

          <div className="w-100 p-0 mt-2" style={{ marginBottom: 30 }}>
            <div
              className="shadow-sm"
              style={{
                borderRadius: 10,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <LazyLoadImage
                width={"100%"}
                src={require("../assets/images/Banners/05.jpg")}
                height={"100%"}
                effect="black-and-white"
                placeholderSrc={defaultTest}
                className="full-img"
              />

              {/* <div
                className="w-100 blur"
                style={{
                  position: "absolute",
                  zIndex: 5,
                  bottom: 0,
                }}
              >
                <hr className="m-0" />
                <div className="d-flex flex-row align-items-center justify-content-between px-2 mb-2 mt-2 ">
                  <div className="d-flex flex-row align-items-center">
                    <h6 className="title-text mx-2 my-0">
                      متن تست برای این بخش
                    </h6>
                  </div>
                  <span
                    className="title-text tx-link text-mobile px-4 py-1"
                    style={{ border: "1.5px solid #3333", borderRadius: 15 }}
                  >
                    ادامه مطلب
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="mt-3 w-100">
          <ListTitle title="انتخاب از بین بیمه های متنوع" color="pink" />

          <div className="col-12 p-0 w-100">
            <Swiper
              style={{ paddingBottom: 30 }}
              slidesPerView={4}
              modules={[Navigation]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide key={"1w"}>
                <BannerSliderItem
                  imgSrc={require("../assets/testImages/download-1.jpg")}
                  title="متن تست برای این بخش"
                />
              </SwiperSlide>

              <SwiperSlide key={"2w"}>
                <BannerSliderItem
                  imgSrc={require("../assets/testImages/download-1.jpg")}
                  title="متن تست برای این بخش"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* <div className="col-12 mt-5 w-100">
          <h5 className="text-center">همکاران بزرگ ما</h5>

          <div className="col-12 row justify-content-center">
            <div className="col-2 p-2">
              <img
                src={require("../assets/testImages/logo-1.png")}
                className="icon-hamkari"
                alt=""
              />
            </div>
            <div className="col-2 p-2">
              <img
                src={require("../assets/testImages/logo-1.png")}
                className="icon-hamkari"
                alt=""
              />
            </div>
            <div className="col-2 p-2">
              <img
                src={require("../assets/testImages/logo-1.png")}
                className="icon-hamkari"
                alt=""
              />
            </div>
            <div className="col-2 p-2">
              <img
                src={require("../assets/testImages/logo-1.png")}
                className="icon-hamkari"
                alt=""
              />
            </div>
            <div className="col-2 p-2">
              <img
                src={require("../assets/testImages/logo-1.png")}
                className="icon-hamkari"
                alt=""
              />
            </div>
          </div>
        </div> */}

        <div className="col-12">
          <div className="row">
            <div className="col-3">
              <a
                referrerPolicy="origin"
                target="_blank"
                href="https://trustseal.enamad.ir/?id=250334&amp;Code=4xPomj4RIcWL9XDvGyUq"
              >
                <img
                  referrerPolicy="origin"
                  src="https://Trustseal.eNamad.ir/logo.aspx?id=250334&amp;Code=4xPomj4RIcWL9XDvGyUq"
                  alt=""
                  style={{ cursor: "pointer" }}
                  id="4xPomj4RIcWL9XDvGyUq"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="abslout-icon">
        <div className="col-3 row">
          <Link to={"https://mashinto.com"} target={"_self"}>
            <div
              onClick={() => {}}
              className={`col-auto mx-auto d-flex align-items-center `}
            >
              <img src={mashinto} className="w-100 img-logo" alt="" />
            </div>
            <h6 className="text-center mt-2 text-mobile p-0 tx-rm-link">
              ماشین تو
            </h6>
          </Link>
        </div>

        <div className="col-3 row">
          <Link to={"https://amlakto.com"} target={"_self"}>
            <div
              onClick={() => {}}
              className={`col-auto mx-auto  d-flex align-items-center `}
            >
              <img src={amlakto} className="w-100 img-logo" alt="" />
            </div>
            <h6 className="text-center mt-2 text-mobile p-0 tx-rm-link">
              املاک تو
            </h6>
          </Link>
        </div>

        <div className="col-3 row">
          <Link to={"https://mashverato.com"} target={"_self"}>
            <div
              onClick={() => {}}
              className={`col-auto mx-auto  d-flex align-items-center `}
            >
              <img src={moshaverto} className="w-100 img-logo" alt="" />
            </div>
            <h6 className="text-center mt-2 text-mobile p-0 tx-rm-link">
              مشورتو
            </h6>
          </Link>
        </div>

        <div className="col-3 row">
          <Link to={"https://mashinto.com/shop"} target={"_self"}>
            <div
              onClick={() => {}}
              className={`col-auto mx-auto  d-flex align-items-center `}
            >
              <img src={kalato} className="w-100 img-logo" alt="" />
            </div>
            <h6 className="text-center mt-2 text-mobile p-0 tx-rm-link">
              کالاتو
            </h6>
          </Link>
        </div>
      </div>
    </Loading>
  );
}
