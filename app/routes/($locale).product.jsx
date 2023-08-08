import React, {useEffect} from 'react';
import productImg1 from '../img/product-i1.jpg';
import productImg2 from '../img/product-i2.jpg';
import productImg3 from '../img/product-i3.jpg';
import productImg4 from '../img/product-i4.jpg';
import productImg5 from '../img/product-i5.jpg';
import productImg6 from '../img/product-i6.jpg';
import product1 from '../img/product-1.jpg';
import product2 from '../img/product-2.jpg';
import product3 from '../img/product-3.jpg';
import product4 from '../img/product-4.jpg';
import product5 from '../img/product-5.jpg';
import product6 from '../img/product-6.jpg';
import product7 from '../img/product-7.jpg';
import product8 from '../img/product-8.jpg';
import colorSwitch1 from '../img/color-swatch-1.jpg';
import colorSwitch2 from '../img/color-swatch-2.jpg';
import colorSwitch3 from '../img/color-swatch-3.jpg';
import colorSwitch4 from '../img/color-swatch-4.jpg';
import colorSwitch5 from '../img/color-swatch-5.jpg';

function Product() {


  return (
    <div className="product-page clearfix">
      <div className="breadcrumb m-0">
        <div className="container">
          <span>
            <a href="javascript:void(0)">Home</a>
          </span>
          <span>products</span>
        </div>
      </div>
      <div className="product-info-sct">
        <div className="container dfx">
          <div className="product-images flx-auto">
            <div className="product-i1slider swiper-container">
              <div className="swiper-wrapper">
                
                  <div className="swiper-slide product-i1slide">
                    <img src={productImg1} />
                  </div>
                  <div className="swiper-slide product-i1slide">
                    <img src={productImg2} />
                  </div>
                  <div className="swiper-slide product-i1slide">
                    <img src={productImg3} />
                  </div>
                  <div className="swiper-slide product-i1slide">
                    <img src={productImg4} />
                  </div>
                  <div className="swiper-slide product-i1slide">
                    <img src={productImg5} />
                  </div>
                  <div className="swiper-slide product-i1slide">
                    <img src={productImg6} />
                  </div>
               
              </div>
            </div>

            
            <div className="thumb-i1slider swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide thumb-i1slide">
                  <img src={productImg1} />
                </div>
                <div className="swiper-slide thumb-i1slide">
                  <img src={productImg2} />
                </div>
                <div className="swiper-slide thumb-i1slide">
                  <img src={productImg3} />
                </div>
                <div className="swiper-slide thumb-i1slide">
                  <img src={productImg4} />
                </div>
                <div className="swiper-slide thumb-i1slide">
                  <img src={productImg5} />
                </div>
                <div className="swiper-slide thumb-i1slide">
                  <img src={productImg6} />
                </div>
              </div>
            </div>
          </div>
          <div className="product-dscrptn flx-cover">
            <h4>Shopify theme NMD_R1 Shoes</h4>
            <div className="dscrptn-xs lp-05">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </div>
            <div className="product-review dfx lp-05">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  d="M969,293l2.445,5.308L977,299.11l-4.043,4.088L973.944,309,969,306.222,964.056,309l0.987-5.806L961,299.11l5.554-.807Z"
                  transform="translate(-961 -293)"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  d="M969,293l2.445,5.308L977,299.11l-4.043,4.088L973.944,309,969,306.222,964.056,309l0.987-5.806L961,299.11l5.554-.807Z"
                  transform="translate(-961 -293)"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  d="M969,293l2.445,5.308L977,299.11l-4.043,4.088L973.944,309,969,306.222,964.056,309l0.987-5.806L961,299.11l5.554-.807Z"
                  transform="translate(-961 -293)"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  d="M969,293l2.445,5.308L977,299.11l-4.043,4.088L973.944,309,969,306.222,964.056,309l0.987-5.806L961,299.11l5.554-.807Z"
                  transform="translate(-961 -293)"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  d="M969,293l2.445,5.308L977,299.11l-4.043,4.088L973.944,309,969,306.222,964.056,309l0.987-5.806L961,299.11l5.554-.807Z"
                  transform="translate(-961 -293)"
                />
              </svg>
              <span>5 Reviews</span>
            </div>
            <div className="product-i1price">
              <span className="s-price">$120</span>
              <span className="o-price">$140</span>
            </div>
            <form>
              <div className="swatch clearfix" data-option-index="0">
                <div className="swatch-title">
                  <strong>Color:</strong>
                </div>
                <div
                  data-value="Black"
                  className="swatch-element color available"
                  title="Black"
                >
                  <input
                    type="radio"
                    name="option-0"
                    value="Black"
                    id="swatch-0-color"
                  />
                  <label for="swatch-0-color">
                    <img src={colorSwitch1} alt="Black Leather Bag" />
                    <span className="swatch-chckd">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 18"
                        width="20"
                        height="18"
                      >
                        <path d="M0 9.1L1.71 7.45C3.71 8.46 4.98 9.23 7.23 10.9C11.46 5.9 14.25 3.37 19.44 0.01L20 1.34C15.72 5.23 12.58 9.56 8.07 17.99C5.28 14.58 3.42 12.4 0 9.1Z" />
                      </svg>
                    </span>
                  </label>
                </div>
                <div
                  data-value="Black"
                  className="swatch-element color available"
                  title="Black"
                >
                  <input
                    type="radio"
                    name="option-0"
                    value="Black"
                    id="swatch-1-color"
                  />
                  <label for="swatch-1-color">
                    <img src={colorSwitch2} alt="Black Leather Bag" />
                    <span className="swatch-chckd">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 18"
                        width="20"
                        height="18"
                      >
                        <path d="M0 9.1L1.71 7.45C3.71 8.46 4.98 9.23 7.23 10.9C11.46 5.9 14.25 3.37 19.44 0.01L20 1.34C15.72 5.23 12.58 9.56 8.07 17.99C5.28 14.58 3.42 12.4 0 9.1Z" />
                      </svg>
                    </span>
                  </label>
                </div>
                <div
                  data-value="Black"
                  className="swatch-element color available"
                  title="Black"
                >
                  <input
                    type="radio"
                    name="option-0"
                    value="Black"
                    id="swatch-2-color"
                  />
                  <label for="swatch-2-color">
                    <img src={colorSwitch3} alt="Black Leather Bag" />
                    <span className="swatch-chckd">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 18"
                        width="20"
                        height="18"
                      >
                        <path d="M0 9.1L1.71 7.45C3.71 8.46 4.98 9.23 7.23 10.9C11.46 5.9 14.25 3.37 19.44 0.01L20 1.34C15.72 5.23 12.58 9.56 8.07 17.99C5.28 14.58 3.42 12.4 0 9.1Z" />
                      </svg>
                    </span>
                  </label>
                </div>
                <div
                  data-value="Black"
                  className="swatch-element color available"
                  title="Black"
                >
                  <input
                    type="radio"
                    name="option-0"
                    value="Black"
                    id="swatch-3-color"
                  />
                  <label for="swatch-3-color">
                    <img src={colorSwitch4} alt="Black Leather Bag" />
                    <span className="swatch-chckd">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 18"
                        width="20"
                        height="18"
                      >
                        <path d="M0 9.1L1.71 7.45C3.71 8.46 4.98 9.23 7.23 10.9C11.46 5.9 14.25 3.37 19.44 0.01L20 1.34C15.72 5.23 12.58 9.56 8.07 17.99C5.28 14.58 3.42 12.4 0 9.1Z" />
                      </svg>
                    </span>
                  </label>
                </div>
                <div
                  data-value="Black"
                  className="swatch-element color available"
                  title="Black"
                >
                  <input
                    type="radio"
                    name="option-0"
                    value="Black"
                    id="swatch-4-color"
                  />
                  <label for="swatch-4-color">
                    <img src={colorSwitch5} alt="Black Leather Bag" />
                    <span className="swatch-chckd">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 18"
                        width="20"
                        height="18"
                      >
                        <path d="M0 9.1L1.71 7.45C3.71 8.46 4.98 9.23 7.23 10.9C11.46 5.9 14.25 3.37 19.44 0.01L20 1.34C15.72 5.23 12.58 9.56 8.07 17.99C5.28 14.58 3.42 12.4 0 9.1Z" />
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <div className="swatch clearfix" data-option-index="1">
                <div className="swatch-title">
                  <strong>Size:</strong>
                </div>
                <div
                  data-value="Black"
                  className="swatch-element available"
                  title="Black"
                >
                  <input
                    type="radio"
                    name="option-1"
                    value="Black"
                    id="swatch-1-size"
                    checked=""
                  />
                  <label for="swatch-1-size">6</label>
                </div>
                <div
                  data-value="Black"
                  className="swatch-element available"
                  title="Black"
                >
                  <input
                    type="radio"
                    name="option-1"
                    value="Black"
                    id="swatch-2-size"
                  />
                  <label for="swatch-2-size">7</label>
                </div>
                <div
                  data-value="Black"
                  className="swatch-element available"
                  title="Black"
                >
                  <input
                    type="radio"
                    name="option-1"
                    value="Black"
                    id="swatch-3-size"
                  />
                  <label for="swatch-3-size">8</label>
                </div>
                <div
                  data-value="Black"
                  className="swatch-element available"
                  title="Black"
                >
                  <input
                    type="radio"
                    name="option-1"
                    value="Black"
                    id="swatch-4-size"
                  />
                  <label for="swatch-4-size">9</label>
                </div>
                <div
                  data-value="Black"
                  className="swatch-element available"
                  title="Black"
                >
                  <input
                    type="radio"
                    name="option-1"
                    value="Black"
                    id="swatch-5-size"
                  />
                  <label for="swatch-5-size">10</label>
                </div>
                <div
                  data-value="Black"
                  className="swatch-element available"
                  title="Black"
                >
                  <input
                    type="radio"
                    name="option-1"
                    value="Black"
                    id="swatch-6-size"
                  />
                  <label for="swatch-6-size">11</label>
                </div>
                <div
                  data-value="Black"
                  className="swatch-element available"
                  title="Black"
                >
                  <input
                    type="radio"
                    name="option-1"
                    value="Black"
                    id="swatch-7-size"
                  />
                  <label for="swatch-7-size">12</label>
                </div>
              </div>
              <div className="size-chart-link clearfix">
                <a href="javascript:void(0)" className="f-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 31 10"
                    width="31"
                    height="10"
                  >
                    <path d="M28.3 0L28.3 4.29L26.96 4.29L26.96 0L24.26 0L24.26 2.86L22.91 2.86L22.91 0L20.22 0L20.22 2.86L18.87 2.86L18.87 0L16.17 0L16.17 4.29L14.83 4.29L14.83 0L12.13 0L12.13 2.86L10.78 2.86L10.78 0L8.09 0L8.09 2.86L6.74 2.86L6.74 0L4.04 0L4.04 4.29L2.7 4.29L2.7 0L0 0L0 10L31 10L31 0L28.3 0Z" />
                  </svg>{' '}
                  Size chart
                </a>
              </div>
              <input
                type="button"
                name=""
                className="btn btn-full add-cart-btn lp-0"
                value="Add To Cart"
              />
              <div className="shipping-text lp-05 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 18"
                  width="24"
                  height="18"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 8L5 9L13 9L13 2L3 2L3 1C3 0.45 3.45 0 4 0C6.58 0 11.42 0 14 0C14.55 0 15 0.45 15 1L15 3L19.67 3C20.78 3 21.27 3.58 21.6 4.11C22.2 5.05 23.14 6.54 23.71 7.48C23.9 7.8 24 8.15 24 8.52C24 9.71 24 11.5 24 13C24 14.09 23.26 15 22 15L21 15C21 16.66 19.66 18 18 18C16.34 18 15 16.66 15 15L11 15C11 16.66 9.66 18 8 18C6.34 18 5 16.66 5 15L4 15C3.45 15 3 14.55 3 14L3 8L1 8L1 6L8 6L8 8L5 8ZM6.8 15C6.8 15.66 7.34 16.2 8 16.2C8.66 16.2 9.2 15.66 9.2 15C9.2 14.34 8.66 13.8 8 13.8C7.34 13.8 6.8 14.34 6.8 15ZM16.8 15C16.8 15.66 17.34 16.2 18 16.2C18.66 16.2 19.2 15.66 19.2 15C19.2 14.34 18.66 13.8 18 13.8C17.34 13.8 16.8 14.34 16.8 15ZM15 11L5 11L5 13L5.76 13C6.31 12.39 7.11 12 8 12C8.89 12 9.69 12.39 10.24 13L15.76 13C16.31 12.39 17.11 12 18 12C18.89 12 19.69 12.39 20.24 13L22 13L22 8.43C22 8.43 20.84 6.44 20.29 5.5C20.11 5.19 19.78 5 19.43 5L15 5L15 11ZM18.7 6C19.06 6 19.4 6.19 19.57 6.5C20.06 7.36 21 9 21 9L16 9L16 6C16 6 17.83 6 18.7 6ZM0 3L8 3L8 5L0 5L0 3Z"
                  />
                </svg>
                Free shipping on order above $20
              </div>
              <div className="product-collapse-tabs">
                <div className="cllps-group">
                  <div className="cllps-title lp-05 active">
                    <strong>Product Details</strong> <span></span>
                  </div>
                  <div className="cllps-content" style={{display: ' block'}}>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text
                    </p>
                  </div>
                </div>
                <div className="cllps-group">
                  <div className="cllps-title lp-05">
                    <strong>Return & shipping</strong> <span></span>
                  </div>
                  <div className="cllps-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text
                    </p>
                  </div>
                </div>
                <div className="cllps-group">
                  <div className="cllps-title lp-05">
                    <strong>Manufactural & Importer</strong> <span></span>
                  </div>
                  <div className="cllps-content">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="product-srvc-sct">
        <div className="container">
          <div className="row">
            <div className="srvc-item">
              <h5>Expected Delivery Time</h5>
              <p>
                7 days; Actual time may vary depending on other items in your
                order
              </p>
            </div>
            <div className="srvc-item">
              <h5>Cash/Card on delivery available</h5>
              <p>Available for orders between Rs. 699- Rs. 20,000</p>
            </div>
            <div className="srvc-item">
              <h5>Easy 15 days returns and 15 days exchanges</h5>
              <p>Choose to return within 15 days or exchange within 15 days.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product-feature-sct">
        <div className="container">
          <div className="col-block">
            <div className="col-item">
              <img src={productImg1} />
            </div>
            <div className="col-item">
              <h2>Shopify theme NMD_R1 Shoes</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <p>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div className="col-block">
            <div className="col-item">
              <img src={productImg1} />
            </div>
            <div className="col-item">
              <h2>Shopify theme NMD_R1 Shoes</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <p>
                When an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-products related-products">
        <div className="container">
          <div className="sctn-title text-center">
            <h2 className="h1 text-up">Related products</h2>
          </div>
          <div className="row">
            <div className="product-item">
              <a href="javascript:void(0)" className="product-img">
                <img src={product1} />
                <div className="product-tag sale-tag">Sale 25%</div>
              </a>
              <h5>
                <a href="javascript:void(0)">Shopify theme NMD_R1 Shoes</a>
              </h5>
              <div className="product-price">
                <span className="s-price">$120</span>
                <span className="o-price">$140</span>
              </div>
            </div>
            <div className="product-item">
              <a href="javascript:void(0)" className="product-img">
                <img src={product2} />
                <div className="product-tag">Best Seller</div>
              </a>
              <h5>
                <a href="javascript:void(0)">Shopify theme NMD_R1 Shoes</a>
              </h5>
              <div className="product-price">
                <span className="s-price">$120</span>
              </div>
            </div>
            <div className="product-item">
              <a href="javascript:void(0)" className="product-img">
                <img src={product3} />
                <div className="product-tag new-tag">New Arrival</div>
              </a>
              <h5>
                <a href="javascript:void(0)">Shopify theme NMD_R1 Shoes</a>
              </h5>
              <div className="product-price">
                <span className="s-price">$120</span>
              </div>
            </div>
            <div className="product-item">
              <a href="javascript:void(0)" className="product-img">
                <img src={product4} />
              </a>
              <h5>
                <a href="javascript:void(0)">Shopify theme NMD_R1 Shoes</a>
              </h5>
              <div className="product-price">
                <span className="s-price">$120</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-products recently-viewed">
        <div className="container">
          <div className="sctn-title text-center">
            <h2 className="h1 text-up">Recently viewed products </h2>
          </div>
          <div className="row">
            <div className="product-item">
              <a href="javascript:void(0)" className="product-img">
                <img src={product5} />
                <div className="product-tag sale-tag">Sale 25%</div>
              </a>
              <h5>
                <a href="javascript:void(0)">Shopify theme NMD_R1 Shoes</a>
              </h5>
              <div className="product-price">
                <span className="s-price">$120</span>
                <span className="o-price">$140</span>
              </div>
            </div>
            <div className="product-item">
              <a href="javascript:void(0)" className="product-img">
                <img src={product6} />
                <div className="product-tag">Best Seller</div>
              </a>
              <h5>
                <a href="javascript:void(0)">Shopify theme NMD_R1 Shoes</a>
              </h5>
              <div className="product-price">
                <span className="s-price">$120</span>
              </div>
            </div>
            <div className="product-item">
              <a href="javascript:void(0)" className="product-img">
                <img src={product7} />
                <div className="product-tag new-tag">New Arrival</div>
              </a>
              <h5>
                <a href="javascript:void(0)">Shopify theme NMD_R1 Shoes</a>
              </h5>
              <div className="product-price">
                <span className="s-price">$120</span>
              </div>
            </div>
            <div className="product-item">
              <a href="javascript:void(0)" className="product-img">
                <img src={product8} />
              </a>
              <h5>
                <a href="javascript:void(0)">Shopify theme NMD_R1 Shoes</a>
              </h5>
              <div className="product-price">
                <span className="s-price">$120</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
