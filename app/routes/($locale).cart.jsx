import React from 'react';
import product11 from '../img/product-11.jpg';
import product15 from '../img/product-15.jpg';
import product1 from '../img/product-1.jpg';
import product2 from '../img/product-2.jpg';
import product3 from '../img/product-3.jpg';
import product4 from '../img/product-4.jpg';
import visa from '../img/visa.png'
import paypal from '../img/paypal.png'
import mastercard from '../img/mastercard.png'
import americanExpress from '../img/american-express.png'
import masestro from '../img/masestro.png'
import dinersClub from '../img/diners-club.png'

function Cart() {
  return (
    <>
      <div className="cart-page bg-grey">
        <div className="breadcrumb">
          <div className="container">
            <span>
              <a href="javascript:void(0)">Home</a>
            </span>
            <span>cart</span>
          </div>
        </div>
        <div className="container cart-container">
          <h2 className="page-title text-up text-center">Your Bag</h2>
          <div className="row flxspc flxanst">
            <div className="cart-item-list">
              <div className="cart-item dfx cart-img">
                <a href="javascript:void(0)" className="cart-image">
                  <img src={product11} />
                </a>
                <div className="cart-info dfx dfxcl">
                  <h6>
                    <a href="javascript:void(0)">Shopify theme NMD_R1 Shoes</a>
                  </h6>
                  <span>Color: White</span>
                  <span>Size: 10</span>
                  <div className="cart-edits dfx">
                    <div className="qty-box">
                      <a className="qty-minus"></a>
                      <input
                        type="number"
                        name=""
                        className="qty-input"
                        value="1"
                        readonly=""
                      />
                      <a className="qty-plus"></a>
                    </div>
                    <div className="cart-price">
                      <span className="s-price">
                        <strong>$120</strong>
                      </span>
                      <span className="o-price">$140</span>
                    </div>
                    <div className="cart-elinks">
                      <a href="javascript:void(0)" className="cart-update">
                        Update
                      </a>
                      <a href="javascript:void(0)" className="cart-remove">
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-item dfx">
                <a href="javascript:void(0)" className="cart-image">
                  <img src={product3} />
                </a>
                <div className="cart-info dfx dfxcl">
                  <h6>
                    <a href="javascript:void(0)">Shopify theme NMD_R2 Shoes</a>
                  </h6>
                  <span>Color: Grey</span>
                  <span>Size: 10</span>
                  <div className="cart-edits dfx">
                    <div className="qty-box">
                      <a className="qty-minus"></a>
                      <input
                        type="number"
                        name=""
                        className="qty-input"
                        value="1"
                        readonly=""
                      />
                      <a className="qty-plus"></a>
                    </div>
                    <div className="cart-price">
                      <span className="s-price">
                        <strong>$100</strong>
                      </span>
                    </div>
                    <div className="cart-elinks">
                      <a href="javascript:void(0)" className="cart-update">
                        Update
                      </a>
                      <a href="javascript:void(0)" className="cart-remove">
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-item dfx">
                <a href="javascript:void(0)" className="cart-image">
                  <img src={product15} />
                </a>
                <div className="cart-info dfx dfxcl">
                  <h6>
                    <a href="javascript:void(0)">Shopify theme NMD_R3 Shoes</a>
                  </h6>
                  <span>Color: Red</span>
                  <span>Size: 10</span>
                  <div className="cart-edits dfx">
                    <div className="qty-box">
                      <a className="qty-minus"></a>
                      <input
                        type="number"
                        name=""
                        className="qty-input"
                        value="1"
                        readonly=""
                      />
                      <a className="qty-plus"></a>
                    </div>
                    <div className="cart-price">
                      <span className="s-price">
                        <strong>$140</strong>
                      </span>
                      <span className="o-price">$180</span>
                    </div>
                    <div className="cart-elinks">
                      <a href="javascript:void(0)" className="cart-update">
                        Update
                      </a>
                      <a href="javascript:void(0)" className="cart-remove">
                        Remove
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-subtotal">
              <h5 className="text-up">Order Summary</h5>
              <ul>
                <li>
                  <span>SUBTOTAL</span> <span>$400</span>
                </li>
                <li>
                  <span>DISCOUNTS</span> <span>-$60</span>
                </li>
                <li className="cart-total">
                  <span>
                    <strong>TOTAL</strong>
                    <br /> <small>(Inclusive of all taxes)</small>
                  </span>
                  <span>
                    <strong>$340</strong>
                  </span>
                </li>
              </ul>
              <input
                type="button"
                name=""
                className="btn chckc-btn"
                value="Checkout"
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
              <h6 className="text-up">Need help ?</h6>
              <div className="help-links dfx flxspc text-up">
                <a href="javascript:void(0)">Shipping</a>
                <a href="javascript:void(0)">Returns & Exchanges</a>
              </div>
              <h6 className="text-up">Accepted payment methods</h6>
              <div className="payment-icon dfx flxwrp">
                <img src={visa} />
                <img src={paypal} />
                <img src={mastercard} />
                <img src={americanExpress} />
                <img src={masestro} />
                <img src={dinersClub} />
              </div>
            </div>
          </div>
        </div>
        <div className="feature-products you-may-likes">
          <div className="container">
            <div className="sctn-title text-center">
              <h2 className="h1 text-up">You may also like</h2>
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
      </div>
    </>
  );
}

export default Cart;
