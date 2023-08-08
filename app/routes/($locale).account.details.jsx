import React, {useEffect, useState} from 'react';


function AccountDetails() {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleToggleChangePassword = () => {
    setShowChangePassword((prevState) => !prevState);
  };

  const handleToggleAddressForm = (addressId) => {
    setShowAddressForm(!showAddressForm);
    setSelectedAddress(addressId);
  };

  return (
    <div className="cust-account-page clearfix">
      <div className="br/eadcrumb">
        <div className="container">
          <span>
            <a href="javascript:void(0)">Home</a>
          </span>
          <span>My Account</span>
        </div>
      </div>
      <div className="container">
        <h2 className="page-title">My Account</h2>
        <div className="row flxnwrp flxanst">
          <div className="cust-side-links">
            <a
              href="javascript:void(0)"
              className="cst-ac-link active"
              data-id="cst-dashboard"
            >
              Account Dashboard
            </a>
            <a
              href="javascript:void(0)"
              className="cst-ac-link"
              data-id="cst-information"
            >
              Account Information
            </a>
            <a
              href="javascript:void(0)"
              className="cst-ac-link"
              data-id="cst-address"
            >
              Address Book
            </a>
            <a
              href="javascript:void(0)"
              className="cst-ac-link"
              data-id="cst-order"
            >
              My Orders
            </a>
            <a href="javascript:void(0)">Logout</a>
          </div>
          <div className="cust-side-content show" id="cst-dashboard">
            <h2>Contact Information</h2>
            <p>
              test test1
              <br />
              testing_all2@yahoo.com
            </p>
            <button
              className="btn change-psw-link lp-05"
              onClick={handleToggleChangePassword}
            >
              {showChangePassword ? 'Cancel' : 'Change Password'}
            </button>
            {showChangePassword && (
              <div className="cst-chng-password">
                <h4>Change your password</h4>
                <p>We will send you an email to change your password.</p>
                <form>
                  <div className="input-field">
                    <label>
                      <strong>Email Id</strong>
                    </label>
                    <input
                      type="email"
                      value=""
                      name="email"
                      id="recover-email"
                      placeholder="Enter your email address..."
                      autocorrect="off"
                      autocapitalize="off"
                    />
                  </div>
                  <div className="error recover_password_error"></div>
                  <div className="input-subtn dfx">
                    <input
                      type="submit"
                      className="btn lp-05 m-0"
                      value="Submit"
                    />
                    <a
                      href="javascript:void(0)"
                      className="change-psw-close lp-05 text-up"
                    >
                      Cancle
                    </a>
                  </div>
                </form>
              </div>
            )}
          </div>
          <div className="cust-side-content" id="cst-information">
            <h2>Account Details</h2>
            <div className="address-info">
              <h5>test test1</h5>
              <p>
                address1
                <br />
                address2
                <br />
                surat
                <br />
                GJ
                <br />
                395006
                <br />
                India
                <br />
                9876543210
              </p>
              <a href="javascript:void(0)" className="btn lp-05">
                View addresses (1)
              </a>
            </div>
          </div>
          <div className="cust-side-content" id="cst-address">
            <h2>Your Addresses</h2>
            <button
              className="btn add-address-btn address-pop-link lp-05"
              onClick={() => handleToggleAddressForm(null)}
            >
              Add New Address
            </button>
            {showAddressForm && (
              <div className="address-form-popup" id="add-address-form">
                <div className="address-formpop-box">
                  <h2>Add new address</h2>
                  <a
                    href="javascript:void(0)"
                    className="address-pop-close address-pop-clink"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      width="20"
                      height="20"
                    >
                      <path d="M19.99 17.55L12.33 9.97L19.91 2.33L17.55 -0.01L9.98 7.64L2.33 0.06L-0.01 2.41L7.64 9.99L0.06 17.65L2.41 19.99L10 12.33L17.65 19.91L19.99 17.55Z" />
                    </svg>
                  </a>
                  <form method="post">
                    <div className="row m-15">
                      <div className="input-field col-50">
                        <label for="address_first_name_new">
                          <strong>First Name</strong>
                        </label>
                        <input
                          type="text"
                          id="address_first_name_new"
                          className="txtfname address_form"
                          name="address[first_name]"
                          autocapitalize="words"
                        />
                        <div className="form-error err-txtfname"></div>
                      </div>
                      <div className="input-field col-50">
                        <label for="address_last_name_new">
                          <strong>Last Name</strong>
                        </label>
                        <input
                          type="text"
                          id="address_last_name_new"
                          className="txtlname address_form"
                          name="address[last_name]"
                          autocapitalize="words"
                        />
                        <div className="form-error err-txtlname"></div>
                      </div>
                      <div className="input-field col-50">
                        <label for="address_company_new">
                          <strong>Company</strong>
                        </label>
                        <input
                          type="text"
                          id="address_company_new"
                          className="txtcompany address_form"
                          name="address[company]"
                          autocapitalize="words"
                        />
                        <div className="form-error err-txtcompany"></div>
                      </div>
                      <div className="input-field col-50">
                        <label for="address_address1_new">
                          <strong>Address 1</strong>
                        </label>
                        <input
                          type="text"
                          id="address_address1_new"
                          className="txtadd address_form"
                          name="address[address1]"
                          autocapitalize="words"
                        />
                        <div className="form-error err-txtadd"></div>
                      </div>
                      <div className="input-field col-50">
                        <label for="address_address2_new">
                          <strong>Address 2</strong>
                        </label>
                        <input
                          type="text"
                          id="address_address2_new"
                          className="txtadd2 address_form"
                          name="address[address2]"
                          autocapitalize="words"
                        />
                        <div className="form-error err-txtadd2"></div>
                      </div>
                      <div className="input-field col-50">
                        <label for="address_city_new">
                          <strong>City</strong>
                        </label>
                        <input
                          type="text"
                          id="address_city_new"
                          className="txtcity address_form"
                          name="address[city]"
                          autocapitalize="words"
                        />
                        <div className="form-error err-txtcity"></div>
                      </div>
                      <div className="input-field col-50">
                        <label for="address_country_new">
                          <strong>Country</strong>
                        </label>
                        <select
                          id="address_country_new"
                          className="selcountry"
                          name="address[country]"
                          data-default=""
                        >
                          <option value="---" data-provinces="[]">
                            ---
                          </option>
                          <option value="Afghanistan" data-provinces="[]">
                            Afghanistan
                          </option>
                          <option value="Aland Islands" data-provinces="[]">
                            Åland Islands
                          </option>
                          <option value="Albania" data-provinces="[]">
                            Albania
                          </option>
                          <option value="Algeria" data-provinces="[]">
                            Algeria
                          </option>
                          <option value="Andorra" data-provinces="[]">
                            Andorra
                          </option>
                          <option value="Angola" data-provinces="[]">
                            Angola
                          </option>
                          <option value="Anguilla" data-provinces="[]">
                            Anguilla
                          </option>
                        </select>
                        <div className="form-error err-selcountry"></div>
                      </div>
                      <div
                        id="address_province_container_new"
                        className="input-field col-50"
                      >
                        <label for="address_province_new">
                          <strong>Province</strong>
                        </label>
                        <select
                          id="address_province_new"
                          className="address_form"
                          name="address[province]"
                          data-default=""
                        >
                          <option value="---" data-provinces="[]">
                            ---
                          </option>
                        </select>
                      </div>
                      <div className="input-field col-50">
                        <label for="address_zip_new">
                          <strong>Postal/Zip Code</strong>
                        </label>
                        <input
                          type="text"
                          id="address_zip_new"
                          className="zipcode address_form"
                          name="address[zip]"
                          autocapitalize="characters"
                        />
                        <div className="form-error err-zipcode"></div>
                      </div>
                      <div className="input-field col-50">
                        <label for="address_phone_new">
                          <strong>Phone</strong>
                        </label>
                        <input
                          type="tel"
                          id="address_phone_new"
                          className="txtphone address_form"
                          name="address[phone]"
                        />
                        <div className="form-error err-txtphone"></div>
                      </div>
                    </div>
                    <div className="input-chckbox clearfix">
                      <input
                        type="checkbox"
                        id="address_default_address_new"
                        name="address[default]"
                        value="1"
                      />
                      <label
                        for="address_default_address_new"
                        className="inline"
                      >
                        Set as default address?
                      </label>
                    </div>
                    <input
                      type="submit"
                      className="btn address_btn lp-05"
                      value="Add New Address"
                    />
                  </form>
                </div>
              </div>
            )}
            <div className="row m-15">
              <div className="address-book">
                <h5>
                  <strong>Test Test 1 (default)</strong>
                </h5>
                <p>
                  compny
                  <br /> address1, address2
                  <br /> Surat
                  <br /> GJ
                  <br /> 395006
                  <br /> India
                  <br /> 9876543210
                </p>
                <p className="action-link">
                  <a
                    href="javascript:void(0)"
                    className="address-pop-link"
                    data-id="edit_address_2287526445079"
                  >
                    Edit
                  </a>{' '}
                  &nbsp;|&nbsp; <a href="javascript:void(0)">Remove</a>
                </p>
                <div
                  className="address-form-popup"
                  id="edit_address_2287526445079"
                >
                  <div className="address-formpop-box">
                    <h2>Edit address</h2>
                    <a
                      href="javascript:void(0)"
                      className="address-pop-close address-pop-clink"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        width="20"
                        height="20"
                      >
                        <path d="M19.99 17.55L12.33 9.97L19.91 2.33L17.55 -0.01L9.98 7.64L2.33 0.06L-0.01 2.41L7.64 9.99L0.06 17.65L2.41 19.99L10 12.33L17.65 19.91L19.99 17.55Z" />
                      </svg>
                    </a>
                    <form method="post">
                      <div className="row m-15">
                        <div className="input-field col-50">
                          <label for="address_first_name_2287526445079">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="address_first_name_2287526445079"
                            className="txtfname address_form"
                            name="address[first_name]"
                            value="T-test"
                            autocapitalize="words"
                          />
                          <div className="form-error err-txtfname"></div>
                        </div>
                        <div className="input-field col-50">
                          <label for="address_last_name_2287526445079">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="address_last_name_2287526445079"
                            className="txtlname address_form"
                            name="address[last_name]"
                            value="test 1"
                            autocapitalize="words"
                          />
                          <div className="form-error err-txtlname"></div>
                        </div>
                        <div className="input-field col-50">
                          <label for="address_company_2287526445079">
                            Company
                          </label>
                          <input
                            type="text"
                            id="address_company_2287526445079"
                            className="txtcompany address_form"
                            name="address[company]"
                            value="softpulse"
                            autocapitalize="words"
                          />
                          <div className="form-error err-txtcompany"></div>
                        </div>
                        <div className="input-field col-50">
                          <label for="address_address1_2287526445079">
                            Address 1
                          </label>
                          <input
                            type="text"
                            id="address_address1_2287526445079"
                            className="txtadd address_form"
                            name="address[address1]"
                            value="minibajar "
                            autocapitalize="words"
                          />
                          <div className="form-error err-txtadd"></div>
                        </div>
                        <div className="input-field col-50">
                          <label for="address_address2_2287526445079">
                            Address 2
                          </label>
                          <input
                            type="text"
                            id="address_address2_2287526445079"
                            className="txtadd2 address_form"
                            name="address[address2]"
                            value="varachha road"
                            autocapitalize="words"
                          />
                          <div className="form-error err-txtadd2"></div>
                        </div>
                        <div className="input-field col-50">
                          <label for="address_city_2287526445079">City</label>
                          <input
                            type="text"
                            id="address_city_2287526445079"
                            className="txtcity address_form"
                            name="address[city]"
                            value="surat"
                            autocapitalize="words"
                          />
                          <div className="form-error err-txtcity"></div>
                        </div>
                        <div className="input-field col-50">
                          <label for="address_country_2287526445079">
                            Country
                          </label>
                          <select
                            id="address_country_2287526445079"
                            className="selcountry"
                            name="address[country]"
                            data-default="India"
                          >
                            <option value="---" data-provinces="[]">
                              ---
                            </option>
                            <option value="Afghanistan" data-provinces="[]">
                              Afghanistan
                            </option>
                            <option value="Aland Islands" data-provinces="[]">
                              Åland Islands
                            </option>
                            <option value="Albania" data-provinces="[]">
                              Albania
                            </option>
                            <option value="Algeria" data-provinces="[]">
                              Algeria
                            </option>
                            <option value="Andorra" data-provinces="[]">
                              Andorra
                            </option>
                            <option value="Angola" data-provinces="[]">
                              Angola
                            </option>
                            <option value="Anguilla" data-provinces="[]">
                              Anguilla
                            </option>
                          </select>
                          <div className="form-error err-selcountry"></div>
                        </div>
                        <div
                          className="input-field col-50 input-div"
                          id="address_province_container_2287526445079"
                          style={{}}
                        >
                          <label for="address_province_2287526445079">
                            Province
                          </label>
                          <select
                            id="address_province_2287526445079"
                            className="address_form"
                            name="address[province]"
                            data-default="Gujarat"
                          >
                            <option value="---" data-provinces="[]">
                              ---
                            </option>
                          </select>
                        </div>
                        <div className="input-field col-50">
                          <label for="address_zip_2287526445079">
                            Postal/Zip Code
                          </label>
                          <input
                            type="text"
                            id="address_zip_2287526445079"
                            className="zipcode address_form"
                            name="address[zip]"
                            value="395006"
                            autocapitalize="characters"
                          />
                          <div className="form-error err-zipcode"></div>
                        </div>
                        <div className="input-field col-50">
                          <label for="address_phone_2287526445079">Phone</label>
                          <input
                            type="tel"
                            id="address_phone_2287526445079"
                            className="txtphone address_form"
                            name="address[phone]"
                            value="01234567890"
                            placeholder="555-555-1234"
                          />
                          <div className="form-error err-txtphone"></div>
                        </div>
                      </div>
                      <div className="input-chckbox">
                        <input
                          type="checkbox"
                          id="address_default_address_2287526445079"
                          name="address[default]"
                          value="1"
                        />
                        <label
                          for="address_default_address_2287526445079"
                          className="inline"
                        >
                          Set as Default Address?
                        </label>
                      </div>
                      <div className="input-subtn dfx">
                        <input
                          type="submit"
                          className="btn lp-05 m-0"
                          value="Submit"
                        />
                        <a
                          href="javascript:void(0)"
                          className="address-pop-clink"
                        >
                          Cancel
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="address-book">
                <h5>
                  <strong>Test Test 2</strong>
                </h5>
                <p>
                  compny
                  <br /> address1, address2
                  <br /> Surat
                  <br /> GJ
                  <br /> 395006
                  <br /> India
                  <br /> 9876543210
                </p>
                <p className="action-link">
                  <a href="javascript:void(0)">Edit</a> &nbsp;|&nbsp;{' '}
                  <a href="javascript:void(0)">Remove</a>
                </p>
              </div>
              <div className="address-book">
                <h5>
                  <strong>Test Test 3</strong>
                </h5>
                <p>
                  compny
                  <br /> address1, address2
                  <br /> Surat
                  <br /> GJ
                  <br /> 395006
                  <br /> India
                  <br /> 9876543210
                </p>
                <p className="action-link">
                  <a href="javascript:void(0)">Edit</a> &nbsp;|&nbsp;{' '}
                  <a href="javascript:void(0)">Remove</a>
                </p>
              </div>
              <div className="address-book">
                <h5>
                  <strong>Test Test 4</strong>
                </h5>
                <p>
                  compny
                  <br /> address1, address2
                  <br /> Surat
                  <br /> GJ
                  <br /> 395006
                  <br /> India
                  <br /> 9876543210
                </p>
                <p className="action-link">
                  <a href="javascript:void(0)">Edit</a> &nbsp;|&nbsp;{' '}
                  <a href="javascript:void(0)">Remove</a>
                </p>
              </div>
              <div className="address-book">
                <h5>
                  <strong>Test Test 5</strong>
                </h5>
                <p>
                  compny
                  <br /> address1, address2
                  <br /> Surat
                  <br /> GJ
                  <br /> 395006
                  <br /> India
                  <br /> 9876543210
                </p>
                <p className="action-link">
                  <a href="javascript:void(0)">Edit</a> &nbsp;|&nbsp;{' '}
                  <a href="javascript:void(0)">Remove</a>
                </p>
              </div>
              <div className="address-book">
                <h5>
                  <strong>Test Test 6</strong>
                </h5>
                <p>
                  compny
                  <br /> address1, address2
                  <br /> Surat
                  <br /> GJ
                  <br /> 395006
                  <br /> India
                  <br /> 9876543210
                </p>
                <p className="action-link">
                  <a href="javascript:void(0)">Edit</a> &nbsp;|&nbsp;{' '}
                  <a href="javascript:void(0)">Remove</a>
                </p>
              </div>
            </div>
          </div>
          <div className="cust-side-content" id="cst-order">
            <h2>Order History</h2>
            <div className="order-table">
              <table>
                <thead>
                  <tr>
                    <th>Order id</th>
                    <th>Date</th>
                    <th>Payment Status</th>
                    <th>Fulfillment Status</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="javascript:void(0)" title="">
                        #1001
                      </a>
                    </td>
                    <td>01-12-2020</td>
                    <td>paid</td>
                    <td>unfulfilled</td>
                    <td>$120</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="javascript:void(0)" title="">
                        #1002
                      </a>
                    </td>
                    <td>01-12-2020</td>
                    <td>paid</td>
                    <td>unfulfilled</td>
                    <td>$120</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="javascript:void(0)" title="">
                        #1003
                      </a>
                    </td>
                    <td>01-12-2020</td>
                    <td>paid</td>
                    <td>fulfilled</td>
                    <td>$120</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
