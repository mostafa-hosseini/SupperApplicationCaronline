import React, { useState } from "react";
import logo from "../../assets/images/Icons/logo/caronline.png";
import Loading from "../../components/Loading";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import toast from "react-hot-toast";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [phonenumber, setPhonenumber] = useState(0);

  const loginSubmit = () => {
    setLoading(true);
    console.log(phonenumber);

    setTimeout(() => {
      setLoading(false);
      setIsRegister(true);
      toast.success("کد با موفقیت برای شما ارسال شد!");
    }, 1000);
  };

  return (
    <Loading opacity logo={false} isLoading={loading}>
      <div className="login-wrapper">
        <div className="login-box">
          <div className="login-img">
            <img src={logo} alt="car online logo" />
          </div>

          {isRegister ? (
            <RegisterForm phonenumber={phonenumber} setLoading={setLoading} />
          ) : (
            <LoginForm
              submit={loginSubmit}
              changePhonenumber={setPhonenumber}
            />
          )}

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
