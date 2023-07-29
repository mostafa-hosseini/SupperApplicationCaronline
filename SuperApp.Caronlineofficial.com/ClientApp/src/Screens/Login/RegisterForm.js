import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login({ phonenumber, setLoading }) {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const submitPhone = (e) => {
    e.preventDefault();
    setLoading(false);

    setTimeout(() => {
      setLoading(true);
      toast.success("با موفقیت وارد شدید!");
      navigate("/");
    }, 2000);
  };

  return (
    <form onSubmit={submitPhone} className="w-100">
      <div className="login-text w-100 mb-2">
        <h3 className="title">ورود / ثبت نام</h3>
        <h4 className="desc">
          کد ارسال شده به شماره
          <span className="primary-color"> {phonenumber} </span>
          را وارد کنید.
        </h4>
      </div>

      <input
        type="text"
        name="phoneNumber"
        className="form-control back-ground"
        placeholder="کد خود را وارد کنید."
        id="code-input"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <div className="w-100 mt-4">
        <button className="btn btn-login btn-block w-100 p-2">ورود</button>
      </div>
    </form>
  );
}
