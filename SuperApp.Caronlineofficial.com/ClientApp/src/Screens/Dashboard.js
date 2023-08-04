import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPowerOff, FaUser, FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import http from "../api";
import Loading from "../components/Loading";
import { shareOnMobile } from "react-mobile-share";

export default function Dashboard() {
  const api = http();
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const callback = ({ data }) => {
      setData(data);
      setLoaded(false);
    };

    const errorHandler = (e) => {
      setLoaded(false);
      navigate("/");
      toast.error("ابتدا در سایت وارد شوید.");
    };

    api.GetUserDashboard(callback, {}, errorHandler);
    return () => { };
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("با موفقیت خارج شدید!");
  };

  return (
    <Loading isLoading={loaded}>
      <div className="w-100 h-auto p-4 back-ground row dashboard-title">
        <div className="col-auto">
          <div className="icon-aut ">
            <FaUser size={50} color="#000" />
          </div>
        </div>
        <div className="col-auto">
          <h2 className="dark-color">{data.fullName} عزیز خوش آمدید</h2>
          <h4 className="text-color font-size-2x">{data.phoneNumber}</h4>
        </div>
        <div className="w-100"></div>
      </div>

      <div className="w-100 h-auto p-4 back-ground mt-3 d-flex flex-column align-items-center">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <h5 className="text-dark mt-3 " style={{ marginLeft: 10 }} onClick={() => {
            navigator.clipboard.writeText(
              "https://superapp.caronlineOfficial.com/register?ref=" + data.refCode
            );
            toast.success("کد سفیر در کلیپ بورد شما کپی شد!");
          }}>
            کد سفیر شما :
            <span style={{ color: "green", paddingLeft: "10" }}>
              {data.refCode}
            </span>
          </h5>
        </div>

        <h5 className="text-dark mt-2 text-center mb-4">
          درصدی از سود معاملات کسانی که با کد سفیر شما در این اپلیکیشن ثبت نام
          کنند به صورت دائم به شما تعلق خواهد گرفت.
        </h5>

        <button className="btn btn-custom-success px-5"   onClick={() =>
                  shareOnMobile(
                    {
                      // text: "سلام رفیق \n مشاین تو ی سوپر اپلیکیشن خودرو که میتونی رایگان توش آگهی بزاری یا قیمت ماشینتو محاسبه کنی یا از قیمت روز خودرو باخبر بشی همه ی اینها بهعلاوه کلی امکانات دیگه و تخفیفات جذاب بیمه ای با لینک زیر نصب کن و حالش رو ببر",
                      url: "https://superapp.caronlineofficial.com/register?ref=" + data.refCode,
                      title:
                        "سلام رفیق \n ماشین تو ، ی سوپر اپلیکیشن خودرویی که میتونی رایگان ماشینتو آگهی کنی یا قیمت ماشینتو محاسبه کنی یا از قیمت روز خودرو باخبر بشی همه ی اینها بعلاوه ی کلی امکانات دیگه و تخفیفات جذاب بیمه ای با یک کلیک برات مهیا میشن \n بزن رو لینک زیر ثبت نام کن و حالش رو ببر",
                      text: "Hey checkout our package react-mobile-share",
                      // image : imgBase64,
                    },
                    (message) => {
                      navigator.clipboard.writeText(
                        "https://superapp.caronlineofficial.com/register?ref=" + data.refCode
                      );
                      toast.success("کد سفیر در کلیپ بورد شما کپی شد!");
                    }
                  )
                }>دعوت از دوستان</button>
      </div>

      <div className="w-100 h-auto p-4 back-ground mt-3 row align-items-center">
        <div className="col-12">
          <h4 className="text-center text-dark mb-0">
            تعداد کاربران دعوت شده ({data.invitedUser})
          </h4>
        </div>

        <div className="w-100"></div>
      </div>

      <div className="w-100 h-auto p-4 back-ground my-3 row align-items-center">
        <div className="col-12 d-flex align-items-center justify-content-center mb-3">
          <button className="btn btn-custom-primary px-5 d-flex align-items-center">
            <FaUserEdit size={35} style={{ marginLeft: "10" }} />
            <h5 className="me-2 mb-0">ویرایش حساب کاربری</h5>
          </button>
        </div>

        <div className="col-12 d-flex align-items-center justify-content-center">
          <button className="btn btn-login px-5 d-flex align-items-center">
            <FaPowerOff size={35} color="white" style={{ marginLeft: "10" }} />
            <h5 className="me-2 mb-0" onClick={logOutHandler}>
              خروج از حساب
            </h5>
          </button>
        </div>
      </div>
    </Loading>
  );
}
