import React from "react";
import { useState } from "react";

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
        <h3 className="font-size-4x dark-color mb-2">گزارش مشکلات</h3>
        <h5 className="font-size-small text-color">
         به ما در راستای پیشرفت کمک کنید.
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
              placeholder="مشکل پیدا شده"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="Message-input"
              rows={5}
            />
          </div>

          <div className="col-12 col-lg-6 mt-3">
            <button type="submit" className="btn btn-login btn-block w-100 p-2">
              ثبت مشکل
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
