import React from 'react';
import Swiper from 'swiper';
import 'swiper/css'; // Keep this import only
import './Photos.css';

const Photos = () => {
  React.useEffect(() => {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      pagination: { el: '.swiper-pagination' },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: { el: '.swiper-scrollbar' },
    });
  }, []);

  return (
    <section id="photos">
      <h2>Photos</h2>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="/assets/images/Yokoteyama1.jpg" alt="Forests for Archery" />
            <div className="carousel-caption">Forests for Archery</div>
          </div>
          <div className="swiper-slide">
            <img src="/assets/images/Yokoteyama2.jpg" alt="May your aim be true" />
            <div className="carousel-caption">May your aim be true</div>
          </div>
          <div className="swiper-slide">
            <img src="/assets/images/Yokoteyama3.jpg" alt="Hammerfist the cruel" />
            <div className="carousel-caption">Hammerfist the Cruel</div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-scrollbar"></div>
      </div>
    </section>
  );
};

export default Photos;
