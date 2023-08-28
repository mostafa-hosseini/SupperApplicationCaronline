import React, { useEffect } from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from 'react';
import http from "../api/testApi";
import CryptoItem from './CryptoItem';
import priceNumber from '../utils/priceNumber';
import axios from 'axios';
export default function CarouselPrice() {
    const api = http();
    const [Data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    useEffect(() => {
        let _data = [];
        Promise.all(api.GoldPrice(({ data }) => {
            _data.push(data.goldPrice.oz[0])
            _data.push(data.goldPrice.gold[0])
            _data.push(data.goldPrice.quotes[1])
            _data.push(data.coinPrice.coin[0])
            _data.push(data.coinPrice.coin[1])
            _data.push(data.coinPrice.coin[2])
            _data.push(data.coinPrice.coin[3])
            setData([...Data, ..._data])
        }, ""),
            api.Currency(({ data }) => {
                _data.push(data[0])
                _data.push(data[1])
                _data.push(data[2])
                _data.push(data[3])
                _data.push(data[6])
                setData([...Data, ..._data])
            }),
            axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1").then(({ data }) => {
                let resdata = data.map((item) => {
                    return { ...item, ty: "CRYPTO" }
                });
                _data.push(resdata[0])
                _data.push(resdata[1])
                _data.push(resdata[2])
                _data.push(resdata[3])
                setData([...Data, ..._data])
            })
        ).then(() => {
            setData(_data);

            setLoading(false);
        }).catch(() => setLoading(false))
        return () => {
        }
    }, [])

    return (
        <div className='col-12'>
            {Loading ?
                <h6 className='text-center'>
                    در حال بارگیری...
                </h6>
                : <Swiper
                    style={{ paddingBottom: 30 }}
                    // slidesPerView={3}

                    spaceBetween={15}
                    loop
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay, Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                            spaceBetween: 5,
                        },
                        520: {
                            slidesPerView: 2.5,
                            spaceBetween: 10,
                        },
                    }}
                    pagination={false}
                    className="new-car-slider-container mb-0"
                >
                    {Data.map((item, index) =>
                        <SwiperSlide
                            className="nbt banner-slider-item"
                            onClick={() => { }}
                            key={index}
                        >
                            {item.ty == "CRYPTO" ? <CryptoItem
                                imgSrc={item.image}
                                name={item.name}
                                topPrice={
                                    Number(item.price_change_percentage_24h).toFixed(2) + "%"
                                }
                                topPriceStyle={item.price_change_percentage_24h > 0}
                                CurrentPriceStyle={item.price_change_percentage_24h > 0}
                                CurrentPrice={"$" + priceNumber(item.current_price)}
                                desc={item.symbol}
                            /> : <CryptoItem
                                name={item.name}
                                desc={item.time}
                                topPrice={"$" + priceNumber(item.price)}
                                noTopPriceStyle
                                CurrentPriceStyle={item.type === "high"}
                                CurrentPrice={
                                    item.percent +
                                    `${item.type === "high" ? "+" : "-"}`
                                }
                            />}

                        </SwiperSlide>
                    )}
                </Swiper>}
        </div>
    )
}
