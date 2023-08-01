import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// bui0ld in lib
import "swiper/css";
import "./Residencies.css";
import data from "../utils/slider.json";
import { sliderSettings } from "../utils/common";
const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>




        {/* Now Slider */}
      {/* Destructuring Props in Slider Settinng as Props */}
      <Swiper {...sliderSettings}>
        {/* Comp for button */}
        <SliderButton />
        {data.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="flexColStart r-card">
              {/* 1st child */}
              <img src={card.image} alt="" />
              {/* 2nd Child */}
              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
              </span>

              <span className="primaryText">{card.name}</span>
              <span className="secondaryText">{card.detail}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      </div>

      
    </section>
  );
};
// import {Swiper , SwiperSlide , useSwiper} from 'swiper/react';
export default Residencies;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()} > &lt;</button>
      <button onClick={() => swiper.slideNext()}> &gt; </button>
    </div>
  );
};
