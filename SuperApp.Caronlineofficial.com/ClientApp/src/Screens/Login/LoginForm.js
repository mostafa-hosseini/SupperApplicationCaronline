import React, { useState, useEffect } from "react";
import { validatePhone } from "../../utils/validate";
import toast from "react-hot-toast";

export default function Login({ submit, changePhonenumber }) {
  const [phonenumber, setPhonenumber] = useState("");

  const submitPhone = (e) => {
    e.preventDefault();

    if (validatePhone(phonenumber)) {
      submit();
    } else {
      toast.error("لطفا شماره تماس خود را به درستی وارد کنید!", {});
    }
  };

  useEffect(() => {
    if (changePhonenumber) {
      changePhonenumber(phonenumber);
    }
  }, [phonenumber]);

  return (
    <form onSubmit={submitPhone} className="w-100">
      <div className="login-text w-100 mb-2">
        <h3 className="title">ورود / ثبت نام</h3>
        <h4 className="desc">لطفا شماره موبایل یا ایمیل خود را وارد کنید.</h4>
      </div>

      <input
        type="text"
        name="phoneNumber"
        className="form-control back-ground"
        placeholder=" شماره موبایل یا ایمیل خود را وارد نمایید"
        id="phone-number"
        value={phonenumber}
        onChange={(e) => setPhonenumber(e.target.value)}
        maxLength={11}
      />
      {/* <input
  type="text"
  name="password"
  className="form-control back-ground"
  placeholder="کلمه عبور را وارد نمایید"
  id=""
/> */}
      <div className="w-100 mt-4">
        <button className="btn btn-login btn-block w-100 p-2">ورود</button>
      </div>
    </form>
  );
}
