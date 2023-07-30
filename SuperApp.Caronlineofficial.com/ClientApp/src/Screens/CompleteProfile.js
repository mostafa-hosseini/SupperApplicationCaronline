import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "zaman";
import http from "../api";

export default function CompleteProfile() {
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
  return (
    <div className="w-100 h-auto p-4 back-ground mt-5 row justify-content-center mb-5">
      <div className="col-12 d-flex justify-content-center align-items-enter">
        <div className="icon-aut">
          <FaUserPlus size={50} color="#000" />
        </div>
        <h3 className="text-center mb-0 d-flex align-items-center me-3">
          تکمیل حساب کاربری
        </h3>
      </div>

      <div className="col-12 col-lg-6 mt-3">
        <input
          type="text"
          name="FullName"
          className="p-2 form-control back-ground "
          placeholder="نام و نام خانوادگی خود را وارد کنید"
          value={input.fullName}
          onChange={(e) => setinput({ ...input, fullName: e.target.value })}
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
            <option>رستوران دار / هتل دار / آژانس مسافرتی / دفتردار</option>
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
            onChange={(e) => setinput({ ...input, gender: e.target.value })}
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
          inputAttributes={{ placeholder: "تاریخ تولد خود را وارد نمایید" }}
        />
      </div>
      <div className="col-12 col-lg-6 mt-3">
        <input
          type="text"
          name="Email"
          className="p-2 form-control back-ground "
          placeholder="ایمیل خود را وارد کنید"
          value={input.email}
          onChange={(e) => setinput({ ...input, email: e.target.value })}
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
          onChange={(e) => setinput({ ...input, invitedUser: e.target.value })}
          id=""
        />
      </div>
      <div className="col-12 col-lg-6 mt-3">
        <input
          type="text"
          name="password"
          className="p-2 form-control back-ground "
          placeholder="کلمه عبور خود را وارد کنید"
          value={input.password}
          onChange={(e) => setinput({ ...input, password: e.target.value })}
          id=""
        />
      </div>
      <div className="col-12 col-lg-6 mt-3">
        <input
          type="text"
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
        <div
          className="btn btn-success btn-block w-100 p-2"
          onClick={() => {
            api.CompleteProfile(({ data }) => {}, input);
          }}
        >
          تکمیل حساب کاربری
        </div>
      </div>
    </div>
  );
}
