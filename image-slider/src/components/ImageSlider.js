import React, { useState } from "react";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
function ImageSlider({ slides }) {
  const [position, setPosition] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    // advance slide track to go forward until end, then reset to 0
    setPosition(position === length - 1 ? 0 : position + 1);
  };

  const prevSlide = () => {
    // reverse track until at 0 then reset to end of length
    setPosition(position === 0 ? length - 1 : position - 1);
  };
  console.log(position);
  // validation of slides
  if (!Array.isArray(slides) || slides.length == 0) {
    return null;
  }
  // map all images and display flex
  return (
    <section className="slider">
      <BsFillArrowLeftCircleFill className="left-arrow" onClick={prevSlide} />
      <BsFillArrowRightCircleFill className="right-arrow" onClick={nextSlide} />
      <div className="content">
        <h1>Summer Sale</h1>
        <p>Check out our latest styles</p>
        <button className="shop-btn">SHOP NOW</button>
      </div>
      {slides.map((slide, idx) => {
        return (
          <div
            className={idx === position ? "slide active" : "slide"}
            key={idx}
          >
            {idx === position && (
              <img
                src={slide.image}
                alt="hype beast content"
                className="image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default ImageSlider;
