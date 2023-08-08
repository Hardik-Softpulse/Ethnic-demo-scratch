import React from 'react';

function SignIn() {
  return (
    <div class="cust-sign-page bg-grey clearfix">
      <div class="breadcrumb">
        <div class="container">
          <span>
            <a href="javascript:void(0)">Home</a>
          </span>
          <span>login</span>
        </div>
      </div>
      <div class="container">
        <h2 class="page-title text-up text-center">Sign in</h2>
        <div class="cust-sign-form">
          <form>
            <div class="mb-30">
              Get access to your Orders, Wishlist and Recommendations
            </div>
            <div class="input-field">
              <label>
                <strong>Email Id</strong>
              </label>
              <input
                type="email"
                name=""
                placeholder="Enter your email address..."
              />
            </div>
            <div class="input-field">
              <label>
                <strong>Password</strong>{' '}
                <a href="javascript:void(0)" class="fgt-psw-link">
                  Forget ?
                </a>
              </label>
              <input
                type="password"
                name=""
                placeholder="Enter your password"
              />
            </div>
            <p class="policy-text">
              By logging in, you agree to Our's{' '}
              <a href="javascript:void(0)">Privacy Policy</a> and{' '}
              <a href="javascript:void(0)">Terms of Use</a>
            </p>
            <input
              type="button"
              name=""
              class="btn btn-full btn-lg"
              value="Sign In"
            />
            <h6 class="text-up">New user ?</h6>
            <p>
              Don’t Have an account ? <a href="javascript:void(0)">Register</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
