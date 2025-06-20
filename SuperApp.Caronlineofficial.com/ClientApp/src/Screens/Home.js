/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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
import { Autoplay, Navigation, Pagination } from "swiper";

import amoozesh from "../assets/images/Icons/amoozesh-01.svg";
import bimeh from "../assets/images/Icons/bimeh-01.png";
import cars from "../assets/images/Icons/cars-01.svg";
import clinic from "../assets/images/Icons/clinic--01.png";
import dideban from "../assets/images/Icons/dideban-01.svg";
import froshgah from "../assets/images/Icons/froshgah-01.svg";
import game from "../assets/images/Icons/game-01.svg";
import house from "../assets/images/Icons/house-01.svg";
import moshavereh from "../assets/images/Icons/moshavereh-01.svg";
import sarmaye from "../assets/images/Icons/sarmaye-01.svg";

import amlakto from "../assets/images/Icons/logo/amlakto-01.png";
import clinicto from "../assets/images/Icons/logo/clinic-01.png";
import mashinto from "../assets/images/Icons/logo/mashinto-01.svg";
import moshaverto from "../assets/images/Icons/logo/moshaverto-01.svg";

import { Link, useNavigate } from "react-router-dom";
import defaultTest from "../assets/testImages/default-test.jpg";

import http from '../api/index';
import CarouselPrice from "../components/CarouselPrice";
import ListTitle from "../components/ListTitle";
import Loading from "../components/Loading";
import RowItem from "../components/RowItem";
import UseAuth from '../hooks/UseAuth';
import NewsPaperCarousel from "../components/NewsPaperCarousel";
export function Home() {
  const navigate = useNavigate();
  const api = http();
  const isAuth = UseAuth();
  let currentStoryId = localStorage.getItem("story");
  const [storyId, setstoryId] = useState(0)
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    api.CheckStory(({ data }) => {
      setstoryId(data)
      setLoading(false);
    });
  }, []);




  if (loading) {

    return (
      <Loading isLoading={loading}>
      </Loading>
    );
  }
  return <div className="w-100">
    <div className="main-page">
      <section className="w-100">
        <div className="row home-icons">

          <div className="col-3 p-1">
            <RowItem
              imgSrc={cars}
              imgalt="خودرو"
              title="خودرو"
              to={"/خودرو"}
            />
          </div>

          <div className="col-3 p-1">
            <RowItem
              imgSrc={house}
              imgalt="املاک"
              title="املاک"
              to={"/املاک"}

            />
          </div>
          <div className="col-3 p-1">
            <RowItem
              imgSrc={moshavereh}
              imgalt="مشورتو"
              title="مشورتو"
              to={"https://mashverato.com"}
            />
          </div>
          <div className="col-3 p-1 ">
            <div className="row  align-items-center flex-column row-item">
              <div className={`w-75  ${currentStoryId != null && currentStoryId < storyId.lastId && storyId.hasActive ? "profile-pic" : "profile-pic-noborder"}`} onClick={() => navigate("/story")}  >
                <img src={require("../assets/images/Logo.png")} alt="" />
              </div>
              <h6 className="text-center mt-2 text-mobile p-0">استوری</h6>
            </div>
          </div>
          <div className="col-3 p-1">
            <RowItem
              imgSrc={dideban}
              imgalt="کریپتو و ارز دیجیتال"
              title="قیمت لحظه ای"
              to={"/دیده-بان"}
            />
          </div>
          <div className="col-3 p-1">
            <RowItem
              imgSrc={game}
              imgalt="سرگرمی"
              title="سرگرمی"
              to={"https://navar.live"}

            />
          </div>
          <div className="col-3 p-1">
            <RowItem
              imgSrc={sarmaye}
              imgalt="کلاب"
              title="کلاب"
              to={"https://club.caronlineofficial.com"}
            />
          </div>
          <div className="col-3 p-1">
            <RowItem
              imgSrc={amoozesh}
              imgalt="آکادمی"
              title="آکادمی"
              to={"https://academy.caronlineofficial.com"}
            />
          </div>
          <div className="col-3 p-1">
            <RowItem
              imgSrc={froshgah}
              imgalt="فروشگاه"
              title="فروشگاه"
              to={"/فروشگاه"}
            />
          </div>
          <div className="col-3 p-1">
            <RowItem
              imgSrc={amoozesh}
              imgalt="صنعت"
              title="صنعت"
              to={"/توسعه-کسب-و-کار"}
              disabled
            />
          </div>
          <div className="col-3 p-1">
            <RowItem
              imgSrc={bimeh}
              imgalt="بیمه"
              title="بیمه"
              to={"https://bimehato.com/"}
              disabled
            />
          </div>
          {/* <div className="col-3 p-1">
              <RowItem
                imgSrc={game}
                imgalt="اخبار"
                title="اخبار"
                to={"/اخبار"}
              />
            </div> */}
          <div className="col-3 p-1">
            <RowItem
              imgSrc={clinic}
              imgalt="کلینیک"
              title="کلینیک"
              to={"/کلینیک"}
              disabled
            />
          </div>

        </div>
      </section>
      {/* <section className="w-100 mt-4 mb-3">
        <CarouselPrice />
      </section> */}
      <section className="mt-5 w-100">
        <ListTitle
          title="به خانواده بزرگ کارآنلاین بپیوندید"
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
            onClick={() => isAuth ? navigate("/Dashboard") : navigate("/Register")}
          >
            <LazyLoadImage
              width={"100%"}
              src={require("../assets/images/Banners/05.jpg")}
              height={"100%"}
              effect="black-and-white"
              placeholderSrc={defaultTest}
              className="full-img"
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

      <NewsPaperCarousel />

      <section className="w-100">
        <Swiper
          style={{ paddingBottom: 30 }}
          // slidesPerView={3}
          centeredSlides
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay, Navigation]}
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
            onClick={() => { window.open("https://mashverato.com") }}
          >

            <img src={require("../assets/images/Banners/07.jpg")} alt="" className="w-100" />
          </SwiperSlide>
          <SwiperSlide
            className="nbt banner-slider-item"
            // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
            onClick={() => { window.open("https://mashinto.com") }}

          >

            <img src={require("../assets/images/Banners/08.jpg")} alt="" className="w-100" />
          </SwiperSlide>
          <SwiperSlide
            className="nbt banner-slider-item"
            // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
            onClick={() => { window.open("https://amlakto.com") }}
          >

            <img src={require("../assets/images/Banners/09.jpg")} alt="" className="w-100" />
          </SwiperSlide>
          <SwiperSlide
            className="nbt banner-slider-item"
            // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
            onClick={() => { window.open("https://club.caronlineofficial.com") }}
          >

            <img src={require("../assets/images/Banners/10.jpg")} alt="" className="w-100" />
          </SwiperSlide>
          <SwiperSlide
            className="nbt banner-slider-item"
            // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
            onClick={() => { window.open("https://academy.caronlineofficial.com") }}
          >

            <img src={require("../assets/images/Banners/11.jpg")} alt="" className="w-100" />
          </SwiperSlide>
          <SwiperSlide
            className="nbt banner-slider-item"
            // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
            onClick={() => { window.open("https://navar.live") }}

          >

            <img src={require("../assets/images/Banners/12.jpg")} alt="" className="w-100" />
          </SwiperSlide>
          <SwiperSlide
            className="nbt banner-slider-item"
            onClick={() => navigate(`/دیده-بان`)}
          >

            <img src={require("../assets/images/Banners/13.jpg")} alt="" className="w-100" />
          </SwiperSlide>


        </Swiper>
      </section>

      {/* <section className="mt-5 w-100">
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
        </section> */}

      {/* <section className="mt-3 w-100">
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
        </section> */}

      {/* <section className="w-100">
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

              <img src={require("../assets/images/Banners/18.jpg")} alt="" className="w-100" />
            </SwiperSlide>
            <SwiperSlide
              className="nbt banner-slider-item"
            // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
            >

              <img src={require("../assets/images/Banners/14.jpg")} alt="" className="w-100" />
            </SwiperSlide>
            <SwiperSlide
              className="nbt banner-slider-item"
            // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
            >

              <img src={require("../assets/images/Banners/17.jpg")} alt="" className="w-100" />
            </SwiperSlide>
            <SwiperSlide
              className="nbt banner-slider-item"
            // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
            >

              <img src={require("../assets/images/Banners/15.jpg")} alt="" className="w-100" />
            </SwiperSlide>
            <SwiperSlide
              className="nbt banner-slider-item"
            // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
            >

              <img src={require("../assets/images/Banners/16.jpg")} alt="" className="w-100" />
            </SwiperSlide>





          </Swiper>
        </section> */}




      {/* <section className="mt-3 w-100">
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
        </section> */}

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
          <div className="col-3 p-1">
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
            onClick={() => { }}
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
            onClick={() => { }}
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
            onClick={() => { }}
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
        <Link to={"https://cliniceto.com/"} target={"_self"}>
          <div
            onClick={() => { }}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img src={clinicto} className="w-100 img-logo" alt="" />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0 tx-rm-link">
            کلینیک تو
          </h6>
        </Link>
      </div>
    </div>
  </div>
}
