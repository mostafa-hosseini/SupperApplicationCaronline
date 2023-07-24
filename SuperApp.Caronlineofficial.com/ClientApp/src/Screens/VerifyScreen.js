import React from 'react'
import { FaUserPlus } from 'react-icons/fa'

export default function VerifyScreen() {
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
                placeholder=""
                id=""
              />
            </div>
            <div className="col-12 mt-3">
              <div className="btn btn-success btn-block w-100 p-2">دریافت کد</div>
            </div>
          </div>
        </div>
      </div>
    )
}
