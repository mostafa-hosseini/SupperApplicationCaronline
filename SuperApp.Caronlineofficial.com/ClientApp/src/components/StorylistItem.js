import React, { useState } from "react";
import img from "../assets/testImages/download.jpg";
import IconToggle from "./IconToggle";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

function StorylistItem(props) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="story-item">
      <Link className="story-img" to="/news/1">
        <img src={img} alt="?" />
      </Link>

      <div className="top-box">
        <Link to="/news/1" className="title">
          لورم ایپسوم متن
        </Link>
        <div className="icons">
          <span>
            <TbBrandTelegram size={23} />
          </span>

          <Link to="/news/1" className="icon-link">
            <FaRegComment size={23} />
          </Link>

          <IconToggle
            DisableIcon={AiOutlineHeart}
            ActiveIcon={AiFillHeart}
            activeProps={{ size: 24, color: "#e6040b" }}
            desableProps={{ size: 24, color: "#6e6e6e" }}
            onClick={() => console.log("liked")}
          />
        </div>
      </div>
      <div className={`desc-box${showMore ? "" : " show-less"}`}>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>

        <div
          onClick={() => setShowMore(!showMore)}
          style={{ cursor: "pointer" }}
        >
          {showMore ? " نمایش کمتر..." : " نمایش بیشتر..."}
        </div>
      </div>
    </div>
  );
}

export default StorylistItem;
