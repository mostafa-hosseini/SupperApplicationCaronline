import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
// import { NavbarToggler } from "reactstrap";
import "react-modern-drawer/dist/index.css";
import { CiUser, CiWallet } from "react-icons/ci";
// import { CiMenuKebab} from "react-icons/ci";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigate();
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
            <button
              // onClick={() => setIsOpen(!isOpen)}
              type="button"
              class="btn menu-btn ms-2"
            >
              <CiWallet size={25} />
            </button>

            <div
              // onClick={() => setIsOpen(!isOpen)}
              class="account-hover menu-btn"
            >
              <CiUser size={23} />

              <ul>
                <li><Link to="/Login">ورود</Link></li>
                <li><Link to="/Register">ثبت نام</Link></li>
              </ul>
            </div>
          </div>

          {/* <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            class=" btn "
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
      {false && (
        <div className="row">
          <div className="header-container">
            <Drawer
              open={isOpen}
              onClose={() => setIsOpen(!isOpen)}
              direction="right"
              className="drawer-container d-flex flex-column justify-content-between pb-5"
              style={{ overflowY: "auto" }}
            >
              <ul className="drawer-list">
                <li className="drawer-list-item mt-4">
                  <IoHomeOutline style={{ marginLeft: 10 }} />

                  <span onClick={() => navigation("/")}>صفحه اصلی</span>
                </li>
                {/* <li className="drawer-list-item mt-4">
            <GiCarKey style={{ marginLeft: 10 }} />

            <span href={status ? "/buycar" : "login"}>درخواست خرید خودرو</span>
          </li> */}
                <li className="drawer-list-item mt-4">
                  <BiLineChart style={{ marginLeft: 10 }} />
                  <span onClick={() => navigation("/carprice")}>
                    قیمت روز خودرو
                  </span>
                </li>
                <li className="drawer-list-item mt-4">
                  <RiFindReplaceLine style={{ marginLeft: 10 }} />

                  <span onClick={() => navigation("/search")}>
                    راهنمای خرید خودرو
                  </span>
                </li>
                <li className="drawer-list-item mt-4">
                  <AiOutlineCalculator style={{ marginLeft: 10 }} />
                  <span onClick={() => navigation("/محاسبه-قیمت")}>
                    محاسبه قیمت خودرو
                  </span>
                </li>
                {/* <li className="drawer-list-item mt-4">
            <GrCircleInformation style={{ marginLeft: 10 }} />
            <span href="/#">درباره ما</span>
          </li> */}
                <li className="drawer-list-item mt-4">
                  <FaRegHandshake style={{ marginLeft: 10 }} />
                  <span onClick={() => navigation("/cooperation")}>
                    همکاری با ماشین تو
                  </span>
                </li>
                <li className="drawer-list-item mt-4">
                  <IoStorefrontOutline style={{ marginLeft: 10 }} />
                  <span onClick={() => navigation("/shop")}>فروشگاه</span>
                </li>
                {/* <li className="drawer-list-item mt-4">
            <IoCarOutline style={{ marginLeft: 10 }} />
            <span
              onClick={() =>
                navigation(`/ads?categoryId=${2}`, {
                  title: " آگهی های قیمت مناسب",
                })
              }
            >
              آگهی های قیمت مناسب
            </span>
          </li> */}
                <li className="drawer-list-item mt-4">
                  <MdOutlinePrivacyTip style={{ marginLeft: 10 }} />
                  <span onClick={() => navigation(`/Privacy`)}>
                    قوانین و مقررات
                  </span>
                </li>
                <li className="drawer-list-item mt-4">
                  <MdOutlineReportProblem style={{ marginLeft: 10 }} />
                  <span
                    onClick={() =>
                      navigation(`/problem`, {
                        title: " آگهی های قیمت مناسب",
                      })
                    }
                  >
                    ثبت مشکل کاربری
                  </span>
                </li>
                <li className="drawer-list-item mt-4">
                  <BiMobileAlt style={{ marginLeft: 10 }} />
                  <span onClick={() => navigation(`/InstallIos`)}>
                    راهنمای نصب در ios
                  </span>
                </li>
                {/* <li className="drawer-list-item mt-4">
            <BiMobile style={{ marginLeft: 10 }} />
            <span onClick={() => navigation(`/InstallAndroid`)}>
              راهنمای نصب در android
            </span>
          </li> */}

                <>
                  <li className="drawer-list-item mt-4">
                    <IoMdLogIn style={{ marginLeft: 10 }} />
                    <span class="" onClick={() => navigation("/login")}>
                      ورود
                    </span>
                  </li>
                  <li className="drawer-list-item mt-4">
                    <IoPersonAddOutline style={{ marginLeft: 10 }} />
                    <span class="" onClick={() => navigation("/register")}>
                      ثبت نام
                    </span>
                  </li>
                </>
              </ul>
              <div
                style={{ marginTop: "auto" }}
                class="justify-content-center align-items-end mb-3"
              >
                <h6 class="text-center text-dark cp">
                  All &nbsp; &nbsp; rights &nbsp;&nbsp; reserved &nbsp;&nbsp;for
                  <br />
                  mashinto.com
                  <br />
                  ©powered &nbsp; &nbsp; by &nbsp; &nbsp; CarOnline
                  <br />
                  <span>2023</span>
                </h6>
              </div>
            </Drawer>
          </div>
        </div>
      )}
    </div>
  );
}
