import React from "react";

function ContactUs(props) {
  return (
    <>
      <h3 className="font-size-4x dark-color mb-1">با ما در تماس باشید</h3>
      <h5 className="font-size-1x text-color">
        با متخصصین ما ارتباط برقرار کنید! <br />
        در اولین موقعیت با شما تماس خواهند گرفت.
      </h5>

      <div className="mt-4">
        <span className="font-size-1x text-color">شماره تماس: </span>
        <a href="tel:+989123456789" className="link">
          09123456789
        </a>
        <span className="font-size-1x text-color px-2"> - </span>
        <a href="tel:+989363179310" className="link">
          09363179310
        </a>
      </div>

      <div className="mt-4">
        <span className="font-size-1x text-color">آدرس: </span>
        <a href="tel:+989123456789" className="link">
          09123456789
        </a>
        <span className="font-size-1x text-color px-2"> - </span>
        <a href="tel:+989363179310" className="link">
          09363179310
        </a>
      </div>
    </>
  );
}

export default ContactUs;
