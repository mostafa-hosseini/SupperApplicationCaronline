import React from "react";
import { FaPowerOff, FaUser, FaUserEdit } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="row " style={{ height: "90vh" }}>
      <div className="col-10 col-md-8 mx-auto ">
        <div className="w-100 p-4 back-ground mt-5 row align-items-center">
          <div className="col-auto ">
            <div className="icon-aut ">
              <FaUser size={50} color="#000" />
            </div>
          </div>
          <div className="col-auto ">
            <h2 className="text-dark">کاربر عزیز خوش آمدید</h2>
            <h4 className="text-dark">09363179310</h4>
          </div>
          <div className="w-100"></div>
        </div>

        <div className="w-100 p-4 back-ground mt-2 row align-items-center">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <h5 className="text-dark mt-3 " style={{ marginLeft: 10 }}>
              کد سفیر شما :{" "}
              <span style={{ color: "green", paddingLeft: "10" }}>EGIMEW</span>
            </h5>
            <button className="btn btn-primary">دعوت از دوستان</button>
          </div>
          <h5 className="text-dark mt-2">
            درصدی از سود معاملات کسانی که با کد سفیر شما در این اپلیکیشن ثبت نام
            کنند به صورت دائم به شما تعلق خواهد گرفت.
          </h5>
        </div>
        <div className="w-100 p-4 back-ground mt-2 row align-items-center">
          <div className="col-12">
            <h4 className="text-center text-dark">
              تعداد کاربران دعوت شده (0)
            </h4>
          </div>

          <div className="w-100"></div>
        </div>
        <div className="w-100 p-4 back-ground mt-2 row align-items-center">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <FaUserEdit size={35} color="#000" style={{ marginLeft: "10" }} />
            <h5 style={{ marginRight: "10" }}>ویرایش حساب کاربری</h5>
          </div>
        </div>
        <div className="w-100 p-4 back-ground mt-2 row align-items-center">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <FaPowerOff size={35} color="red" style={{ marginLeft: "10" }} />
            <h5 style={{ marginRight: "10" }}>خروج از حساب</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
