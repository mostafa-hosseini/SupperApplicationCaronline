import React from "react";
import { CiBullhorn } from "react-icons/ci";
import icon1 from "../assets/images/Icons/amoozesh-01.png";
import icon2 from "../assets/images/Icons/froshgah-01.png";
import icon3 from "../assets/images/Icons/bimeh-01.png";
import icon4 from "../assets/images/Icons/graphic-01.png";

function Story(props) {
  return (
    <>
      <div className="story-top">
        <p className="title">آخرین اخبار</p>
        <span className="menu-btn img-icon">
          <CiBullhorn color="#161619" size={24} />
        </span>
      </div>

      <div className="story-wrapper">
        <a href="/" className="story-item">
          <img src={icon1} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon2} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon3} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon4} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon1} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon2} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon3} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon4} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon1} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon2} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon3} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon4} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon1} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon2} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon3} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon4} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon1} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon2} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon3} alt="?" />
        </a>
        <a href="/" className="story-item">
          <img src={icon4} alt="?" />
        </a>
        
      </div>
    </>
  );
}

export default Story;
