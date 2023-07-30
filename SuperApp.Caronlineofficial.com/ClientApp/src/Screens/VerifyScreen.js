import React, { useEffect, useState } from 'react'
import { FaUserPlus } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom';
import http from '../api/index';

export default function VerifyScreen() {
    const { state } = useLocation();
    const [input, setinput] = useState({ phoneNumber: state.phoneNumber, code: "" });
    const [timer, setTimer] = useState("02 : 05");
    const [showTimer, setShowTimer] = useState(true);
    const api = http();
    const navigate = useNavigate();

    useEffect(() => {
        const fullTime = 125;
        let minutes = Math.floor(fullTime / 60);
        let seconds = fullTime % 60;
        let timer = undefined;

        if (showTimer) {
            timer = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        endTimer();
                    } else {
                        seconds = 59;
                        minutes--;
                    }
                } else {
                    seconds--;
                }
                setTimer(`${("0" + minutes).slice(-2)} : ${("0" + seconds).slice(-2)}`);
            }, 500);
        }

        const endTimer = () => {
            if (timer) {
                clearInterval(timer);
            }
            setShowTimer(false);
            // Do Something when time is off.

            console.log("time is over!");
        };

        return () => { endTimer() };
    }, [showTimer]);



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
                            کد تایید
                        </h3>
                        <h6 className="text-center">
                            لطفا کد تایید ارسال شده به شماره {state.phoneNumber} را وارد کنید.
                        </h6>
                        <input
                            type="text"
                            name="phoneNumber"
                            className="form-control back-ground text-center"
                            placeholder="- - - - -"
                            maxLength={5}
                            value={input.code}
                            onChange={(e) => setinput({ ...input, code: e.target.value })}
                        />
                    </div>
                    <div className="col-12 mt-3">
                        <p className="mb-0 mt-3 text-center " style={{ direction: "ltr" }}>
                            {showTimer ? (
                                timer
                            ) : (
                                <span onClick={() => {
                                    api.SendCode(({ data }) => {
                                        if (data.isSuccess) {
                                            setShowTimer(true)
                                            setinput({ ...input, code: "" })
                                        }
                                    }, { phoneNumber: state.phoneNumber })
                                }}>
                                    ارسال مجدد کد
                                </span>
                            )}
                        </p>
                    </div>
                    <div className="col-12 mt-3">
                        <div className={`btn btn-success btn-block w-100 p-2 ${input.code.length >= 5 ? "" : "disabled"}`} onClick={() => {
                            api.Verify(({ data }) => {
                                if (data.isSuccess) {
                                    localStorage.setItem("token", data.data.code)

                                    navigate("/completeProfile")
                                }
                            }, { code: input.code, phone: input.phoneNumber, redirectUri: "/CompleteProfile" });
                        }}>تایید کد</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
