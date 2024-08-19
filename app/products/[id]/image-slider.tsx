"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider({ images }: any) {
  const settings = {
    dots: true,
    // lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-track display: 'flex'">
      <Slider {...settings}>
          {images.map((i: any) => (
            <div key={i.image}>
              <img src={i.image} alt="i" />
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
