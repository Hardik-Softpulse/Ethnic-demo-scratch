import React from 'react';
import aboutBanner from '../img/about-banner.jpg';
import aboutFeature from '../img/about-feature.jpg';
import aboutimg1 from '../img/about-exp-image-1.jpg';
import aboutimg2 from '../img/about-exp-image-2.jpg';
import aboutimg3 from '../img/about-exp-image-3.jpg';
import { BrandSection } from '~/components';



function About() {
  return (
    <div className="about-page clearfix">
      <div className="about-banner">
        <img src={aboutBanner} />
        <div className="about-banner-txt">
          <div className="container">
            <h2>About us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type.
            </p>
          </div>
        </div>
      </div>
      <div className="about-imgtext">
        <div className="container dfx">
          <div className="about-i1mage">
            <img src={aboutFeature} />
          </div>
          <div className="about-t1ext">
            <h2>Who We are?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className="about-imgtext i2">
        <div className="container dfx">
          <div className="about-i1mage">
            <img src={aboutFeature} />
          </div>
          <div className="about-t1ext">
            <h2>Who We do?</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <div className="about-exp-text">
        <div className="container">
          <div className="row flxanst">
            <div className="about-ex-col about-etext">
              <h2>Explore us</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <div className="about-ex-col about-eimage">
              <div className="about-eimg-bx">
                <img src={aboutimg1} />
              </div>
            </div>
            <div className="about-ex-col about-eimage">
              <div className="about-eimg-bx">
                <img src={aboutimg2} />
              </div>
            </div>
            <div className="about-ex-col about-eimage">
              <div className="about-eimg-bx">
                <img src={aboutimg3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BrandSection />
    </div>
  );
}

export default About;
