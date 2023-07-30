import React, { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { DatePicker } from "zaman";
import Loading from "../components/Loading";
import http from "../api";
import logo from "../assets/images/Icons/logo/caronline.png";

export default function CompleteProfile() {
  const [loading, setLoading] = useState(false);
  const [input, setinput] = useState({
    fullName: "",
    job: "",
    gender: "",
    birthDay: "",
    email: "",
    password: "",
    confirmPassword: "",
    invitedUser: "",
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

    api.CompleteProfile(callback, input, errorHandler);
  };

  // useEffect(() => {
  //   if (!location?.state?.isRegistering) {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <Loading loading={loading}>
      <div className="login-wrapper">
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
                    <option value="">لطفا شغل خود را وارد نمایید</option>
                    <option>تکنسین پزشکی / کارشناس فنی مسائل پزشکی</option>
                    <option>پرستار</option>
                    <option>فروشنده یا واسطه املاک / خودرو</option>
                    <option>درجه دار نظامی و انتظامی</option>
                    <option>عمده فروش</option>
                    <option>صراف</option>
                    <option>پزشک / دندانپزشک / دندانساز / روانپزشک</option>
                    <option>خانه دار</option>
                    <option>آموزگار / دبیر / مدرس دانشگاه/ مربی</option>
                    <option>
                      مغازه دار (آرایشگر، سوپرمارکت، وسایل الکترونیکی و ...)
                    </option>
                    <option>
                      مهندس / (رایانه ، راه و ساختمان ، پزشکی ، صنعت و...)
                    </option>
                    <option>وزیر / نماینده مجلس / سفیر</option>
                    <option>دانشجو / دانش آموز / کارآموز</option>
                    <option>فروشنده اشیا گرانبها (فرش، عتیقه و ..)</option>
                    <option>فروشنده طلا / جواهر</option>
                    <option>دامپزشک</option>
                    <option>رییس</option>
                    <option>صنعتگر</option>
                    <option>کارگر</option>
                    <option>تولیدکننده / ارایه دهنده خدمات</option>
                    <option>طراح و تحلیلگر علمی / فنی / پژوهشگر</option>
                    <option>کشاورز</option>
                    <option>مدیر عامل / معاون</option>
                    <option>مشاور / وكيل</option>
                    <option>راننده</option>
                    <option>هنرمند (فیلمساز، نقاش، مجسمه ساز و ...)</option>
                    <option>ورزشکار حرفه ای / خبرنگار</option>
                    <option>مشغول به خدمت وظیفه</option>
                    <option>کارمند / کارشناس</option>
                    <option>صادرکننده / واردکننده (بازرگان)</option>
                    <option>بیکار</option>
                    <option>خویش فرما</option>
                    <option>
                      رستوران دار / هتل دار / آژانس مسافرتی / دفتردار
                    </option>
                    <option>بازنشسته</option>
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
                    <option value="">لطفا جنسیت خود را وارد نمایید</option>
                    <option value="male">مرد</option>
                    <option value="female">زن</option>
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
                    placeholder: "تاریخ تولد خود را وارد نمایید",
                  }}
                />
              </div>
              <div className="col-12 col-lg-6 mt-3">
                <input
                  type="text"
                  name="Email"
                  className="p-2 form-control back-ground "
                  placeholder="ایمیل خود را وارد کنید"
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
                  placeholder="کد سفیر خود را وارد کنید"
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
              <div className="col-12 col-lg-6 mt-3">
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
