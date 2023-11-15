import React, { useEffect, useState } from 'react'
import http from '../api/testApi'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/styles/custom.css";
// import required modules
// import Accordion from "react-bootstrap/Accordion";
import { Autoplay, Navigation, Pagination } from "swiper";
import BlogListItem from './BlogListItem';
export default function NewsPaperCarousel() {
    const api = http();
    const [loaded, setLoaded] = useState(false)
    const [news, setNews] = useState([]);
    useEffect(() => {
        let _data = [];
        Promise.all(
            api.GetNewsPaper(({ data }) => {
                _data = [..._data, ...data]
            }, 2),
            api.GetNewsPaper(({ data }) => {
                _data = [..._data, ...data]
            }, 3),
            api.GetNewsPaper(({ data }) => {
                _data = [..._data, ...data]
            }, 6),
            api.GetNewsPaper(({ data }) => {
                _data = [..._data, ...data]
            }, 5),

        ).then(() => {
            setLoaded(true)
            setNews(_data)
        }).catch(() => setLoaded(true))
        return () => {
        }
    }, [])
    if (!loaded) {
        return <div>
            ...loading
        </div>
    }
    return (
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
                        slidesPerView: 1.3,
                        spaceBetween: 10,
                    },
                    430: {
                        slidesPerView: 2.5,
                        spaceBetween: 10,
                    },
                    600: {
                        slidesPerView: 3.5,
                        spaceBetween: 10,
                    },

                }}
                // pagination={true}

                className="new-car-slider-container mb-0"
            >
                {news.map((item) => <SwiperSlide
                    className="nbt banner-slider-item"
                >
                    <BlogListItem
                        imgSrc={item.src}
                        title={item.title}
                        disc={item.title}
                        noBottom
                        fitImg
                    />
                </SwiperSlide>)}



            </Swiper>
        </section>
    )
}
