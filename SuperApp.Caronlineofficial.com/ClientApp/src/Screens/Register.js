import React, { useState } from "react";
import logo from "../assets/images/Icons/logo/caronline.png";
import Loading from "../components/Loading";
import toast from "react-hot-toast";
import http from "../api/index";
import { validatePhone } from "../utils/validate";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [phonenumber, setPhonenumber] = useState("");
  const [code, setCode] = useState("");
  const [isCode, setIsCode] = useState(false);

  const navigate = useNavigate();
  const api = http();

  const submitPhone = () => {
    if (validatePhone(phonenumber)) {
      setLoading(true);

      const callback = ({ data }) => {
        setLoading(false);

        if (data.isSuccess) {
          setIsCode(true);
        }
      };

      api.Register(callback, { phone: phonenumber });

      // setTimeout(() => {
      //   setLoading(false);
      //   toast.success("کد ورود برای شما ارسال شد!");
      //   setIsCode(true);
      //   // navigate("/");
      // }, 1000);
    } else {
      toast.error("لطفا شماره تماس خود را به درستی وارد کنید!");
    }
  };

  const submitCode = () => {
    if (validatePhone(phonenumber) && code.trim().length) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        toast.success("ثبت نام شما موفقیت آمیز بود!");
        navigate("/CompleteProfile");
      }, 1000);
    } else {
      if (!validatePhone(phonenumber)) {
        toast.error("لطفا شماره تماس خود را به درستی وارد کنید!");
      } else {
        toast.error("لطفا کد ورود خود را وارد کنید!");
      }
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (isCode) {
      submitCode();
    } else {
      submitPhone();
    }
  };

  return (
    <Loading opacity hasLogo={false} isLoading={loading}>
      <div className="login-wrapper">
        <div className="login-box">
          <div className="login-img">
            <img src={logo} alt="car online logo" />
          </div>

          <form onSubmit={submitHandler} className="w-100">
            <div className="login-text w-100 mb-2">
              <h3 className="title">ثبت نام</h3>
              <h4 className="desc">
                {isCode ? (
                  <>
                    کد ارسال شده برای شماره
                    <span className="primary-color"> {phonenumber} </span>
                    را وارد کنید.
                  </>
                ) : (
                  "برای ثبت نام شماره موبایل خود را وارد کنید."
                )}
              </h4>
            </div>

            {isCode ? (
              <input
                type="text"
                name="code"
                className="form-control back-ground mt-3"
                placeholder="کد خود را وارد کنید"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            ) : (
              <input
                type="text"
                name="phoneNumber"
                className="form-control back-ground"
                placeholder=" شماره موبایل خود را وارد نمایید"
                id="phone-number"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                maxLength={11}
              />
            )}

            <div className="w-100 mt-4">
              <button
                className="btn btn-login btn-block w-100 p-2"
                type="submit"
              >
                ورود
              </button>
            </div>
          </form>

          <div className="notes">
            <span>
              ورود شما به معنای پذیرش شرایط کارآنلاین و قوانین و حریم خصوصی است.
            </span>
          </div>
        </div>
      </div>
    </Loading>
  );
}
