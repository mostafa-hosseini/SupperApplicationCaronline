import React from "react";
import { useNavigate } from "react-router-dom";
import forosh from '../assets/images/Icons/house/forosh-sefareshi-01.svg'
import foroshandeh from '../assets/images/Icons/house/foroshandeh.svg'
import froshgah from '../assets/images/Icons/house/froshgah-01.svg'
import gheymat from '../assets/images/Icons/house/gheymat-01.svg'
import hamkari from '../assets/images/Icons/house/hamkari-01.svg'
import karshenasi from '../assets/images/Icons/house/karshenasi-01.svg'
import kharid from '../assets/images/Icons/house/kharid-sefareshi.svg'
import moshavere from '../assets/images/Icons/house/moshavere-01.svg'
import sabt from '../assets/images/Icons/house/sabt-01.svg'
export default function AmlaktoQuickAccess() {
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
            src={sabt}
            alt=""
            className="w-100"
          />,
          "ثبت آگهی",
          () => navigate("/MashintoQuickAcces")
        )}
        {rendericon(
          <img
            src={gheymat}
            alt=""
            className="w-100"
          />,
          "قیمت روز ملک",
          () => navigate("/MashintoQuickAcces")
        )}
        {rendericon(
          <img
            src={karshenasi}
            alt=""
            className="w-100"
          />,
          "درخواست کارشناسی",
          () => navigate("/MashintoQuickAcces")
        )}
        {rendericon(
          <img
            src={moshavere}
            alt=""
            className="w-100"
          />,
          "مشاوره",
          () => navigate("/MashintoQuickAcces")
        )}
      </div>

      <div className="col-12  mt-3 row justify-content-around">
        {rendericon(
          <img
            src={kharid}
            alt=""
            className="w-100"
          />,
          "خرید سفارشی",
          () => navigate("/MashintoQuickAcces")
        )}
        {rendericon(
          <img
            src={forosh}
            alt=""
            className="w-100"
          />,
          "فروش سفارشی",
          () => navigate("/MashintoQuickAcces")
        )}

        {rendericon(
          <img
            src={foroshandeh}
            alt=""
            className="w-100"
          />,
          "فروشنده شوید",
          () => navigate("/MashintoQuickAcces")
        )}
        {rendericon(
          <img
            src={hamkari}
            alt=""
            className="w-100"
          />,
          "فایل های زیر قیمت",
          () => navigate("/MashintoQuickAcces")
        )}
      </div>
      <div className="col-12  mt-3 row justify-content-around">
        {rendericon(
          <img
            src={froshgah}
            alt=""
            className="w-100"
          />,
          "فروشگاه",
          () => navigate("/MashintoQuickAcces")
        )}

        <div className="col-3 row"></div>
        <div className="col-3 row"></div>
        <div className="col-3 row"></div>
      </div>
    </div>
  );
}
