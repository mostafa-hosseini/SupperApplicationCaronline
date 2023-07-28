import React, { useState } from "react";
import logo from "../assets/images/Icons/logo/kalato-01.png";
import http from "../api/index";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [input, setinput] = useState({ phoneNumber: "" });
  const api = http();
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-img">
          <img src={logo} alt="car online logo" />
        </div>

        <div className="login-text w-100 mb-2">
          <h3 className="title">ورود / ثبت نام</h3>
          <h4 className="desc">کد دریافتی خود را وارد کنید.</h4>
        </div>

        <input
          type="text"
          name="phoneNumber"
          className="form-control back-ground"
          placeholder="کد خود را وارد کنید."
          id=""
          onChange={(e) => setinput({ ...input, phoneNumber: e.target.value })}
          value={input.phoneNumber}
        />
        {/* <input
          type="text"
          name="password"
          className="form-control back-ground"
          placeholder="کلمه عبور را وارد نمایید"
          id=""
        /> */}
        <div className="w-100 mt-4">
          <div
            className="btn btn-login btn-block w-100 p-2"
            onClick={() => {
              api.Register(
                ({ data }) => {
                  if (data.isSuccess) {
                    navigate("/verify", {
                      state: { phoneNumber: input.phoneNumber },
                    });
                  }
                },
                { phone: input.phoneNumber }
              );
            }}
          >
            ورود
          </div>
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
