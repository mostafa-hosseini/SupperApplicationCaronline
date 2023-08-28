
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaFileArchive, FaPlus, FaPowerOff, FaShower, FaUser, FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { shareOnMobile } from "react-mobile-share";
import Loading from "../../components/Loading";
import http from "../../api";
import UseCheckAdmin from "../../hooks/UseCheckAdmin";

export default function AdminDashboard() {
    const api = http();
    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(true);
    const isAdmin = UseCheckAdmin();

    const navigate = useNavigate();

    useEffect(() => {
        if (!isAdmin) {
            navigate("/", { replace: true })
        }
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





            <div className="w-100 h-auto p-4 back-ground my-3 row align-items-center">
                <div className="col-12 d-flex align-items-center justify-content-center mb-3">
                    <button className="btn btn-custom-success px-5 d-flex align-items-center" onClick={() => navigate("/AddNewStory")}>
                        <FaPlus size={35} style={{ marginLeft: "10" }} />
                        <h5 className="me-2 mb-0">ایجاد استوری</h5>
                    </button>
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center mb-3">
                    <button className="btn btn-custom-primary px-5 d-flex align-items-center" onClick={() => navigate("/ManageStory")}>
                        <FaFileArchive size={35} style={{ marginLeft: "10" }} />
                        <h5 className="me-2 mb-0">مشاهده استوری های ایجاد شده</h5>
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

