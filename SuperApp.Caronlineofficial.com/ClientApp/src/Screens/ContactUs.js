import React from "react";
import { useState } from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

function ContactUs(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    const data = {
      fullName: name,
      email: email,
      title: title,
      message: message,
    };

    console.log(data);
  };
  return (
    <div className="back-ground bg-light-custom px-3 py-4 h-auto mb-4">
      <div className="text-center">
        <h3 className="font-size-4x dark-color mb-2">با ما در تماس باشید</h3>
        <h5 className="font-size-small text-color">
          با متخصصین ما ارتباط برقرار کنید! <br />
          در اولین موقعیت با شما تماس خواهند گرفت.
        </h5>
      </div>

      <form onSubmit={formSubmit}>
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-6 mt-3">
            <input
              type="text"
              name="FullName"
              className="p-2 form-control back-ground "
              placeholder="نام و نام خانوادگی"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="FullName-input"
            />
          </div>

          <div className="col-12 col-lg-6 mt-3">
            <input
              type="text"
              name="Email"
              className="p-2 form-control back-ground "
              placeholder="ایمیل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="Email-input"
            />
          </div>

          <div className="col-12 mt-3">
            <input
              type="text"
              name="Title"
              className="p-2 form-control back-ground "
              placeholder="موضوع "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="Title-input"
            />
          </div>

          <div className="col-12 mt-3">
            <textarea
              name="Message"
              className="p-2 form-control back-ground h-auto"
              placeholder="پیام شما "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="Message-input"
              rows={5}
            />
          </div>

          <div className="col-12 col-lg-6 mt-3">
            <button type="submit" className="btn btn-login btn-block w-100 p-2">
              ارسال پیام
            </button>
          </div>
        </div>
      </form>

      <div className="row mt-4">
        <div className="col-12 col-lg-6">
          <div className="contact-box">
            <div className="ms-3">
              <AiOutlinePhone size={40} />
            </div>
            <div className="contact-text">
              <span>شماره تماس </span>
              <a href="tel:+989123456789" className="link">
                09123456789
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="contact-box">
            <div className="ms-3">
              <AiOutlineMail size={40} />
            </div>
            <div className="contact-text">
              <span>ایمیل</span>
              <a href="mailto:test@mail.com" className="link">
                test@mail.com
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 mt-4">
          <div className="contact-box">
            <div className="ms-3">
              <GoLocation size={40} />
            </div>
            <div className="contact-text">
              <span>آدرس</span>
              <p>
                کرج، بلوار مطهری، بلوار استقلال، خیابان بسیج غربی، پلاک ۱۴، واحد
                ۳
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-4">
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
        کرج، بلوار مطهری، بلوار استقلال، خیابان بسیج غربی، پلاک ۱۴، واحد ۳
      </div> */}
    </div>
  );
}

export default ContactUs;
