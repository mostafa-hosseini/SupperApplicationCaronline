import React, { useState, useEffect } from "react";
import hyperauto from '../assets/images/Icons/shop/hyperauto-01.svg'
import hypersakhteman from '../assets/images/Icons/shop/hypersakhteman-01.svg'
import Loading from "../components/Loading";
import RowItem from "../components/RowItem";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import { Swiper, SwiperSlide } from "swiper/react";
import anim1 from '../assets/Animations/cart.json'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Lottie from "react-lottie";
export default function ShopQuikAccess() {
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
                    <div className="row">
                        <div className="col-12 mb-3   row justify-content-around">
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
                                        src={require("../assets/images/Banners/21.jpg")}
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
                                        src={require("../assets/images/Banners/22.jpg")}
                                        alt={""}
                                        style={{ width: "100%" }}
                                    />
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <div className="col-3 p-1">
                            <RowItem
                                imgSrc={hyperauto}
                                imgalt="هایپر خودرو"
                                title="هایپر خودرو"
                                to={"https://mashinto.com/shop"}
                            />
                        </div>
                        <div className="col-3 p-1">
                            <RowItem
                                imgSrc={hypersakhteman}
                                imgalt="هایپر ساختمان"
                                title="هایپر ساختمان"

                                to={"https://amlakto.com/shop"}
                            />
                        </div>
                        <div className="col-3 p-1"></div>
                        <div className="col-3 p-1"></div>
                        <div className="w-100"></div>
                        <div className="col-8 mx-auto mt-5">
                            <Lottie options={{ animationData: anim1, autoplay: true, loop: true }} />
                        </div>
                    </div>
                </section>
            </div>

        </Loading>
    );
}

