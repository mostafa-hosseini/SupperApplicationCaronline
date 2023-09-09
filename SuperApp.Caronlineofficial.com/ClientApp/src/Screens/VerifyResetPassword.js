import React, { useState, useEffect } from "react";
import logo from "../assets/images/Icons/logo/caronline.png";
import Loading from "../components/Loading";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import http from "../api/index";

export default function VerifyResetPassword() {
    const [loading, setLoading] = useState(false);
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [verifypassword, setverifyPassword] = useState("");

    const { state } = useLocation();
    const api = http();
    const navigate = useNavigate();

    const submitPhone = (e) => {
        e.preventDefault();


        setLoading(true);

        const callback = ({ data }) => {
            setLoading(false);
            if (data.isSuccess) {
                localStorage.setItem("token", data.data);
                navigate("/");
            }
        };

        const errorHandler = (e) => {
            setLoading(false);
            console.log(e);
        };

        api.ResetPassword(
            callback,
            { phoneNumber: state.phonenumber, code, NewPassword: password, ConfirmNewPassword: verifypassword },
            errorHandler
        );

        // setTimeout(() => {
        //   setLoading(false);
        //   toast.success("با موفقیت وارد شدید!");
        //   navigate("/");
        // }, 500);

    };

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

                    <form onSubmit={submitPhone} className="w-100">
                        <div className="login-text w-100 mb-2">
                            <h3 className="title">بازیابی کلمه عبور</h3>
                            <h4 className="desc">
                                کد تایید ارسال شده به {state.phonenumber} را وارد کنید
                            </h4>
                        </div>


                        <input
                            type="code"
                            name="code"
                            className="form-control back-ground mt-3"
                            placeholder="کد تایید : *****"
                            id="password"
                            maxLength="5"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
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
                        <input
                            type="password"
                            name="password"
                            className="form-control back-ground mt-3"
                            placeholder="تکرار کلمه رمزعبور خود را وارد کنید"
                            id="password"
                            value={verifypassword}
                            onChange={(e) => setverifyPassword(e.target.value)}
                        />
                        <div className="w-100 mt-4">
                            <button className="btn btn-login btn-block w-100 p-2">
                                بازیابی کلمه عبور
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </Loading>
    );
}

