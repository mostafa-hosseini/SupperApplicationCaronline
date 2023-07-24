import React from "react";
import {
  FaCircle,
  FaPlus
} from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/styles/custom.css";
// import required modules
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper";



import amoozesh from '../assets/images/Icons/amoozesh-01.svg';
import bimeh from '../assets/images/Icons/bimeh-01.png';
import cars from '../assets/images/Icons/cars-01.svg';
import froshgah from '../assets/images/Icons/froshgah-01.svg';
import game from '../assets/images/Icons/game-01.svg';
import house from '../assets/images/Icons/house-01.svg';
import moshavereh from '../assets/images/Icons/moshavereh-01.svg';
import sarmaye from '../assets/images/Icons/sarmaye-01.svg';
import clinick from '../assets/images/Icons/clinick-01.svg';


import amlakto from '../assets/images/Icons/logo/amlakto-01.png';
import kalato from '../assets/images/Icons/logo/kalato-01.png';
import mashinto from '../assets/images/Icons/logo/mashinto-01.svg';
import moshaverto from '../assets/images/Icons/logo/moshaverto-01.svg';



export function Home() {
  const navigate = useNavigate();
  function rendericon(icon, text, _className, onClick) {
    return (
      <div className="col-3 row">
        <div
          onClick={() => onClick()}
          className={`col-auto mx-auto icon-home d-flex align-items-center ${_className}`}
        >
          {icon}
        </div>
        <h6 className="text-center mt-2 text-mobile p-0">{text}</h6>
      </div>
    );
  }
  return (
    <div>
      <div className="col-12   mt-3 row justify-content-around">
        <div className="col-3 row">
          <div
            onClick={() => navigate("/خودرو")}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img
              src={cars}
              className="w-100 img-logo"
              alt=""
            />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">خودرو</h6>
        </div>
        <div className="col-3 row">
          <div
            onClick={() => navigate("/املاک")}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img
              src={house}
              className="w-100 img-logo"
              alt=""
            />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">املاک</h6>
        </div>
        <div className="col-3 row">
          <div
            onClick={() => navigate("/املاک")}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img
              src={bimeh}
              className="w-100 img-logo"
              alt=""
            />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">بیمه</h6>
        </div>
        <div className="col-3 row">
          <div
            onClick={() => navigate("/املاک")}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img
              src={froshgah}
              className="w-100 img-logo"
              alt=""
            />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">فروشگاه</h6>
        </div>

      </div>
      <div className="col-12   mt-3 row justify-content-around">
        <div className="col-3 row">
          <div
            onClick={() => navigate("/املاک")}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img
              src={moshavereh}
              className="w-100 img-logo"
              alt=""
            />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">مشاوره</h6>
        </div>
        <div className="col-3 row">
          <div
            onClick={() => navigate("/املاک")}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img
              src={game}
              className="w-100 img-logo"
              alt=""
            />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">
            سرگرمی
          </h6>
        </div>

        <div className="col-3 row">
          <div
            onClick={() => navigate("/املاک")}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img
              src={amoozesh}
              className="w-100 img-logo"
              alt=""
            />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">
            آموزش
          </h6>
        </div>
        <div className="col-3 row">
          <div
            onClick={() => navigate("/املاک")}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img
              src={sarmaye}
              className="w-100 img-logo"
              alt=""
            />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">
            سرمایه گذاری
          </h6>
        </div>

      </div>
      <div className="col-12   mt-3 row justify-content-around">
        <div className="col-3 row">
          <div
            onClick={() => navigate("/کلینیک-کسب-و-کار")}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img
              src={clinick}
              className="w-100 img-logo"
              alt=""
            />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">کلینیک کسب و کار</h6>
        </div>
        <div className="col-3 row"></div>
        <div className="col-3 row"></div>
        <div className="col-3 row"></div>

      </div>

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

      <div className="col-lg-12 mt-3 w-100">
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
            className="nbt shadow"
            style={{ overflow: "hidden", borderRadius: 15 }}

          // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
          >
            <LazyLoadImage
              height={220}
              width={"100%"}
              effect="black-and-white"
              src={require("../assets/images/mashinto-mobile-02.04.jpg")}
              alt={"item.title"}
              style={{ maxHeight: 220, width: "100%" }}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://mashinto.com/media/ads/defualt.png";
                currentTarget.style = "max-height:180px";
              }}
            />
          </SwiperSlide>
          <SwiperSlide
            className="nbt shadow"
            style={{ overflow: "hidden", borderRadius: 15 }}

          // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
          >
            <LazyLoadImage
              height={220}
              width={"100%"}
              effect="black-and-white"
              src={require("../assets/images/mashinto-sales-02.04.jpg")}
              alt={"item.title"}
              style={{ maxHeight: 220, width: "100%" }}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://mashinto.com/media/ads/defualt.png";
                currentTarget.style = "max-height:180px";
              }}
            />
          </SwiperSlide>
          <SwiperSlide
            className="nbt shadow"
            style={{ overflow: "hidden", borderRadius: 15 }}

          // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
          >
            <LazyLoadImage
              height={220}
              width={"100%"}
              effect="black-and-white"
              src={require("../assets/images/mashinto-mobile-02.04.jpg")}
              alt={"item.title"}
              style={{ maxHeight: 220, width: "100%" }}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://mashinto.com/media/ads/defualt.png";
                currentTarget.style = "max-height:180px";
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="col-12 mt-3 w-100">
        <div className="w-100 p-0 mx-auto row justify-content-between">
          <div className="col-8 d-flex align-items-center">
            <FaCircle
              color="#F7B801"
              style={{ marginLeft: 5 }}
              size={15}
              className="mb-2"
            />
            <h5>به دلخواه خود تخفیف بگیرید</h5>
          </div>
          <div className="col-auto">
            <h6 className="tx-primary">مشاهده همه</h6>
          </div>
        </div>

        <div className="col-12  p-0 w-100">
          <Swiper
            style={{ paddingBottom: 30 }}
            slidesPerView={4}
            spaceBetween={30}
            modules={[Navigation]}
            // navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1.3,
                spaceBetween: 10,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1.4,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2.2,
                spaceBetween: 40,
              },
            }}
          // className="new-car-slider-container"
          >
            <SwiperSlide
              className="shadow"
              style={{ borderRadius: 10, overflow: "hidden" }}
              key={"1w"}
            >
              <LazyLoadImage
                width={"100%"}
                src={require("../assets/testImages/download.jpg")}
                effect="black-and-white"
                style={{ position: "relative", maxHeight: 220 }}
              />

              <div
                className="w-100 blur"
                style={{
                  position: "absolute",
                  zIndex: 9999,
                  bottom: 0,
                }}
              >
                <h6 className="title-text  my-1 mx-2 mb-3">
                  متن تست برای این بخش
                </h6>
                <hr className="m-0" />
                <div className="d-flex flex-row align-items-center justify-content-between px-2 mb-2 mt-2 ">
                  <div className="d-flex flex-row align-items-center ">
                    <span className="new-car-text fw-bold text-mobile">
                      تاریخ تستی{" "}
                    </span>
                  </div>
                  <span className="title-text tx-link text-mobile">
                    ادامه مطلب
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="shadow"
              style={{ borderRadius: 10, overflow: "hidden" }}
              key={"2w"}
            >
              <LazyLoadImage
                width={"100%"}
                src={require("../assets/testImages/download.jpg")}
                effect="black-and-white"
                style={{ position: "relative", maxHeight: 220 }}
              />

              <div
                className="w-100 blur"
                style={{
                  position: "absolute",
                  zIndex: 9999,
                  bottom: 0,
                }}
              >
                <h6 className="title-text  my-1 mx-2 mb-3">
                  متن تست برای این بخش
                </h6>
                <hr className="m-0" />
                <div className="d-flex flex-row align-items-center justify-content-between px-2 mb-2 mt-2 ">
                  <div className="d-flex flex-row align-items-center ">
                    <span className="new-car-text fw-bold text-mobile">
                      تاریخ تستی{" "}
                    </span>
                  </div>
                  <span className="title-text tx-link text-mobile">
                    ادامه مطلب
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="shadow"
              style={{ borderRadius: 10, overflow: "hidden" }}
              key={"3w"}
            >
              <LazyLoadImage
                width={"100%"}
                src={require("../assets/testImages/download.jpg")}
                effect="black-and-white"
                style={{ position: "relative", maxHeight: 220 }}
              />

              <div
                className="w-100 blur"
                style={{
                  position: "absolute",
                  zIndex: 9999,
                  bottom: 0,
                }}
              >
                <h6 className="title-text  my-1 mx-2 mb-3">
                  متن تست برای این بخش
                </h6>
                <hr className="m-0" />
                <div className="d-flex flex-row align-items-center justify-content-between px-2 mb-2 mt-2 ">
                  <div className="d-flex flex-row align-items-center ">
                    <span className="new-car-text fw-bold text-mobile">
                      تاریخ تستی{" "}
                    </span>
                  </div>
                  <span className="title-text tx-link text-mobile">
                    ادامه مطلب
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="col-12 mt-3 w-100">
        <div className="w-100 p-0 mx-auto row justify-content-between">
          <div className="col-8 d-flex align-items-center">
            <FaCircle
              color=" rgb(255 27 175)"
              style={{ marginLeft: 5 }}
              size={15}
              className="mb-2"
            />
            <h5>انتخاب از بین بیمه های متنوع</h5>
          </div>
          <div className="col-auto">
            <h6 className="tx-primary">مشاهده همه</h6>
          </div>
        </div>

        <div className="col-12  p-0 w-100">
          <Swiper
            style={{ paddingBottom: 30 }}
            slidesPerView={4}
            spaceBetween={30}
            modules={[Navigation]}
            // navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1.3,
                spaceBetween: 10,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2.2,
                spaceBetween: 40,
              },
            }}
          // className="new-car-slider-container"
          >
            <SwiperSlide
              className="shadow"
              style={{ borderRadius: 10, overflow: "hidden" }}
              key={"1w"}
            >
              <LazyLoadImage
                width={"100%"}
                src={require("../assets/testImages/download-1.jpg")}
                height={"100%"}
                effect="black-and-white"
                style={{ position: "relative", minHeight: 150 }}
              />

              <div
                className="w-100 blur"
                style={{
                  position: "absolute",
                  zIndex: 9999,
                  bottom: 0,
                }}
              >
                <hr className="m-0" />
                <div className="d-flex flex-row align-items-center justify-content-between px-2 mb-2 mt-2 ">
                  <div className="d-flex flex-row align-items-center ">
                    <h6 className="title-text  my-1 mx-2 mb-3">
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
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="shadow"
              style={{ borderRadius: 10, overflow: "hidden" }}
              key={"1w"}
            >
              <LazyLoadImage
                width={"100%"}
                src={require("../assets/testImages/download-1.jpg")}
                height={"100%"}
                effect="black-and-white"
                style={{ position: "relative", minHeight: 150 }}
              />

              <div
                className="w-100 blur"
                style={{
                  position: "absolute",
                  zIndex: 9999,
                  bottom: 0,
                }}
              >
                <hr className="m-0" />
                <div className="d-flex flex-row align-items-center justify-content-between px-2 mb-2 mt-2 ">
                  <div className="d-flex flex-row align-items-center ">
                    <h6 className="title-text  my-1 mx-2 mb-3">
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
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="col-12 mt-3 w-100">
        <div className="w-100 p-0 mx-auto row justify-content-between">
          <div className="col-8 d-flex align-items-center">
            <FaCircle
              color=" rgb(255, 88, 88)"
              style={{ marginLeft: 5 }}
              size={15}
              className="mb-2"
            />
            <h5>انتخاب از بین بیمه های متنوع</h5>
          </div>
        </div>
        <div className="w-100 p-0 mt-2">
          <div
            className="shadow"
            style={{
              borderRadius: 10,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <LazyLoadImage
              width={"100%"}
              src={require("../assets/testImages/img3.jpg")}
              height={"100%"}
              effect="black-and-white"
              style={{ position: "relative", minHeight: 150 }}
            />

            <div
              className="w-100 blur"
              style={{
                position: "absolute",
                zIndex: 9999,
                bottom: 0,
              }}
            >
              <hr className="m-0" />
              <div className="d-flex flex-row align-items-center justify-content-between px-2 mb-2 mt-2 ">
                <div className="d-flex flex-row align-items-center ">
                  <h6 className="title-text  my-1 mx-2 mb-3">
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
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 mt-3 w-100">
        <div className="w-100 p-0 mx-auto row justify-content-between">
          <div className="col-8 d-flex align-items-center">
            <FaCircle
              color=" rgb(255 27 175)"
              style={{ marginLeft: 5 }}
              size={15}
              className="mb-2"
            />
            <h5>انتخاب از بین بیمه های متنوع</h5>
          </div>
          <div className="col-auto">
            <h6 className="tx-primary">مشاهده همه</h6>
          </div>
        </div>

        <div className="col-12  p-0 w-100">
          <Swiper
            style={{ paddingBottom: 30 }}
            slidesPerView={4}
            spaceBetween={30}
            modules={[Navigation]}
            // navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1.3,
                spaceBetween: 10,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2.2,
                spaceBetween: 40,
              },
            }}
          // className="new-car-slider-container"
          >
            <SwiperSlide
              className="shadow"
              style={{ borderRadius: 10, overflow: "hidden" }}
              key={"1w"}
            >
              <LazyLoadImage
                width={"100%"}
                src={require("../assets/testImages/download-1.jpg")}
                height={"100%"}
                effect="black-and-white"
                style={{ position: "relative", minHeight: 150 }}
              />

              <div
                className="w-100 blur"
                style={{
                  position: "absolute",
                  zIndex: 9999,
                  bottom: 0,
                }}
              >
                <hr className="m-0" />
                <div className="d-flex flex-row align-items-center justify-content-between px-2 mb-2 mt-2 ">
                  <div className="d-flex flex-row align-items-center ">
                    <h6 className="title-text  my-1 mx-2 mb-3">
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
              </div>
            </SwiperSlide>
            <SwiperSlide
              className="shadow"
              style={{ borderRadius: 10, overflow: "hidden" }}
              key={"1w"}
            >
              <LazyLoadImage
                width={"100%"}
                src={require("../assets/testImages/download-1.jpg")}
                height={"100%"}
                effect="black-and-white"
                style={{ position: "relative", minHeight: 150 }}
              />

              <div
                className="w-100 blur"
                style={{
                  position: "absolute",
                  zIndex: 9999,
                  bottom: 0,
                }}
              >
                <hr className="m-0" />
                <div className="d-flex flex-row align-items-center justify-content-between px-2 mb-2 mt-2 ">
                  <div className="d-flex flex-row align-items-center ">
                    <h6 className="title-text  my-1 mx-2 mb-3">
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
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="col-12 mt-5 w-100">
        <div className="w-100 p-0 mx-auto row justify-content-between">
          <div className="col-8 d-flex align-items-center">
            <FaCircle
              color=" rgb(167, 329, 88)"
              style={{ marginLeft: 5 }}
              size={15}
              className="mb-2"
            />
            <h5>پاسخ به تمامی سوالات شما</h5>
          </div>
        </div>

        <div className="w-100 p-0 mt-2">
          <Accordion defaultActiveKey="">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <FaPlus size={30} style={{ marginLeft: 15 }} />
                چرا به بیمه شخص ثالث نیاز داریم؟
              </Accordion.Header>
              <Accordion.Body>
                لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی
                و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن
                صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده
                می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و
                ظاهر متن ب{" "}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <FaPlus size={30} style={{ marginLeft: 15 }} />
                شرایط بیمه عمر چیست؟
              </Accordion.Header>
              <Accordion.Body>
                لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی
                و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن
                صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده
                می نماید، تا از نظر گرافیکی نشان
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      <div className="col-12 mt-5 w-100">
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
      </div>

      <div className="col-12 d-flex abslout-icon">
        <div className="col-3 row">
          <div
            onClick={() => { }}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img
              src={mashinto}
              className="w-100 img-logo"
              alt=""
            />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">ماشین تو</h6>
        </div>

        <div className="col-3 row">
          <div
            onClick={() => { }}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img
              src={amlakto}
              className="w-100 img-logo"
              alt=""
            />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">املاک تو</h6>
        </div>
        <div className="col-3 row">
          <div
            onClick={() => { }}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img
              src={moshaverto}
              className="w-100 img-logo"
              alt=""
            />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">مشورتو</h6>
        </div>
        <div className="col-3 row">
          <div
            onClick={() => { }}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img
              src={kalato}
              className="w-100 img-logo"
              alt=""
            />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">کالاتو</h6>
        </div>



      </div>

      <div className="col-12">
        <div className="row">
          <div className="col-3">
            <a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/?id=250334&amp;Code=4xPomj4RIcWL9XDvGyUq"><img referrerpolicy="origin" src="https://Trustseal.eNamad.ir/logo.aspx?id=250334&amp;Code=4xPomj4RIcWL9XDvGyUq" alt="" style={{cursor:"pointer"}} id="4xPomj4RIcWL9XDvGyUq"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}
