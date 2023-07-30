import React, { useState } from "react";
import logo from "../assets/images/Icons/logo/caronline.png";
import Loading from "../components/Loading";
import toast from "react-hot-toast";
import { validatePhone } from "../utils/validate";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitPhone = (e) => {
    e.preventDefault();

    if (validatePhone(phonenumber) && password.trim().length) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        toast.success("با موفقیت وارد شدید!");
        navigate("/");
      }, 1000);
    } else {
      if (!validatePhone(phonenumber)) {
        toast.error("لطفا شماره تماس خود را به درستی وارد کنید!");
      } else {
        toast.error("لطفا رمزعبور خود را وارد کنید.");
      }
    }
  };

  return (
    <Loading opacity hasLogo={false} isLoading={loading}>
      <div className="login-wrapper">
        <div className="login-box">
          <div className="login-img">
            <img src={logo} alt="car online logo" />
          </div>

          <form onSubmit={submitPhone} className="w-100">
            <div className="login-text w-100 mb-2">
              <h3 className="title">ورود</h3>
              <h4 className="desc">
                برای ورود شماره موبایل و رمزعبور خود را وارد کنید.
              </h4>
            </div>

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

            <input
              type="password"
              name="password"
              className="form-control back-ground mt-3"
              placeholder="رمزعبور خود را وارد کنید"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="w-100 mt-4">
              <button className="btn btn-login btn-block w-100 p-2">
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
