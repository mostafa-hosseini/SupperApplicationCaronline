import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./assets/styles/custom.css";
import "./assets/styles/mobile.css";
import "./assets/styles/desktop.css";
import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";


export default function App() {
  return (
    <Layout>
      <Routes>
        {AppRoutes.map((route, index) => {
          const { element, ...rest } = route;
          return <Route key={index} {...rest} element={element} />;
        })}
      </Routes>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    </Layout>
  );
}
