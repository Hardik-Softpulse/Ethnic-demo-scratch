import React, {useEffect} from 'react';
import adidas from '../img/adidas.svg';
import nike from '../img/nike.svg';
import crocs from '../img/crocs.svg';
import timberland from '../img/timberland.svg';
import vans from '../img/vans.svg';
import sperry from '../img/sperry.svg';
import converse from '../img/converse.svg';


export function BrandSection() {

  
  return (
    <div className="brands-section mb-80">
      <div className="container">
        <div className="sctn-title text-center">
          <h2 className="h1 text-up">Our Brands</h2>
        </div>
        
          <div className="brands-slider swiper-container">
            <div className="swiper-wrapper">
              <div className="brands-item swiper-slide">
                <img src={adidas} />
              </div>
              <div className="brands-item swiper-slide">
                <img src={nike} />
              </div>
              <div className="brands-item swiper-slide">
                <img src={converse} />
              </div>
              <div className="brands-item swiper-slide">
                <img src={vans} />
              </div>
              <div className="brands-item swiper-slide">
                <img src={sperry} />
              </div>
              <div className="brands-item swiper-slide">
                <img src={timberland} />
              </div>
              <div className="brands-item swiper-slide">
                <img src={crocs} />
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}

