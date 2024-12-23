import React, { useEffect, useState } from "react";
// import React, { Component } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { GoReport } from "react-icons/go";
import {
  IoCallOutline,
  IoDocumentTextOutline,
  IoHomeOutline,
  IoLogInOutline,
  IoPeopleOutline,
  IoPersonAddOutline,
  IoPersonOutline
} from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiMessages } from "react-icons/ti";
import Drawer from "react-modern-drawer";
// import { NavMenu } from "./NavMenu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
// import { NavbarToggler } from "reactstrap";
import toast from "react-hot-toast";
import "react-modern-drawer/dist/index.css";
import UseAuth from "../hooks/UseAuth";
import UseCheckAdmin from "../hooks/UseCheckAdmin";
// import NavToggle from "./NavToggle";
// import { CiMenuKebab} from "react-icons/ci";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const loggedIn = UseAuth();
  const navigation = useNavigate();
  const location = useLocation();
  const isAdmin = UseCheckAdmin()
  const [time, settime] = useState("");
  const [date, setdate] = useState("")
  const logOutHandler = () => {
    localStorage.removeItem("token");
    navigation.push("/");
    toast.success("با موفقیت خارج شدید!");
  };

  useEffect(() => {
    const weekday = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];
    const weekdayEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date();
    const persian = new Date().toLocaleDateString('fa-IR');
    const enDate = new Date().toLocaleDateString("en-US", { year: "numeric", day: "numeric", month: "short", });

    const day = weekday[date.getDay()];
    settime(enDate + " " + weekdayEn[date.getDay()])

    setdate(day + " " + persian)
    // settime(date+" ")
    // const timer = setInterval(() => {
    //   const d = new Date();
    //   let hour = d.getHours() + ":" + ("0" + d.getMinutes().toString()).slice(-2);
    //   settime(hour);
    // }, 500);
    // return () => {
    //   clearInterval(timer)
    // }
  }, [])


  return (
    <div>
      <header>
        <Navbar
          className={`navbar-expand-sm navbar-toggleable-sm ng-white border-bottom align-items-center box-shadow${location.pathname !== "/" ? " mb-3" : " mb-3"
            }`}
          container
          light
        >
          {/* <NavbarToggler onClick={() => setIsOpen(!isOpen)} className="mr-2" /> */}
          <div className="d-flex ">
            {/* <button type="button" className="btn menu-btn img-icon ms-2">
              <img src={walletImg} alt="user icon" />
            </button> */}

            <button
              type="button"
              className="btn menu-btn img-icon ms-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* <NavToggle onClick={() => setIsOpen(!isOpen)} isActive={isOpen} /> */}
              <RxHamburgerMenu size={68} />
            </button>
            {/* 
            <div
              // onClick={() => setIsOpen(!isOpen)}
              className="account-hover menu-btn img-icon"
            >
              <img src={userImg} alt="user icon" onClick={loggedIn ? () => {
                if (isAdmin) {

                  navigation("/adminDashboard")
                } else {
                  navigation("/dashboard")
                }
              } : () => { }} />

              {!loggedIn ? (
                <ul>
                  <li>
                    <Link to="/Login">ورود</Link>
                  </li>
                  <li>
                    <Link to="/Register">ثبت نام</Link>
                  </li>
                </ul>
              ) : (
                null
              )}
            </div> */}
          </div>

          {/* <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className=" btn "
          >
            <CiMenuKebab size={25} />
          </button> */}

          <div className="d-flex align-items-center">
            <NavbarBrand tag={Link} to="/">
              <img
                src={require("../assets/images/logoapp.png")}
                style={{ width: 135, height: 25 }}
                alt="caronline logo"
              />
            </NavbarBrand>


          </div>

          <div className="d-flex align-items-center">
            {location.pathname == "/" ?
              <h6 className="text-center text-mobile-time time-body">
                {time}
                <br />
                {date}
              </h6> : <></>}
            {location.pathname !== "/" ? (
              <button
                type="button"
                onClick={() => navigation(-1)}
                className="btn menu-btn img-icon me-2 back-button"
              >
                <AiOutlineLeft size={68} />
              </button>
            ) : (
              <></>
            )}
          </div>
        </Navbar>
      </header>
      <div className="container-fluid" tag="main">
        {children}
      </div>
      <div className="row">
        <div className="header-container">
          <Drawer
            open={isOpen}
            onClose={() => setIsOpen(!isOpen)}
            direction="bottom"
            className="drawer-container d-flex flex-column justify-content-between py-4"
            style={{ overflowY: "auto" }}
          >
            <ul className="drawer-list">
              <li className={`drawer-list-item`}>
                <Link className="link" onClick={() => setIsOpen(false)} to="/">
                  <IoHomeOutline size={18} style={{ marginLeft: 10 }} />
                  صفحه اصلی
                </Link>
              </li>

              <li className={`drawer-list-item`}>
                <Link
                  className="link"
                // onClick={() => setIsOpen(false)}
                // to="/About-Us"
                >
                  <IoPeopleOutline size={18} style={{ marginLeft: 10 }} />
                  درباره ما
                </Link>
              </li>

              {loggedIn ? <li className={`drawer-list-item`}>
                <Link
                  className="link"
                  onClick={() => setIsOpen(false)}
                  to={isAdmin ? "/adminDashboard" : "/dashboard"}
                >
                  <IoPersonOutline size={18} style={{ marginLeft: 10 }} />
                  حساب کاربری
                </Link>
              </li> : <>
                <li className={`drawer-list-item`}>
                  <Link
                    className="link"
                    onClick={() => setIsOpen(false)}
                    to="/register"
                  >
                    <IoPersonAddOutline size={18} style={{ marginLeft: 10 }} />
                    ثبت نام
                  </Link>
                </li>    <li className={`drawer-list-item`}>
                  <Link
                    className="link"
                    onClick={() => setIsOpen(false)}
                    to="/login"
                  >
                    <IoLogInOutline size={18} style={{ marginLeft: 10 }} />
                    ورود
                  </Link>
                </li>
              </>}

              <li className={`drawer-list-item`}>
                <Link
                  className="link"
                // onClick={() => setIsOpen(false)}
                // to="/Contact-Us"
                >
                  <IoCallOutline size={18} style={{ marginLeft: 10 }} />
                  تماس با ما
                </Link>
              </li>

              <li className={`drawer-list-item`}>
                <Link
                  className="link"
                // onClick={() => setIsOpen(false)}
                // to="/Faq"
                >
                  <TiMessages size={18} style={{ marginLeft: 10 }} />
                  سوالات متداول
                </Link>
              </li>

              <li className={`drawer-list-item`}>
                <Link
                  className="link"
                // onClick={() => setIsOpen(false)}
                // to="/Report-error"
                >
                  <GoReport size={18} style={{ marginLeft: 10 }} />
                  گزارش مشکل
                </Link>
              </li>

              <li className={`drawer-list-item`}>
                <Link
                  className="link"
                // onClick={() => setIsOpen(false)}
                // to="/Policy"
                >
                  <IoDocumentTextOutline size={18} style={{ marginLeft: 10 }} />
                  قوانین و مقررات
                </Link>
              </li>
            </ul>
            {/* <div
              style={{ marginTop: "auto" }}
              className="justify-content-center align-items-end mb-3"
            >
              <h6 className="text-center text-dark cp">
                All &nbsp; &nbsp; rights &nbsp;&nbsp; reserved &nbsp;&nbsp;for
                <br />
                mashinto.com
                <br />
                ©powered &nbsp; &nbsp; by &nbsp; &nbsp; CarOnline
                <br />
                <span>2023</span>
              </h6>
            </div> */}
          </Drawer>
        </div>
      </div>
    </div>
  );
}
