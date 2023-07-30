import React from "react";
import Accordion from "../components/Accordion";
import logo from "../assets/images/Icons/logo/caronline.png";

function Faq(props) {
  return (
    <div>
      <div className="faq-header">
        <img src={logo} alt="faq icon" />
        <h3 className="title">سولات متداول</h3>
        <h4 className="desc">سوالاتی که کاربران دیگر درمورد ما داشتند.</h4>
      </div>

      <Accordion
        data={[
          {
            id: "item-1",
            title: " چرا به بیمه شخص ثالث نیاز داریم؟",
            desc: "بله",
          },
          {
            id: "item-2",
            title: " چرا به بیمه شخص ثالث نیاز داریم؟",
            desc: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن ب",
          },
          {
            id: "item-3",
            title: " چرا به بیمه شخص ثالث نیاز داریم؟",
            desc: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن ب",
          },
          {
            id: "item-4",
            title: " چرا به بیمه شخص ثالث نیاز داریم؟",
            desc: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن ب",
          },
          {
            id: "item-5",
            title: " چرا به بیمه شخص ثالث نیاز داریم؟",
            desc: "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن ب",
          },
        ]}
      />
    </div>
  );
}

export default Faq;