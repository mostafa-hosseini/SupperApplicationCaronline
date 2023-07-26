import React from "react";
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

import amlakto from "../assets/images/Icons/logo/amlakto-01.png";
import kalato from "../assets/images/Icons/logo/kalato-01.png";
import mashinto from "../assets/images/Icons/logo/mashinto-01.svg";
import moshaverto from "../assets/images/Icons/logo/moshaverto-01.svg";

import RowItem from "../components/RowItem";
import BlogListItem from "../components/BlogListItem";
import ListTitle from "../components/ListTitle";
import BannerSliderItem from "../components/BannerSliderItem";
import Accordion from "../components/Accordion";

export function Home() {
  return (
    <>
      <div className="row justify-content-center main-page">
        <div className="col-12">
          <div className="row">
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
                to={"/املاک"}
              />
            </div>

            <div className="col-3">
              <RowItem
                imgSrc={froshgah}
                imgalt="فروشگاه"
                title="فروشگاه"
                to={"/املاک"}
              />
            </div>

            <div className="col-3">
              <RowItem
                imgSrc={moshavereh}
                imgalt="مشاوره"
                title="مشاوره"
                to={"/املاک"}
              />
            </div>

            <div className="col-3">
              <RowItem
                imgSrc={game}
                imgalt="سرگرمی"
                title="سرگرمی"
                to={"/املاک"}
              />
            </div>

            <div className="col-3">
              <RowItem
                imgSrc={amoozesh}
                imgalt="آموزش"
                title="آموزش"
                to={"/املاک"}
              />
            </div>

            <div className="col-3">
              <RowItem
                imgSrc={sarmaye}
                imgalt="سرمایه گذاری"
                title="سرمایه گذاری"
                to={"/املاک"}
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
          </div>
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

        <div className="col-lg-12 w-100">
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
              <LazyLoadImage
                effect="black-and-white"
                src={require("../assets/images/mashinto-mobile-02.04.jpg")}
                alt={"item.title"}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src =
                    "https://mashinto.com/media/ads/defualt.png";
                  currentTarget.style = "max-height:180px";
                }}
              />
            </SwiperSlide>

            <SwiperSlide
              className="nbt banner-slider-item"
              // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
            >
              <LazyLoadImage
                width={"100%"}
                effect="black-and-white"
                src={require("../assets/images/mashinto-sales-02.04.jpg")}
                alt={"item.title"}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src =
                    "https://mashinto.com/media/ads/defualt.png";
                  currentTarget.style = "max-height:180px";
                }}
              />
            </SwiperSlide>

            <SwiperSlide
              className="nbt banner-slider-item"
              // onClick={() => history.push(`/shoplist?categoryId=${item.id}`)}
            >
              <LazyLoadImage
                width={"100%"}
                effect="black-and-white"
                src={require("../assets/images/mashinto-mobile-02.04.jpg")}
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
        </div>

        <div className="col-12 mt-5 w-100">
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
        </div>

        <div className="col-12 mt-3 w-100">
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
        </div>

        <div className="col-12 mt-3 w-100">
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
                src={require("../assets/testImages/img3.jpg")}
                height={"100%"}
                effect="black-and-white"
                style={{ position: "relative", minHeight: 150, maxHeight: 270 }}
              />

              <div
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
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 mt-3 w-100">
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
        </div>

        <div className="col-12 mt-5 w-100">
          <ListTitle
            title="پاسخ به تمامی سوالات شما"
            color="green"
            showMore={false}
          />

          {/* <div className="w-100 p-0 mt-2">
            <Accordion defaultActiveKey="">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaPlus size={30} style={{ marginLeft: 15 }} />
                  چرا به بیمه شخص ثالث نیاز داریم؟
                </Accordion.Header>
                <Accordion.Body>
                  لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی
                  آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته
                  می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی
                  برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش
                  گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی
                  نوع و اندازه فونت و ظاهر متن ب{" "}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <FaPlus size={30} style={{ marginLeft: 15 }} />
                  شرایط بیمه عمر چیست؟
                </Accordion.Header>
                <Accordion.Body>
                  لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی
                  آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته
                  می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی
                  برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش
                  گرفته شده استفاده می نماید، تا از نظر گرافیکی نشان
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div> */}
          <div className="w-100 p-0 mt-2">
            <Accordion
              data={[
                {
                  id:"item-1",
                  title: " چرا به بیمه شخص ثالث نیاز داریم؟",
                  desc: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن ب",
                },
                {
                  id:"item-2",
                  title: " چرا به بیمه شخص ثالث نیاز داریم؟",
                  desc: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن ب",
                },
                {
                  id:"item-3",
                  title: " چرا به بیمه شخص ثالث نیاز داریم؟",
                  desc: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن ب",
                },
              ]}
            />
          </div>
        </div>

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
                referrerpolicy="origin"
                target="_blank"
                href="https://trustseal.enamad.ir/?id=250334&amp;Code=4xPomj4RIcWL9XDvGyUq"
              >
                <img
                  referrerpolicy="origin"
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
          <div
            onClick={() => {}}
            className={`col-auto mx-auto d-flex align-items-center `}
          >
            <img src={mashinto} className="w-100 img-logo" alt="" />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">ماشین تو</h6>
        </div>

        <div className="col-3 row">
          <div
            onClick={() => {}}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img src={amlakto} className="w-100 img-logo" alt="" />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">املاک تو</h6>
        </div>
        <div className="col-3 row">
          <div
            onClick={() => {}}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img src={moshaverto} className="w-100 img-logo" alt="" />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">مشورتو</h6>
        </div>
        <div className="col-3 row">
          <div
            onClick={() => {}}
            className={`col-auto mx-auto  d-flex align-items-center `}
          >
            <img src={kalato} className="w-100 img-logo" alt="" />
          </div>
          <h6 className="text-center mt-2 text-mobile p-0">کالاتو</h6>
        </div>
      </div>
    </>
  );
}
