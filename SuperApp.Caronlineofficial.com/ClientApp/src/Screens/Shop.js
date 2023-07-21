import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { FaUserMd } from "react-icons/fa";
import { CiVirus } from "react-icons/ci";
import { MdMoreHoriz } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";

export default function Shop() {
  function rendericon(icon, text, _className) {
    return (
      <div className="col-4 row">
        <div
          className={`col-auto mx-auto icon-shop d-flex align-items-center ${_className}`}
        >
          {icon}
        </div>
        {/* <h6 className="text-center mt-2 text-mobile p-0">{text}</h6> */}
      </div>
    );
  }
  return (
    <div className="row">
      <div className="col-12   mt-3 row justify-content-around">
        <Swiper
          // slidesPerView={3}

          modules={[Navigation]}
          // navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            720: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            960: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 4.5,
              spaceBetween: 25,
            },
          }}
          className="new-car-slider-container mb-0"
        >
          <SwiperSlide
            className="nbt shadow"
            style={{ overflow: "hidden", borderRadius: 15 }}
            key={"key"}
          >
            <LazyLoadImage
              height={180}
              width={"100%"}
              effect="black-and-white"
              src={`https://mashinto.com/media/ShopCategory/638078397077866630banner7.jpg`}
              alt={""}
              style={{ maxHeight: 180, width: "100%" }}
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
            key={"key"}
          >
            <LazyLoadImage
              height={180}
              width={"100%"}
              effect="black-and-white"
              src={`https://mashinto.com/media/ShopCategory/638078397376128699banner8.jpg`}
              alt={""}
              style={{ maxHeight: 180, width: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide
            className="nbt shadow"
            style={{ overflow: "hidden", borderRadius: 15 }}
            key={"key"}
          >
            <LazyLoadImage
              height={180}
              width={"100%"}
              effect="black-and-white"
              src={`https://mashinto.com/media/ShopCategory/638078397212681437banner5.jpg`}
              alt={""}
              style={{ maxHeight: 180, width: "100%" }}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="col-10 mx-auto">
        <input
          type="text"
          className="form-control p-3"
          style={{ borderRadius: 80 }}
          placeholder="جستجو در فروشگاه  کارآنلاین"
        />
      </div>

      <div className="col-12   mt-3 row justify-content-around">
        {rendericon(
          <FaUserMd size={40} color="#fff" className="mx-auto" />,
          "خودرو",
          "iconKahoee"
        )}
        {rendericon(
          <CiVirus size={40} color="#fff" className="mx-auto" />,
          "املاک ",
          "iconVirus"
        )}
        {rendericon(
          <MdMoreHoriz size={40} color="#fff" className="mx-auto" />,
          "بیمه",
          "iconGray"
        )}
      </div>
      <div className="col-12   mt-3 row justify-content-around">
        {rendericon(
          <FaUserMd size={40} color="#fff" className="mx-auto" />,
          "خودرو",
          "iconKahoee"
        )}
        {rendericon(
          <CiVirus size={40} color="#fff" className="mx-auto" />,
          "املاک ",
          "iconVirus"
        )}
        {rendericon(
          <MdMoreHoriz size={40} color="#fff" className="mx-auto" />,
          "بیمه",
          "iconGray"
        )}
      </div>

      <div className="col-12 p-1   mt-5 row justify-content-around">
        <div className="w-100 p-0 row justify-content-between">
          <div className="col-auto">
            <h6>عنوان این دسته بندی</h6>
          </div>
          <div className="col-3 tx-danger">
            <h6>نمایش همه</h6>
          </div>
        </div>
        <Swiper
          // slidesPerView={3}

          modules={[Navigation]}
          // navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2.7,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4.2,
              spaceBetween: 25,
            },
            720: {
              slidesPerView: 5.2,
              spaceBetween: 25,
            },
            960: {
              slidesPerView: 6.2,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 7.2,
              spaceBetween: 25,
            },
          }}
          className="new-car-slider-container mb-0"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide
              className="bg-white shadow"
              style={{
                overflow: "hidden",
                borderRadius: 15,
                border: "1px solid #e2e2e2",
              }}
              key={"key"}
            >
              <div
                className="w-100 p-3 "
                style={{ borderRadius: 13, overflow: "hidden" }}
              >
                <img
                  className="w-100"
                  src="https://baparto.ir/wp-content/uploads/2021/05/Asus-tuf-fx506gt-1.jpg"
                  alt=""
                />
              </div>
              <div className="w-100 p-1">
                <h5 className="text-center">اسم محصول</h5>
                <p className="">
                  لپ تاپ ایسوس FX506LH | 8GB RAM | 512GB SSD ...
                </p>
              </div>
              <div className="w-100 p-3 mt-3">
                <h6 className="text-right">۳۲٫۱۶۱٫۰۰۰ تومان</h6>
              </div>

              <div className="w-100 mt-1">
                <h6 className="text-center">
                  خرید محصول
                  <BsCart2 color="green" size={30} />
                </h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-100"></div>

      <div className="col-6 p-1">
        <div
          className="w-100"
          style={{ height: "920", borderRadius: 13, backgroundColor: "gray" }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className="col-6 p-1">
        <div
          className="w-100"
          style={{ height: "920", borderRadius: 13, backgroundColor: "pink" }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className="col-12 p-1   mt-5 row justify-content-around">
        <div className="w-100 p-0 row justify-content-between">
          <div className="col-auto">
            <h6>عنوان این دسته بندی</h6>
          </div>
          <div className="col-3 tx-danger">
            <h6>نمایش همه</h6>
          </div>
        </div>
        <Swiper
          // slidesPerView={3}

          modules={[Navigation]}
          // navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2.7,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4.2,
              spaceBetween: 25,
            },
            720: {
              slidesPerView: 5.2,
              spaceBetween: 25,
            },
            960: {
              slidesPerView: 6.2,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 7.2,
              spaceBetween: 25,
            },
          }}
          className="new-car-slider-container mb-0"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide
              className="bg-white shadow"
              style={{
                overflow: "hidden",
                borderRadius: 15,
                border: "1px solid #e2e2e2",
              }}
              key={"key"}
            >
              <div
                className="w-100 p-3 "
                style={{ borderRadius: 13, overflow: "hidden" }}
              >
                <img
                  className="w-100"
                  src="https://baparto.ir/wp-content/uploads/2021/05/Asus-tuf-fx506gt-1.jpg"
                  alt=""
                />
              </div>
              <div className="w-100 p-1">
                <h5 className="text-center">اسم محصول</h5>
                <p className="">
                  لپ تاپ ایسوس FX506LH | 8GB RAM | 512GB SSD ...
                </p>
              </div>
              <div className="w-100 p-3 mt-3">
                <h6 className="text-right">۳۲٫۱۶۱٫۰۰۰ تومان</h6>
              </div>

              <div className="w-100 mt-1">
                <h6 className="text-center">
                  خرید محصول
                  <BsCart2 color="green" size={30} />
                </h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="col-6 p-1">
        <div
          className="w-100"
          style={{ height: "920", borderRadius: 13, backgroundColor: "gray" }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className="col-6 p-1">
        <div
          className="w-100"
          style={{ height: "920", borderRadius: 13, backgroundColor: "pink" }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div
          className="w-100 mt-2"
          style={{ height: "920", borderRadius: 13, backgroundColor: "pink" }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className="col-12 p-1   mt-5 row justify-content-around">
        <div className="w-100 p-0 row justify-content-between">
          <div className="col-auto">
            <h6>عنوان این دسته بندی</h6>
          </div>
          <div className="col-3 tx-danger">
            <h6>نمایش همه</h6>
          </div>
        </div>
        <Swiper
          // slidesPerView={3}

          modules={[Navigation]}
          // navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2.7,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4.2,
              spaceBetween: 25,
            },
            720: {
              slidesPerView: 5.2,
              spaceBetween: 25,
            },
            960: {
              slidesPerView: 6.2,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 7.2,
              spaceBetween: 25,
            },
          }}
          className="new-car-slider-container mb-0"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide
              className="bg-white shadow"
              style={{
                overflow: "hidden",
                borderRadius: 15,
                border: "1px solid #e2e2e2",
              }}
              key={"key"}
            >
              <div
                className="w-100 p-3 "
                style={{ borderRadius: 13, overflow: "hidden" }}
              >
                <img
                  className="w-100"
                  src="https://baparto.ir/wp-content/uploads/2021/05/Asus-tuf-fx506gt-1.jpg"
                  alt=""
                />
              </div>
              <div className="w-100 p-1">
                <h5 className="text-center">اسم محصول</h5>
                <p className="">
                  لپ تاپ ایسوس FX506LH | 8GB RAM | 512GB SSD ...
                </p>
              </div>
              <div className="w-100 p-3 mt-3">
                <h6 className="text-right">۳۲٫۱۶۱٫۰۰۰ تومان</h6>
              </div>

              <div className="w-100 mt-1">
                <h6 className="text-center">
                  خرید محصول
                  <BsCart2 color="green" size={30} />
                </h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="col-12 p-1">
        <div
          className="w-100"
          style={{ height: "920", borderRadius: 13, backgroundColor: "gray" }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className="col-12 p-1   mt-5 row justify-content-around">
        <div className="w-100 p-0 row justify-content-between">
          <div className="col-auto">
            <h6>عنوان این دسته بندی</h6>
          </div>
          <div className="col-3 tx-danger">
            <h6>نمایش همه</h6>
          </div>
        </div>
        <Swiper
          // slidesPerView={3}

          modules={[Navigation]}
          // navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2.7,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4.2,
              spaceBetween: 25,
            },
            720: {
              slidesPerView: 5.2,
              spaceBetween: 25,
            },
            960: {
              slidesPerView: 6.2,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 7.2,
              spaceBetween: 25,
            },
          }}
          className="new-car-slider-container mb-0"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide
              className="bg-white shadow"
              style={{
                overflow: "hidden",
                borderRadius: 15,
                border: "1px solid #e2e2e2",
              }}
              key={"key"}
            >
              <div
                className="w-100 p-3 "
                style={{ borderRadius: 13, overflow: "hidden" }}
              >
                <img
                  className="w-100"
                  src="https://baparto.ir/wp-content/uploads/2021/05/Asus-tuf-fx506gt-1.jpg"
                  alt=""
                />
              </div>
              <div className="w-100 p-1">
                <h5 className="text-center">اسم محصول</h5>
                <p className="">
                  لپ تاپ ایسوس FX506LH | 8GB RAM | 512GB SSD ...
                </p>
              </div>
              <div className="w-100 p-3 mt-3">
                <h6 className="text-right">۳۲٫۱۶۱٫۰۰۰ تومان</h6>
              </div>

              <div className="w-100 mt-1">
                <h6 className="text-center">
                  خرید محصول
                  <BsCart2 color="green" size={30} />
                </h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
      <div className="col-6 p-1">
        <div
          className="w-100"
          style={{ height: "920", borderRadius: 13, backgroundColor: "pink" }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className="col-6 p-1">
        <div
          className="w-100"
          style={{ height: "920", borderRadius: 13, backgroundColor: "pink" }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className="col-6 p-1">
        <div
          className="w-100"
          style={{ height: "920", borderRadius: 13, backgroundColor: "pink" }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className="col-6 p-1">
        <div
          className="w-100"
          style={{ height: "920", borderRadius: 13, backgroundColor: "pink" }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className="col-12 p-1   mt-5 row justify-content-around">
        <div className="w-100 p-0 row justify-content-between">
          <div className="col-auto">
            <h6>عنوان این دسته بندی</h6>
          </div>
          <div className="col-3 tx-danger">
            <h6>نمایش همه</h6>
          </div>
        </div>
        <Swiper
          // slidesPerView={3}

          modules={[Navigation]}
          // navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2.7,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4.2,
              spaceBetween: 25,
            },
            720: {
              slidesPerView: 5.2,
              spaceBetween: 25,
            },
            960: {
              slidesPerView: 6.2,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 7.2,
              spaceBetween: 25,
            },
          }}
          className="new-car-slider-container mb-0"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide
              className="bg-white shadow"
              style={{
                overflow: "hidden",
                borderRadius: 15,
                border: "1px solid #e2e2e2",
              }}
              key={"key"}
            >
              <div
                className="w-100 p-3 "
                style={{ borderRadius: 13, overflow: "hidden" }}
              >
                <img
                  className="w-100"
                  src="https://baparto.ir/wp-content/uploads/2021/05/Asus-tuf-fx506gt-1.jpg"
                  alt=""
                />
              </div>
              <div className="w-100 p-1">
                <h5 className="text-center">اسم محصول</h5>
                <p className="">
                  لپ تاپ ایسوس FX506LH | 8GB RAM | 512GB SSD ...
                </p>
              </div>
              <div className="w-100 p-3 mt-3">
                <h6 className="text-right">۳۲٫۱۶۱٫۰۰۰ تومان</h6>
              </div>

              <div className="w-100 mt-1">
                <h6 className="text-center">
                  خرید محصول
                  <BsCart2 color="green" size={30} />
                </h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
