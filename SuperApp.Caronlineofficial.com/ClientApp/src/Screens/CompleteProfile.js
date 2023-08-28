import React, { useEffect, useState } from "react";
// import { FaUserPlus } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { DatePicker } from "zaman";
import Loading from "../components/Loading";
import http from "../api";
import logo from "../assets/images/Icons/logo/caronline.png";
import queryString from "query-string";
export default function CompleteProfile() {
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();
  const values = queryString.parse(search);
  const [input, setinput] = useState({
    fullName: "",
    job: "",
    gender: "",
    birthDay: null,
    email: "",
    password: "",
    confirmPassword: "",
    invitedUser: values?.ref == undefined ? "" : values.ref
  });
  const [datePickerModal, setDatePickerModal] = useState(false);
  const api = http();
  const navigate = useNavigate();
  const location = useLocation();

  const submitHandler = (e) => {
    setLoading(true);
    e.preventDefault();

    const callback = ({ data }) => {
      setLoading(false);
      if (data.isSuccess) {
        navigate("/Dashboard");
      }
    };

    const errorHandler = (e) => {
      setLoading(false);
      console.log(e);
    };
    var _input = {};
    if (input.birthDay == null) {
      var _input = { ...input };
      delete _input.birthDay;
      console.log(_input);
      setinput({ ..._input });
    }
    api.CompleteProfile(callback, _input, errorHandler);
  };

  useEffect(() => {
    if (!location?.state?.isRegistering) {
      navigate("/");
    }
  }, []);

  return (
    <Loading loading={loading}>
      <div className="login-wrapper mb-5">
        <div className="login-box form-box">
          <form onSubmit={submitHandler}>
            <div className="w-100 h-auto row justify-content-center">
              <div className="col-12 d-flex flex-column align-items-center">
                <div className="login-img">
                  <img src={logo} alt="car online logo" />
                </div>
                <h3 className="text-center m0-2 w-100">تکمیل حساب کاربری</h3>
              </div>

              <div className="col-12 col-lg-6 mt-3">
                <input
                  type="text"
                  name="FullName"
                  className="p-2 form-control back-ground "
                  placeholder="نام و نام خانوادگی خود را وارد کنید"
                  value={input.fullName}
                  onChange={(e) =>
                    setinput({ ...input, fullName: e.target.value })
                  }
                  id=""
                />
              </div>

              <div className="col-12 col-lg-6 mt-3">
                <div className="select-wrapper">
                  <select
                    name="job"
                    id="job"
                    className="form-select form-control back-ground"
                  >
                    <option value="">لطفا شغل خود را وارد نمایید (اختیاری)</option>
                    <option value="تکنسین پزشکی / کارشناس فنی مسائل پزشکی">تکنسین پزشکی / کارشناس فنی مسائل پزشکی</option>
                    <option value="پرستار">پرستار</option>
                    <option value="فروشنده یا واسطه املاک / خودرو">فروشنده یا واسطه املاک / خودرو</option>
                    <option value="درجه دار نظامی و انتظامی">درجه دار نظامی و انتظامی</option>
                    <option value="عمده فروش">عمده فروش</option>
                    <option value="صراف">صراف</option>
                    <option value="پزشک / دندانپزشک / دندانساز / روانپزشک">پزشک / دندانپزشک / دندانساز / روانپزشک</option>
                    <option value="خانه دار">خانه دار</option>
                    <option value="آموزگار / دبیر / مدرس دانشگاه/ مربی">آموزگار / دبیر / مدرس دانشگاه/ مربی</option>
                    <option value="مغازه دار (آرایشگر، سوپرمارکت، وسایل الکترونیکی و ...)">
                      مغازه دار (آرایشگر، سوپرمارکت، وسایل الکترونیکی و ...)
                    </option>
                    <option value="مهندس / (رایانه ، راه و ساختمان ، پزشکی ، صنعت و...)">
                      مهندس / (رایانه ، راه و ساختمان ، پزشکی ، صنعت و...)
                    </option>
                    <option value="وزیر / نماینده مجلس / سفیر">وزیر / نماینده مجلس / سفیر</option>
                    <option value="دانشجو / دانش آموز / کارآموز">دانشجو / دانش آموز / کارآموز</option>
                    <option value="فروشنده اشیا گرانبها (فرش، عتیقه و ..)">فروشنده اشیا گرانبها (فرش، عتیقه و ..)</option>
                    <option value="فروشنده طلا / جواهر">فروشنده طلا / جواهر</option>
                    <option value="دامپزشک">دامپزشک</option>
                    <option value="رییس">رییس</option>
                    <option value="صنعتگر">صنعتگر</option>
                    <option value="کارگر">کارگر</option>
                    <option value="تولیدکننده / ارایه دهنده خدمات">تولیدکننده / ارایه دهنده خدمات</option>
                    <option value="طراح و تحلیلگر علمی / فنی / پژوهشگر">طراح و تحلیلگر علمی / فنی / پژوهشگر</option>
                    <option value="کشاورز">کشاورز</option>
                    <option value="مدیر عامل / معاون">مدیر عامل / معاون</option>
                    <option value="مشاور / وكيل">مشاور / وكيل</option>
                    <option value="راننده">راننده</option>
                    <option value="هنرمند (فیلمساز، نقاش، مجسمه ساز و ...)">هنرمند (فیلمساز، نقاش، مجسمه ساز و ...)</option>
                    <option value="ورزشکار حرفه ای / خبرنگار">ورزشکار حرفه ای / خبرنگار</option>
                    <option value="مشغول به خدمت وظیفه">مشغول به خدمت وظیفه</option>
                    <option value="کارمند / کارشناس">کارمند / کارشناس</option>
                    <option value="صادرکننده / واردکننده (بازرگان)">صادرکننده / واردکننده (بازرگان)</option>
                    <option value="بیکار">بیکار</option>
                    <option value="خویش فرما">خویش فرما</option>
                    <option value="رستوران دار / هتل دار / آژانس مسافرتی / دفتردار">
                      رستوران دار / هتل دار / آژانس مسافرتی / دفتردار
                    </option>
                    <option value="بازنشسته">بازنشسته</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-lg-6 mt-3">
                <div className="select-wrapper">
                  <select
                    name="gender"
                    id="gender"
                    className=" form-select form-control back-ground"
                    onChange={(e) =>
                      setinput({ ...input, gender: e.target.value })
                    }
                  >
                    <option value=""> لطفا جنسیت خود را وارد نمایید (اختیاری)</option>
                    <option value="0">مرد</option>
                    <option value="1">زن</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-lg-6 mt-3">
                <DatePicker
                  onChange={(e) => {
                    setDatePickerModal(false);
                    console.log(e);
                    setinput({ ...input, birthDay: e.value });
                  }}
                  show={datePickerModal}
                  round="x2"
                  inputClass="p-2 form-control back-ground disabled "
                  inputAttributes={{
                    placeholder: " تاریخ تولد خود را وارد نمایید (اختیاری)",
                  }}
                />
              </div>
              <div className="col-12 col-lg-6 mt-3">
                <input
                  type="text"
                  name="Email"
                  className="p-2 form-control back-ground "
                  placeholder="ایمیل خود را وارد کنید (اختیاری)"
                  value={input.email}
                  onChange={(e) =>
                    setinput({ ...input, email: e.target.value })
                  }
                  id=""
                />
              </div>
              <div className="col-12 col-lg-6 mt-3">
                <input
                  type="text"
                  name="invitedUser"
                  className="p-2 form-control back-ground "
                  placeholder="کد سفیر خود را وارد کنید (اختیاری)"
                  maxLength={8}
                  value={input.invitedUser}
                  onChange={(e) =>
                    setinput({ ...input, invitedUser: e.target.value })
                  }
                  id=""
                />
              </div>
              <div className="col-12 col-lg-6 mt-3">
                <input
                  type="password"
                  name="password"
                  className="p-2 form-control back-ground "
                  placeholder="کلمه عبور خود را وارد کنید"
                  value={input.password}
                  onChange={(e) =>
                    setinput({ ...input, password: e.target.value })
                  }
                  id=""
                />
              </div>
              <div className="col-12 col-lg-6 mt-3">
                <input
                  type="password"
                  name="confirmPassword"
                  className="p-2 form-control back-ground "
                  placeholder="تایید کلمه عبور خود را وارد کنید"
                  value={input.confirmPassword}
                  onChange={(e) =>
                    setinput({ ...input, confirmPassword: e.target.value })
                  }
                  id=""
                />
              </div>
              <div className="col-12 col-lg-6 mt-4">
                <button
                  type="submit"
                  className="btn btn-login btn-block w-100 p-2"
                >
                  تکمیل حساب کاربری
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Loading>
  );
}
