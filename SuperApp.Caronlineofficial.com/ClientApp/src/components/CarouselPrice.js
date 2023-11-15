import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ContentLoader from "react-content-loader";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import http from "../api/testApi";
import priceNumber from '../utils/priceNumber';
import { IoMdArrowDropdown, IoArrowUp, IoMdArrowDropup } from 'react-icons/io';

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
            axios.get("https://api.tgju.org/v1/market/dataservice/crypto-assets?category=&type=overview&draw=1&columns%5B0%5D%5Bdata%5D=title&columns%5B0%5D%5Bname%5D=&columns%5B0%5D%5Bsearchable%5D=true&columns%5B0%5D%5Borderable%5D=true&columns%5B0%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B0%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B1%5D%5Bdata%5D=symbol&columns%5B1%5D%5Bname%5D=&columns%5B1%5D%5Bsearchable%5D=true&columns%5B1%5D%5Borderable%5D=true&columns%5B1%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B1%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B2%5D%5Bdata%5D=p&columns%5B2%5D%5Bname%5D=&columns%5B2%5D%5Bsearchable%5D=true&columns%5B2%5D%5Borderable%5D=true&columns%5B2%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B2%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B3%5D%5Bdata%5D=p_irr&columns%5B3%5D%5Bname%5D=&columns%5B3%5D%5Bsearchable%5D=true&columns%5B3%5D%5Borderable%5D=true&columns%5B3%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B3%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B4%5D%5Bdata%5D=d&columns%5B4%5D%5Bname%5D=&columns%5B4%5D%5Bsearchable%5D=true&columns%5B4%5D%5Borderable%5D=true&columns%5B4%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B4%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B5%5D%5Bdata%5D=dp&columns%5B5%5D%5Bname%5D=&columns%5B5%5D%5Bsearchable%5D=true&columns%5B5%5D%5Borderable%5D=true&columns%5B5%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B5%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B6%5D%5Bdata%5D=cap&columns%5B6%5D%5Bname%5D=&columns%5B6%5D%5Bsearchable%5D=true&columns%5B6%5D%5Borderable%5D=true&columns%5B6%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B6%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B7%5D%5Bdata%5D=volume&columns%5B7%5D%5Bname%5D=&columns%5B7%5D%5Bsearchable%5D=true&columns%5B7%5D%5Borderable%5D=true&columns%5B7%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B7%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B8%5D%5Bdata%5D=datetime&columns%5B8%5D%5Bname%5D=&columns%5B8%5D%5Bsearchable%5D=true&columns%5B8%5D%5Borderable%5D=true&columns%5B8%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B8%5D%5Bsearch%5D%5Bregex%5D=false&columns%5B9%5D%5Bdata%5D=9&columns%5B9%5D%5Bname%5D=&columns%5B9%5D%5Bsearchable%5D=true&columns%5B9%5D%5Borderable%5D=true&columns%5B9%5D%5Bsearch%5D%5Bvalue%5D=&columns%5B9%5D%5Bsearch%5D%5Bregex%5D=false&start=0&length=1").then(({ data }) => {
                _data.bitcoin = data.data[0];
            }),

        ).then(() => {
            console.log(_data)
            setData(_data);
            setTimeout(() => {
                localStorage.setItem("price", JSON.stringify(_data));
                setLoading(false)
            }, 1500)
        }).catch(() => {
            setData(_data);
            setTimeout(() => {
                localStorage.setItem("price", JSON.stringify(_data));
                setData(JSON.parse(localStorage.getItem("price")))
                setLoading(false)
            }, 1500)
        })
        return () => {
        }
    }, [])
    if (Loading) {
        return <div className="col-12">
            <div className="row   justify-content-center  ">
                <ContentLoader
                    backgroundColor={"#e3e3e3"}
                    foregroundColor={"#ababab"}
                    // viewBox="0 0 100% 180%"
                    height={"100"}
                >
                    {/* Only SVG shapes */}
                    <rect x="1%" y="25" rx="5" ry="5" width="32%" height="75" />
                    <rect x="34%" y="25" rx="5" ry="5" width="32%" height="75" />
                    <rect x="67%" y="25" rx="5" ry="5" width="32%" height="75" />
                </ContentLoader>

            </div>
        </div>
    }
    return (
        <div className='col-12 p-0'>

            <div className="row p-0 justify-content-between">
                <div className="col-4 p-0 custom-pr">
                    <div className={`w-100 homePrice-item  time-body `}>
                        <div className="row">
                            <h6 className="text-mobile-price">
                                {Data.dollar.name}
                                {Data.dollar.type === "high" ? <IoMdArrowDropup color="green" size={22} /> : <IoMdArrowDropdown color="red" size={22} />}
                            </h6>
                            <h6 className="text-mobile-price">
                                {priceNumber(Data.dollar.price) + "ریال"}
                            </h6>
                        </div>
                        {/* <div className="row">
                            <div className="col-7 p-0">
                                <h6 className="text-mobile-price">
                                    {Data.dollar.time}
                                </h6>
                            </div>
                            <div className="col-4 p-0 custom-pr">
                                <h6 className={`text-mobile-price-time ${Data.dollar.type === "high" ? "text-success" : "text-danger"}`}>
                                    {Data.dollar.percent +
                                        `${Data.dollar.type === "high" ? "+" : "-"}`}
                                </h6>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className="col-6 mt-2">
                    <div className={`w-100 homePrice-item ${Data.gold.type === "high" ? "homePrice-item-up" : "homePrice-item-down"}`}>
                        <div className="row">
                            <h6 className="text-mobile-price">
                                {Data.gold.name + " گرمی"}
                            </h6>
                            <div className="col-7 p-0">
                                <h6 className="text-mobile-price">
                                    {Data.gold.time}
                                </h6>
                            </div>
                            <div className="col-4 p-0 custom-pr">
                                <h6 className={`text-mobile-price-time ${Data.gold.type === "high" ? "text-success" : "text-danger"}`}>
                                    {Data.gold.percent +
                                        `${Data.gold.type === "high" ? "+" : "-"}`}
                                </h6>
                            </div>
                            <h6 className="text-mobile-price">
                                {priceNumber(Data.gold.price) + "ریال"}
                            </h6>
                        </div>
                    </div>
                </div> */}
                <div className="col-4 p-0 custom-pr">
                    <div className={`w-100 homePrice-item  time-body `}>
                        <div className="row">
                            <h6 className="text-mobile-price">
                                سکه بهار آزادی
                                {Data.coin.type === "high" ? <IoMdArrowDropup color="green" size={22} /> : <IoMdArrowDropdown color="red" size={22} />}

                            </h6>
                            {/* <div className="col-7 p-0">
                                <h6 className="text-mobile-price">
                                    {Data.coin.time}
                                </h6>
                            </div>
                            <div className="col-4 p-0 custom-pr">
                                <h6 className={`text-mobile-price-time ${Data.coin.type === "high" ? "text-success" : "text-danger"}`}>
                                    {Data.coin.percent +
                                        `${Data.coin.type === "high" ? "+" : "-"}`}
                                </h6>
                            </div> */}
                            <h6 className="text-mobile-price">
                                {priceNumber(Data.coin.price) + "ریال"}
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="col-4 p-0 custom-pr">
                    <div className={`w-100 homePrice-item  time-body `}>
                        <div className="row">
                            <h6 className="text-mobile-price">
                                {Data.bitcoin.title}

                                {Data.bitcoin.dt == "high" ? <IoMdArrowDropup color="green" size={22} /> : <IoMdArrowDropdown color="red" size={22} />}

                            </h6>
                            {/* <div className="col-7 p-0">
                                <h6 className="text-mobile-price">
                                    {Data.dollar.time}
                                </h6>
                            </div> */}
                            {/* <div className="col-4 p-0 custom-pr">
                                <h6 style={{ direction: "ltr" }} className={`text-mobile-price-time ${Data.bitcoin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}`}>
                                    {`( ${Number(Data.bitcoin.price_change_percentage_24h).toFixed(2) + "%"}) `}
                                </h6>
                            </div> */}
                            <h6 className="text-mobile-price">
                                {"$" + priceNumber(Data.bitcoin.p)}
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
