import React from "react";
import { useNavigate } from "react-router-dom";
import mohasebe from '../assets/images/Icons/cars/mohasebe-01.svg'
import gheymat from '../assets/images/Icons/cars/gheymat-01.svg'
import kharid from '../assets/images/Icons/cars/kharid-sefareshi.svg'
import forosh from '../assets/images/Icons/cars/forosh-sefareshi-01.svg'
import karshenasi from '../assets/images/Icons/cars/karshenasi-01.svg'
import froshgah from '../assets/images/Icons/cars/froshgah-01.svg'
import hamkari from '../assets/images/Icons/cars/hamkari-01.svg'
import foroshandeh from '../assets/images/Icons/cars/foroshandeh.svg'
import sabt from '../assets/images/Icons/cars/sabt-01.svg'
export default function MashintoQuickAccess() {
  const navigate = useNavigate();
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
            src={mohasebe}
            alt=""
            className="w-100"
          />,
          "محاسبه قیمت خودرو",
          () => {
            window.open("https://mashinto.com/محاسبه-قیمت");
          }
        )}
        {rendericon(
          <img
            src={gheymat}
            alt=""
            className="w-100"
          />,
          "قیمت روز خودرو",
          () => {
            window.open("https://mashinto.com/carprice");
          }
        )}
        {rendericon(
          <img
            src={kharid}
            alt=""
            className="w-100"
          />,
          "خرید سفارشی",
          () => {
            window.open("https://mashinto.com/buycar");
          }
        )}
        {rendericon(
          <img
            src={forosh}
            alt=""
            className="w-100"
          />,
          "فروش سفارشی",
          () => {
            window.open("https://mashinto.com/sellcar");
          }
        )}
      </div>

      <div className="col-12  mt-3 row justify-content-around">
        {rendericon(
          <img
            src={karshenasi}
            alt=""
            className="w-100"
          />,
          "درخواست کارشناسی",
          () => {
            window.open("https://mashinto.com/");
          }
        )}
        {rendericon(
          <img
            src={froshgah}
            alt=""
            className="w-100"
          />,
          "فروشگاه",
          () => {
            window.open("https://mashinto.com/shop");
          }
        )}
        {rendericon(
          <img
            src={hamkari}
            alt=""
            className="w-100"
          />,
          "همکاری با ماشین تو",
          () => {
            window.open("https://mashinto.com/cooperation");
          }
        )}
        {rendericon(
          <img
            src={foroshandeh}
            alt=""
            className="w-100"
          />,
          "فروشنده شوید",
          () => {
            window.open("https://mashinto.com/BecomeASeller");
          }
        )}
      </div>
      <div className="col-12  mt-3 row justify-content-around">
        {rendericon(
          <img
            src={sabt}
            alt=""
            className="w-100"
          />,
          "ثبت آگهی",
          () => {
            window.open("https://mashinto.com/ثبت-آگهی");
          }
        )}
        <div className="col-3 row"></div>
        <div className="col-3 row"></div>
        <div className="col-3 row"></div>
      </div>
    </div>
  );
}
