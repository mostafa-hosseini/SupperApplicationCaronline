import React from "react";
import { FaUser, FaUserLock, FaUserPlus } from "react-icons/fa";

export default function Login() {
  return (
    <div className="row " style={{ height: "90vh" }}>
      <div
        className="col-10 col-md-8 mx-auto row"
        style={{ maxHeight: "35vh" }}
      >
        <div className="w-100 p-4 back-ground shadow mt-5 row">
          <div className="col-auto mx-auto">
            <div className="icon-aut ">
              <FaUserLock size={50} color="#000" />
            </div>
          </div>
          <div className="w-100"></div>

          <div className="col-12 mt-3">
            <h3 className="text-center mb-2">ورود به حساب کاربری</h3>
          
            <input
              type="text"
              name="phoneNumber"
              className="form-control back-ground"
              placeholder=" شماره موبایل خودرا وارد نمایید"
              id=""
            />
          </div>
          <div className="col-12 mt-3">
            <input
              type="text"
              name="password"
              className="form-control back-ground"
              placeholder="کلمه عبور را وارد نمایید"
              id=""
            />
          </div>
          <div className="col-12 mt-3">
            <div className="btn btn-success btn-block w-100 p-2">ورود</div>
          </div>
        </div>
      </div>
    </div>
  );
}
