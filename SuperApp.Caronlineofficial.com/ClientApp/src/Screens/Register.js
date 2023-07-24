import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import http from '../api/index';
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [input, setinput] = useState({ phoneNumber: "" })
  const api = http();
  const navigate = useNavigate();
  return (
    <div className="row " style={{ height: "90vh" }}>
      <div className="col-10 col-md-8 mx-auto row" style={{ maxHeight: "35vh" }}>
        <div className="w-100 p-4 back-ground mt-5 row">
          <div className="col-auto mx-auto">
            <div className="icon-aut ">
              <FaUserPlus size={50} color="#000" />
            </div>
          </div>
          <div className="w-100"></div>

          <div className="col-12 mt-3">
            <h3 className="text-center mb-2">
              ثبت نام
            </h3>
            <h6 className="text-center">
              برای ثبت نام شماره موبایل خودرا وارد نمایید
            </h6>
            <input
              type="text"
              name="phoneNumber"
              className="form-control back-ground"
              placeholder="09120000000"
              id=""
              onChange={(e) => setinput({ ...input, phoneNumber: e.target.value })}
              value={input.phoneNumber}
            />
          </div>
          <div className="col-12 mt-3">
            <div onClick={() => {
              api.Register(({ data }) => {
                if (data.isSuccess) {
                  navigate("/verify", { state: { phoneNumber: input.phoneNumber } })
                }
              }, { phone: input.phoneNumber })
            }} className="btn btn-success btn-block w-100 p-2">دریافت کد</div>
          </div>
        </div>
      </div>
    </div>
  );
}
