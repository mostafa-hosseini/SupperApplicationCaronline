import React, { useState, useEffect } from "react";
import logo from "../assets/images/Icons/logo/caronline.png";
import Loading from "../components/Loading";
import toast from "react-hot-toast";
import http from "../api/index";
import { validatePhone } from "../utils/validate";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [phonenumber, setPhonenumber] = useState("");
  const [code, setCode] = useState("");
  const [isCode, setIsCode] = useState(false);
  const { search } = useLocation();
  const values = queryString.parse(search);
  // const [showTimer, setShowTimer] = useState(false);
  // const [timer, setTimer] = useState("02 : 05");

  const navigate = useNavigate();
  const api = http();

  const submitPhone = () => {
    if (validatePhone(phonenumber)) {
      setLoading(true);

      const callback = ({ data }) => {
        setLoading(false);

        if (data.isSuccess) {
          setIsCode(true);
          // setShowTimer(true);
        }
      };

      const errorHandler = (e) => {
        setLoading(false);
        console.log(e);
      };

      api.Register(callback, { phone: phonenumber }, errorHandler);
    } else {
      toast.error("لطفا شماره تماس خود را به درستی وارد کنید!");
    }
  };

  const submitCode = () => {
    if (validatePhone(phonenumber) && code.trim().length) {
      setLoading(true);

      const callback = ({ data }) => {
        setLoading(false);

        if (data.isSuccess) {
          navigate("/CompleteProfile" + "?ref=" + values.ref, { state: { isRegistering: true, }, search: "?ref=" + values.ref });
          localStorage.setItem("token", data.data.code);
        }
      };

      const errorHandler = (e) => {
        setLoading(false);
        console.log(e);
      };

      api.Verify(callback, { phone: phonenumber, code: code }, errorHandler);
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

  // const resetPasswordHandler = () => {
  //   setShowTimer(true);
  //   setTimer(""02 : 05"");
  //   submitCode();
  // };

  // useEffect(() => {
  //   const fullTime = 125;
  //   let minutes = Math.floor(fullTime / 60);
  //   let seconds = fullTime % 60;
  //   let timer = undefined;

  //   if (showTimer) {
  //     timer = setInterval(() => {
  //       if (seconds === 0) {
  //         if (minutes === 0) {
  //           endTimer();
  //         } else {
  //           seconds = 59;
  //           minutes--;
  //         }
  //       } else {
  //         seconds--;
  //       }
  //       setTimer(`${("0" + minutes).slice(-2)} : ${("0" + seconds).slice(-2)}`);
  //     }, 500);
  //   }

  //   const endTimer = () => {
  //     if (timer) {
  //       clearInterval(timer);
  //     }
  //     setShowTimer(false);
  //     // Do Something when time is off.

  //     console.log("time is over!");
  //   };

  //   return () => endTimer;
  // }, [showTimer]);

  useEffect(() => {
    const _token = localStorage.getItem("token");

    if (_token) {
      navigate("/");
      toast.error("شما در سایت وارد شده اید!");
    }
  }, []);

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
                className="form-control back-ground mt-3 text-center"
                maxLength={5}
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

              {/* {isCode && (
                <p className="mb-0 mt-3 text-center ltr">
                  {showTimer ? (
                    timer
                  ) : (
                    <span
                      className="reset-password"
                      onClick={resetPasswordHandler}
                    >
                      ارسال مجدد کد
                    </span>
                  )}
                </p>
              )} */}
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
