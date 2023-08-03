import React, { useState, useEffect } from "react";
// import React, { Component } from "react";
import { AiOutlineCalculator } from "react-icons/ai";
import { BiLineChart, BiMobileAlt } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import {
  IoHomeOutline,
  IoPersonAddOutline,
  IoStorefrontOutline,
} from "react-icons/io5";
// import {
//   IoMenu,
//   IoPersonOutline,
// } from "react-icons/io5";
import { MdOutlinePrivacyTip, MdOutlineReportProblem } from "react-icons/md";
import { RiFindReplaceLine } from "react-icons/ri";
import Drawer from "react-modern-drawer";
// import { NavMenu } from "./NavMenu";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
// import { NavbarToggler } from "reactstrap";
import "react-modern-drawer/dist/index.css";
import toast from "react-hot-toast";
import userImg from "../assets/images/Icons/user.svg";
import walletImg from "../assets/images/Icons/wallet.svg";
import NavToggle from "./NavToggle";
// import { CiMenuKebab} from "react-icons/ci";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigation = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem("token");
    navigation.push("/");
    toast.success("با موفقیت خارج شدید!");
  };

  return (
    <div>
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          container
          light
        >
          {/* <NavbarToggler onClick={() => setIsOpen(!isOpen)} className="mr-2" /> */}
          <div className="d-flex">
            <button type="button" className="btn menu-btn img-icon ms-2">
              <img src={walletImg} alt="user icon" />
            </button>

            <button
              // onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="btn menu-btn img-icon ms-2"
            >
              <NavToggle onClick={() => setIsOpen(!isOpen)} isActive={isOpen} />
            </button>

            <div
              // onClick={() => setIsOpen(!isOpen)}
              className="account-hover menu-btn img-icon"
            >
              <img src={userImg} alt="user icon" />

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
                <ul>
                  <li>
                    <Link to="/Dashboard">داشبورد</Link>
                  </li>
                  <li>
                    <a href="#" onClick={logOutHandler}>
                      خروج از حساب
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className=" btn "
          >
            <CiMenuKebab size={25} />
          </button> */}
          <NavbarBrand tag={Link} to="/">
            <img
              src={require("../assets/images/logoapp.png")}
              style={{ width: 135, height: 25 }}
              alt=""
            />
          </NavbarBrand>
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
            direction="right"
            className="drawer-container d-flex flex-column justify-content-between py-4"
            style={{ overflowY: "auto" }}
          >
            <ul className="drawer-list">
              <li
                className={`drawer-list-item${
                  pathname === "/" ? " active" : ""
                }`}
              >
                <Link className="link" to="/">
                  <IoHomeOutline style={{ marginLeft: 10 }} />
                  صفحه اصلی
                </Link>
              </li>

              <li
                className={`drawer-list-item${
                  pathname === "/خودرو" ? " active" : ""
                }`}
              >
                <Link className="link" to="/خودرو">
                  <BiLineChart style={{ marginLeft: 10 }} />
                  خودرو
                </Link>
              </li>

              <li
                className={`drawer-list-item${
                  pathname === "/املاک" ? " active" : ""
                }`}
              >
                <Link className="link" onClick="/املاک">
                  <RiFindReplaceLine style={{ marginLeft: 10 }} />
                  املاک
                </Link>
              </li>

              <li
                className={`drawer-list-item${
                  pathname === "https://bimehato.com/" ? " active" : ""
                }`}
              >
                <Link className="link" to="https://bimehato.com/">
                  <AiOutlineCalculator style={{ marginLeft: 10 }} />
                  بیمه
                </Link>
              </li>

              <li
                className={`drawer-list-item${
                  pathname === "https://mashverato.com" ? " active" : ""
                }`}
              >
                <Link className="link" to="https://mashverato.com">
                  <FaRegHandshake style={{ marginLeft: 10 }} />
                  مشاوره
                </Link>
              </li>

              <li
                className={`drawer-list-item${
                  pathname === "https://navar.live" ? " active" : ""
                }`}
              >
                <Link className="link" to="https://navar.live">
                  <IoStorefrontOutline style={{ marginLeft: 10 }} />
                  سرگرمی
                </Link>
              </li>

              <li
                className={`drawer-list-item${
                  pathname === "https://academy.caronlineofficial.com"
                    ? " active"
                    : ""
                }`}
              >
                <Link
                  className="link"
                  to="https://academy.caronlineofficial.com"
                >
                  <MdOutlinePrivacyTip style={{ marginLeft: 10 }} />
                  آموزش
                </Link>
              </li>

              <li
                className={`drawer-list-item${
                  pathname === "https://club.caronlineofficial.com"
                    ? " active"
                    : ""
                }`}
              >
                <Link className="link" to="https://club.caronlineofficial.com">
                  <MdOutlineReportProblem style={{ marginLeft: 10 }} />
                  سرمایه گذاری
                </Link>
              </li>

              <li
                className={`drawer-list-item${
                  pathname === "/کلینیک-کسب-و-کار" ? " active" : ""
                }`}
              >
                <Link className="link" to="/کلینیک-کسب-و-کار">
                  <BiMobileAlt style={{ marginLeft: 10 }} />
                  کلینیک کسب و کار
                </Link>
              </li>

              <li
                className={`drawer-list-item${
                  pathname === "/دیده-بان" ? " active" : ""
                }`}
              >
                <Link className="link" to="/دیده-بان">
                  <IoMdLogIn style={{ marginLeft: 10 }} />
                  کریپتو و ارز دیجیتال
                </Link>
              </li>
              <li
                className={`drawer-list-item${
                  pathname === "/" ? " active" : ""
                }`}
              >
                <Link className="link" to="/register">
                  <IoPersonAddOutline style={{ marginLeft: 10 }} />
                  ثبت نام
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
