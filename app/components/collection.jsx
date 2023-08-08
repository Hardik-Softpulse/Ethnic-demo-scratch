import React from 'react';

function Collection() {
  return (
    <div className="collection-page">
      <div className="breadcrumb">
        <div className="container">
          <span>
            <a href="javascript:void(0)">Home</a>
          </span>
          <span>products</span>
        </div>
      </div>
      <div className="cllctn-page-in pb-60">
        <div className="container">
          <h2 className="page-title text-up text-center">Products</h2>
          <div className="row m-15">
            <div className="cllctn-sidebar">
              <a href="javascript:void(0)" className="reset-act">
                Reset
              </a>
              <h3 className="text-up lp-05">Filter</h3>
              <div className="filter-option">
                <h6 className="filter-title">Size</h6>
                <div className="filter-list clearfix">
                  <div className="filter-item">
                    <input type="checkbox" name="size" id="size-1" checked="" />
                    <label for="size-1" className="filter-act">
                      1
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="size" id="size-2" />
                    <label for="size-2" className="filter-act">
                      2
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="size" id="size-3" />
                    <label for="size-3" className="filter-act">
                      3
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="size" id="size-4" />
                    <label for="size-4" className="filter-act">
                      4
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="size" id="size-5" />
                    <label for="size-5" className="filter-act">
                      5
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="size" id="size-6" />
                    <label for="size-6" className="filter-act">
                      6
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="size" id="size-7" />
                    <label for="size-7" className="filter-act">
                      7
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="size" id="size-8" />
                    <label for="size-8" className="filter-act">
                      8
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="size" id="size-9" />
                    <label for="size-9" className="filter-act">
                      9
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-option filter-color">
                <h6 className="filter-title">Color</h6>
                <div className="filter-list clearfix">
                  <div className="filter-item">
                    <input
                      type="checkbox"
                      name="color"
                      id="color-1"
                      checked=""
                    />
                    <label
                      for="color-1"
                      className="filter-act"
                      style={{backgroundColor: '#000'}}
                    ></label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="color" id="color-2" />
                    <label
                      for="color-2"
                      className="filter-act"
                      style={{backgroundColor: '#808080'}}
                    ></label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="color" id="color-3" />
                    <label
                      for="color-3"
                      className="filter-act"
                      style={{backgroundColor: '#FFF'}}
                    ></label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="color" id="color-4" />
                    <label
                      for="color-4"
                      className="filter-act"
                      style={{backgroundColor: '#ff0000'}}
                    ></label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="color" id="color-5" />
                    <label
                      for="color-5"
                      className="filter-act"
                      style={{backgroundColor: '#ff9900'}}
                    ></label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="color" id="color-6" />
                    <label
                      for="color-6"
                      className="filter-act"
                      style={{backgroundColor: '#a30000'}}
                    ></label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="color" id="color-7" />
                    <label
                      for="color-7"
                      className="filter-act"
                      style={{backgroundColor: '#33cc00'}}
                    ></label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="color" id="color-8" />
                    <label
                      for="color-8"
                      className="filter-act"
                      style={{backgroundColor: '#0000cc'}}
                    ></label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="color" id="color-9" />
                    <label
                      for="color-9"
                      className="filter-act"
                      style={{backgroundColor: '#00ffcc'}}
                    ></label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="color" id="color-10" />
                    <label
                      for="color-10"
                      className="filter-act"
                      style={{backgroundColor: '#9933cc'}}
                    ></label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="color" id="color-11" />
                    <label
                      for="color-11"
                      className="filter-act"
                      style={{backgroundColor: '#ff66cc'}}
                    ></label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="color" id="color-12" />
                    <label
                      for="color-12"
                      className="filter-act"
                      style={{backgroundColor: '#deb887'}}
                    ></label>
                  </div>
                </div>
              </div>
              <div className="filter-option">
                <h6 className="filter-title">Product Type</h6>
                <div className="filter-list clearfix">
                  <div className="filter-item">
                    <input type="checkbox" name="type" id="type-1" />
                    <label for="type-1" className="filter-act">
                      Boots
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="type" id="type-2" checked="" />
                    <label for="type-2" className="filter-act">
                      Casuals
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="type" id="type-3" />
                    <label for="type-3" className="filter-act">
                      Flip Flops
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="type" id="type-4" />
                    <label for="type-4" className="filter-act">
                      Formals
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="type" id="type-5" />
                    <label for="type-5" className="filter-act">
                      Loafers
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="type" id="type-6" />
                    <label for="type-6" className="filter-act">
                      Flip Flops
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="type" id="type-7" />
                    <label for="type-7" className="filter-act">
                      Slippers
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="type" id="type-8" />
                    <label for="type-8" className="filter-act">
                      Sneakers
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-option">
                <h6 className="filter-title">Price</h6>
                <div className="filter-list clearfix">
                  <div className="filter-item">
                    <input type="checkbox" name="price" id="price-1" />
                    <label for="price-1" className="filter-act">
                      $0 - $50
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="price" id="price-2" />
                    <label for="price-2" className="filter-act">
                      $50 - $100
                    </label>
                  </div>
                  <div className="filter-item">
                    <input
                      type="checkbox"
                      name="price"
                      id="price-3"
                      checked=""
                    />
                    <label for="price-3" className="filter-act">
                      $100 - $150
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="price" id="price-4" />
                    <label for="price-4" className="filter-act">
                      $150 - $200
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="price" id="price-5" />
                    <label for="price-5" className="filter-act">
                      $200 - $250
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="price" id="price-6" />
                    <label for="price-6" className="filter-act">
                      $250 - $300
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="price" id="price-7" />
                    <label for="price-7" className="filter-act">
                      $350 - $400
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="price" id="price-8" />
                    <label for="price-8" className="filter-act">
                      $400 or more
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-option">
                <h6 className="filter-title">Discount</h6>
                <div className="filter-list clearfix">
                  <div className="filter-item">
                    <input type="checkbox" name="disc" id="disc-1" />
                    <label for="disc-1" className="filter-act">
                      30%
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="disc" id="disc-2" checked="" />
                    <label for="disc-2" className="filter-act">
                      40%
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="disc" id="disc-3" />
                    <label for="disc-3" className="filter-act">
                      50%
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="disc" id="disc-4" />
                    <label for="disc-4" className="filter-act">
                      55%
                    </label>
                  </div>
                  <div className="filter-item">
                    <input type="checkbox" name="disc" id="disc-5" />
                    <label for="disc-5" className="filter-act">
                      60%
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="cllctn-list">
              <div className="row m-15">
                <div className="product-item">
                  <a href="javascript:void(0)" className="product-img">
                    <img src="img/product-1.jpg" />
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
                    <img src="img/product-2.jpg" />
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
                    <img src="img/product-3.jpg" />
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
                    <img src="img/product-4.jpg" />
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
                    <img src="img/product-9.jpg" />
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
                    <img src="img/product-5.jpg" />
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
                    <img src="img/product-6.jpg" />
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
                    <img src="img/product-10.jpg" />
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
                    <img src="img/product-11.jpg" />
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
                    <img src="img/product-7.jpg" />
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
                    <img src="img/product-12.jpg" />
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
                    <img src="img/product-13.jpg" />
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
                    <img src="img/product-8.jpg" />
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
                    <img src="img/product-14.jpg" />
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
                    <img src="img/product-15.jpg" />
                  </a>
                  <h5>
                    <a href="javascript:void(0)">Shopify theme NMD_R1 Shoes</a>
                  </h5>
                  <div className="product-price">
                    <span className="s-price">$120</span>
                  </div>
                </div>
              </div>
              <div className="pagination dfx flxcntr flxwrp">
                <span className="pager-prev">
                  <a href="javascript:void(0)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.031"
                      height="18.03"
                      viewBox="0 0 10.031 18.03"
                    >
                      <path
                        d="M893.239,2744.63l8.189,8.1a0.92,0.92,0,0,0,1.3,0,0.9,0.9,0,0,0,0-1.28l-7.54-7.46,7.539-7.46a0.907,0.907,0,0,0,0-1.29,0.92,0.92,0,0,0-1.3,0l-8.189,8.1A0.915,0.915,0,0,0,893.239,2744.63Z"
                        transform="translate(-892.969 -2734.97)"
                      />
                    </svg>
                  </a>
                </span>
                <span>
                  <a href="javascript:void(0)">1</a>
                </span>
                <span className="active">
                  <a href="javascript:void(0)">2</a>
                </span>
                <span>
                  <a href="javascript:void(0)">3</a>
                </span>
                <span>
                  <a href="javascript:void(0)">...</a>
                </span>
                <span>
                  <a href="javascript:void(0)">5</a>
                </span>
                <span className="pager-next">
                  <a href="javascript:void(0)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.03"
                      height="18"
                      viewBox="0 0 10.03 18"
                    >
                      <path
                        d="M1073.73,2743.36l-8.16-8.09a0.917,0.917,0,0,0-1.3,0,0.894,0.894,0,0,0,0,1.28l7.52,7.45-7.52,7.45a0.894,0.894,0,0,0,0,1.28,0.917,0.917,0,0,0,1.3,0l8.16-8.09A0.894,0.894,0,0,0,1073.73,2743.36Z"
                        transform="translate(-1064 -2735)"
                      />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-i1-text im1t-xs dfx flxancntr p-60">
        <img src="img/feature-banner.jpg" />
        <div className="container">
          <h2 className="text-white text-up">Shop our Women collection</h2>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <a href="javascript:void(0)" className="btn btn-white">
            Shop now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Collection;
