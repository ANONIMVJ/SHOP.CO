import React, { useRef, useState, useEffect } from 'react';
import './ByDress.scss';
import { BiSolidStar } from 'react-icons/bi';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const testimonials = [
  {
    name: "Sarah M.",
    text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.”`,
  },
  {
    name: "Alex K.",
    text: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
  },
  {
    name: "James L.",
    text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
  },
  {
    name: "James L.",
    text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
  },
  {
    name: "James L.",
    text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
  },
  {
    name: "James L.",
    text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
  },
];

function ByDress() {

  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 420;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 420;
    }
  };

   const handleScroll = () => {
    if (sliderRef.current) {
      const scrollX = sliderRef.current.scrollLeft;
      const cardWidth = 420;
      const index = Math.round(scrollX / cardWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className='container'>
      <div className='dress-wrapper'>
        <h3>BROWSE BY DRESS STYLE</h3>
        <div className='img-wrapper'>
          <div className='img-row'>
            <img style={{width: "408px", height: "289px"}} src="/public/img/bd1_item.png" alt="bd1" />
            <img style={{width: "684px", height: "289px"}} src="/public/img/bd2_item.png" alt="bd2" />
          </div>
          <div className='img-row'>
            <img style={{width: "684px", height: "289px"}} src="/public/img/bd3_item.png" alt="bd3" />
            <img style={{width: "408px", height: "289px"}} src="/public/img/bd4_item.png" alt="bd4" />
          </div>
        </div>
      </div>
        <div className='coments'>
          <div className='customers'>
            <h3>OUR HAPPY CUSTOMERS</h3>
            <div className='icons'>
              <button onClick={scrollLeft}><GoArrowLeft /></button>
              <button onClick={scrollRight}><GoArrowRight /></button>
            </div>
          </div>
          <div className='coment-slider' ref={sliderRef}>
            {testimonials.map((item, index) => {
                const isActive = Math.abs(index - activeIndex) <= 2; 
                return (
                  <div
                    className={`coment-card ${isActive ? 'active' : 'blurred'}`}
                    key={index}
                  >
                  <div className='stars'>
                    {[...Array(5)].map((_, i) => (
                        <BiSolidStar key={i} className='star-icon' />
                      ))}
                    </div>
                      <p className='name'>{item.name} <span className="verified">✔</span></p>
                      <p className='text'>{item.text}</p>
                    </div>
                  );
            })}
          </div>
        </div>
    </div>
  );
}

export default ByDress;