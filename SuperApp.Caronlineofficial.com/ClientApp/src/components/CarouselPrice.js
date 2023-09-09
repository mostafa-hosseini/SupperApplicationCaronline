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
import ContentLoader from "react-content-loader";

export default function CarouselPrice() {
    const api = http();
    const [Data, setData] = useState({
        gold: {},
        coin: {},
        dollar: {},
        bitcoin: {}
    });
    const [Loading, setLoading] = useState(true);
    useEffect(() => {
        let _data = {
            gold: {},
            coin: {},
            dollar: {},
            bitcoin: {}
        };
        Promise.all(
            api.GoldPrice(({ data }) => {
                _data.gold = { ...data.goldPrice.gold[0] };
                _data.coin = { ...data.coinPrice.coin[0] };
            }, ""),
            api.Currency(({ data }) => {
                _data.dollar = data[0];
            }, ""),
            axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1").then(({ data }) => {
                _data.bitcoin = data[0];
            })
        ).then(() => {
            console.log(_data)
            setData(_data);
            setLoading(false);
        }).catch(() => {

            setData(_data);
            setTimeout(() => setLoading(false), 1500)
        })
        return () => {
        }
    }, [])
    if (Loading) {
        return <div className="col-12">
            <div className="row  mt-2 justify-content-center  ">
                <ContentLoader
                    backgroundColor={"#e3e3e3"}
                    foregroundColor={"#ababab"}
                    // viewBox="0 0 100% 180%"
                    height={"200"}
                >
                    {/* Only SVG shapes */}
                    <rect x="50%" y="0" rx="5" ry="5" width="45%" height="90" />
                    <rect x="0" y="0" rx="5" ry="5" width="45%" height="90" />
                    <rect x="50%" y="100" rx="5" ry="5" width="45%" height="90" />
                    <rect x="0" y="100" rx="5" ry="5" width="45%" height="90" />
                </ContentLoader>
        
            </div>
        </div>
    }
    return (
        <div className='col-12 p-0'>

            <div className="row p-0">
                <div className="col-6 mt-2">
                    <div className={`w-100 homePrice-item ${Data.dollar.type === "high" ? "homePrice-item-up" : "homePrice-item-down"}`}>
                        <div className="row">
                            <h6 className="text-mobile">
                                {Data.dollar.name}
                            </h6>
                            <div className="col-7 p-0">
                                <h6 className="text-mobile">
                                    {Data.dollar.time}
                                </h6>
                            </div>
                            <div className="col-4 p-0">
                                <h6 className={`text-mobile-time ${Data.dollar.type === "high" ? "text-success" : "text-danger"}`}>
                                    {Data.dollar.percent +
                                        `${Data.dollar.type === "high" ? "+" : "-"}`}
                                </h6>
                            </div>
                            <h6 className="text-mobile">
                                {priceNumber(Data.dollar.price) + "ریال"}
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-2">
                    <div className={`w-100 homePrice-item ${Data.gold.type === "high" ? "homePrice-item-up" : "homePrice-item-down"}`}>
                        <div className="row">
                            <h6 className="text-mobile">
                                {Data.gold.name + " گرمی"}
                            </h6>
                            <div className="col-7 p-0">
                                <h6 className="text-mobile">
                                    {Data.gold.time}
                                </h6>
                            </div>
                            <div className="col-4 p-0">
                                <h6 className={`text-mobile-time ${Data.gold.type === "high" ? "text-success" : "text-danger"}`}>
                                    {Data.gold.percent +
                                        `${Data.gold.type === "high" ? "+" : "-"}`}
                                </h6>
                            </div>
                            <h6 className="text-mobile">
                                {priceNumber(Data.gold.price) + "ریال"}
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-2">
                    <div className={`w-100 homePrice-item ${Data.coin.type === "high" ? "homePrice-item-up" : "homePrice-item-down"}`}>
                        <div className="row">
                            <h6 className="text-mobile">
                                سکه بهار آزادی
                            </h6>
                            <div className="col-7 p-0">
                                <h6 className="text-mobile">
                                    {Data.coin.time}
                                </h6>
                            </div>
                            <div className="col-4 p-0">
                                <h6 className={`text-mobile-time ${Data.coin.type === "high" ? "text-success" : "text-danger"}`}>
                                    {Data.coin.percent +
                                        `${Data.coin.type === "high" ? "+" : "-"}`}
                                </h6>
                            </div>
                            <h6 className="text-mobile">
                                {priceNumber(Data.coin.price) + "ریال"}
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="col-6 mt-2">
                    <div className={`w-100 homePrice-item ${Data.bitcoin.price_change_percentage_24h > 0 ? "homePrice-item-up" : "homePrice-item-down"}`}>
                        <div className="row">
                            <h6 className="text-mobile">
                                {Data.bitcoin.name}
                            </h6>
                            <div className="col-7 p-0">
                                {/* <h6 className="text-mobile">
                                    {Data.dollar.time}
                                </h6> */}
                            </div>
                            <div className="col-4 p-0">
                                <h6 style={{ direction: "ltr" }} className={`text-mobile-time ${Data.bitcoin.price_change_percentage_24h > 0 === "high" ? "text-success" : "text-danger"}`}>
                                    {`(${Number(Data.bitcoin.price_change_percentage_24h).toFixed(3)})` + "%"}
                                </h6>
                            </div>
                            <h6 className="text-mobile">
                                {"$" + priceNumber(Data.bitcoin.current_price)}
                            </h6>
                        </div>
                    </div>
                </div>
                {/* <div className="col-6 col-md-6 mt-2">
                    <CryptoItem
                        name={Data.bitcoin.name}
                        topPrice={
                            Number(Data.bitcoin.price_change_percentage_24h).toFixed(2) + "%"
                        }
                        topPriceStyle={Data.bitcoin.price_change_percentage_24h > 0}
                        CurrentPriceStyle={Data.bitcoin.price_change_percentage_24h > 0}
                        CurrentPrice={"$" + priceNumber(Data.bitcoin.current_price)}
                        desc={Data.bitcoin.symbol}
                    />
                </div>
                <div className="col-6 col-md-6 mt-2">
                    <CryptoItem
                        name={Data.coin.name}
                        desc={Data.coin.time}
                        topPrice={priceNumber(Data.coin.price) + "ریال"}
                        noTopPriceStyle
                        CurrentPriceStyle={Data.coin.type === "high"}
                        CurrentPrice={
                            Data.coin.percent +
                            `${Data.coin.type === "high" ? "+" : "-"}`
                        }
                    />
                </div>
                <div className="col-6 col-md-6 mt-2">
                    <CryptoItem
                        name={Data.gold.name}
                        desc={Data.gold.time}
                        topPrice={priceNumber(Data.gold.price) + "ریال"}
                        noTopPriceStyle
                        CurrentPriceStyle={Data.gold.type === "high"}
                        CurrentPrice={
                            Data.gold.percent +
                            `${Data.gold.type === "high" ? "+" : "-"}`
                        }
                    />
                </div>
                <div className="col-6 col-md-6 mt-2">
                    <CryptoItem
                        name={Data.dollar.name}
                        desc={Data.dollar.time}
                        topPrice={priceNumber(Data.dollar.price) + "ریال"}
                        noTopPriceStyle
                        CurrentPriceStyle={Data.dollar.type === "high"}
                        CurrentPrice={
                            Data.dollar.percent +
                            `${Data.dollar.type === "high" ? "+" : "-"}`
                        }
                    />
                </div> */}
            </div>

        </div>
    )
}
