import React from "react";
import logo from "../assets/images/Icons/logo/kalato-01.png";

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-img">
          <img src={logo} alt="car online logo" />
        </div>

        <div className="login-text w-100 mb-2">
          <h3 className="title">ورود / ثبت نام</h3>
          <h4 className="desc">لطفا شماره موبایل یا ایمیل خود را وارد کنید.</h4>
        </div>

        <input
          type="text"
          name="phoneNumber"
          className="form-control back-ground"
          placeholder=" شماره موبایل یا ایمیل خود را وارد نمایید"
          id=""
        />
        {/* <input
          type="text"
          name="password"
          className="form-control back-ground"
          placeholder="کلمه عبور را وارد نمایید"
          id=""
        /> */}
        <div className="w-100 mt-4">
          <div className="btn btn-login btn-block w-100 p-2">ورود</div>
        </div>

        <div className="notes">
          <span>
            ورود شما به معنای پذیرش شرایط کارآنلاین و قوانین و حریم خصوصی است.
          </span>
        </div>
      </div>
    </div>
  );
}
