import React from "react";
import axasi from '../assets/images/Icons/axasi-01.svg'
import app from '../assets/images/Icons/app-01.svg'
import brandsazi from '../assets/images/Icons/brandsazi-01.svg'
import catalog from '../assets/images/Icons/catalog-01.svg'
import digitalmarketing from '../assets/images/Icons/digitalmarketing-01.svg'
import graphic from '../assets/images/Icons/graphic-01.svg'
import sabtbrand from '../assets/images/Icons/sabtbrand-01.svg'
import seo from '../assets/images/Icons/seo-01.svg'
import tarahi from '../assets/images/Icons/tarahi-site-01.svg'
import teaser from '../assets/images/Icons/teaser-01.svg'
import tolidmohtava from '../assets/images/Icons/tolidmohtava-01.svg'
export default function ClinickAccess() {
    function rendericon(icon, text, onClick) {
        return (
            <div className="col-3 row">
                <div
                    onClick={() => onClick()}
                    className={`col-auto mx-auto  d-flex align-items-center `}
                >
                    {icon}
                </div>
                <h6 className="text-center mt-2 text-mobile p-0">{text}</h6>
            </div>
        );
    }
    return (
        <div className="row">
            <div className="col-12   mt-3 row justify-content-around">
                {rendericon(
                    <img
                        src={axasi}
                        alt=""
                        className="w-100"
                    />,
                    "عکاسی",
                    () => {}
                )}
                {rendericon(
                    <img
                        src={app}
                        alt=""
                        className="w-100"
                    />,
                    "اپلیکیشن",
                    () => {}
                )}
                {rendericon(
                    <img
                        src={brandsazi}
                        alt=""
                        className="w-100"
                    />,
                    "برندسازی",
                    () => {}
                )}
                {rendericon(
                    <img
                        src={catalog}
                        alt=""
                        className="w-100"
                    />,
                    "کاتالوگ دیجیتال",
                    () => {}
                )}
            </div>

            <div className="col-12  mt-3 row justify-content-around">
                {rendericon(
                    <img
                        src={digitalmarketing}
                        alt=""
                        className="w-100"
                    />,
                    "دیجیتال مارکتینگ",
                    () => {}
                )}
                {rendericon(
                    <img
                        src={graphic}
                        alt=""
                        className="w-100"
                    />,
                    "گرافیک",
                    () => {}
                )}

                {rendericon(
                    <img
                        src={sabtbrand}
                        alt=""
                        className="w-100"
                    />,
                    "ثبت برند",
                    () => {}
                )}
                {rendericon(
                    <img
                        src={seo}
                        alt=""
                        className="w-100"
                    />,
                    "سئو",
                    () => {}
                )}
            </div>
            <div className="col-12  mt-3 row justify-content-around">
                {rendericon(
                    <img
                        src={tarahi}
                        alt=""
                        className="w-100"
                    />,
                    "طراحی سایت",
                    () => {}
                )}
                {rendericon(
                    <img
                        src={teaser}
                        alt=""
                        className="w-100"
                    />,
                    "ساخت تیزر",
                    () => {}
                )}
                {rendericon(
                    <img
                        src={tolidmohtava}
                        alt=""
                        className="w-100"
                    />,
                    "تولید محتوا",
                    () => {}
                )}
                <div className="col-3"></div>
            </div>
        </div>
    );
}

