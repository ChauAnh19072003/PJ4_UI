
const Shape = () => {
  return (
    <div>
      <div className="container circle">
        <div className="row">
          <div className="col-12">
            <h2
              className="shape__heading text-center js-text-animation js-fadeInUp
              "
              s
            >
              How to get your <br />
              <b>money into shape?</b>
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row shape__step shape__step--first">
          <div className="col-12 col-md-10 col-lg-5">
            <div className="shape__step-box">
              <div className="shape__step-number js-text-animation js-fadeInUp">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="145"
                  height="336"
                >
                  <defs>
                    <linearGradient
                      id="step_a"
                      x1="50%"
                      x2="50%"
                      y1="13.964%"
                      y2="86.393%"
                    >
                      <stop offset="0%" stopColor="#EFF2F6" />
                      <stop offset="100%" stopColor="#FFF" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#step_a)"
                    fillRule="evenodd"
                    d="M335.366 336h-53.93V119.36c0-25.857.611-46.358 1.835-61.505-3.519 3.672-7.841 7.727-12.966 12.164-5.126 4.436-22.3 18.512-51.521 42.226l-27.08-34.194L290.385.482h44.98V336z"
                    transform="translate(-191)"
                  />
                </svg>
              </div>
              <span className="sub-heading js-text-animation js-fadeInUp">
                Step 1
              </span>
              <h3 className="heading js-text-animation js-fadeInUp">
                Track your cash flow
              </h3>
              <ul>
                <li className="js-text-animation js-fadeInUp">
                  Connect your bank accounts and all your transactions will get
                  automatically imported to Spendee.
                </li>
                <li className="js-text-animation js-fadeInUp">
                  Connect your crypto wallet and E-Wallet for complete overview
                  of your cash flow.
                </li>
                <li className="js-text-animation js-fadeInUp">
                  Add your cash expenses manually.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 ml-auto">
            <div className="shape__step-box card-wallet__wrapper">
              <div className="card card-wallet">
                <div className="card__body">
                  <span>Account</span>
                  <p>210188945</p>
                  <em>2 311 USD</em>
                  <span className="user-image user-image--first"></span>
                  <span className="user-image user-image--second"></span>
                </div>
                <div className="card-wallet__logo"></div>
              </div>
              <div className="card card-wallet">
                <div className="card__body">
                  <span>Saving Account</span>
                  <p>Cash</p>
                  <em>5 620 USD</em>
                </div>
                <div className="card-wallet__logo"></div>
              </div>
              <div className="card card-wallet">
                <div className="card__body">
                  <span>Family Wallet</span>
                  <p>Cash</p>
                  <em>795 USD</em>
                  <span className="user-image user-image--first"></span>
                  <span className="user-image user-image--second"></span>
                </div>
                <div className="card card-wallet__add">
                  <div className="card__body">
                    <p>Add New Wallet or Bank Account</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row shape__step shape__step--second" id="step2">
          <div className="col-12 col-lg-6">
            <div className="shape__step-container">
              <div className="card card-transparent card-balance">
                <div className="card__head card__head-icon">
                  <span className="icon icon-bar-chart"></span>
                </div>
                <div className="card__body">
                  <p>Account Balance</p>
                  <span>Dec 5 - Dec 25, 2018</span>
                </div>
              </div>
              <div className="svg-graph">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 543 344">
                  <linearGradient
                    id="svg-graph-grad"
                    x1="-33.437"
                    x2="-33.437"
                    y1="567.347"
                    y2="568.347"
                    gradientTransform="matrix(540.7985 0 0 -341.7284 18354.572 194222.453)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#fff" stopOpacity="0" />
                    <stop offset="1" stopColor="#12c48b"/>
                  </linearGradient>
                  <path
                    fill="url(#svg-graph-grad)"
                    d="M1.4 208.6L53.9 99.1l98.7 61.4L218 82.1l82.1 17 64.1-6.3L459.1 2l83.1 35.9v305.8H1.4z"
                    opacity=".243"
                  />
                  <linearGradient
                    id="svg-graph-grad-2"
                    x1="-34.254"
                    x2="-33.254"
                    y1="567.294"
                    y2="568.148"
                    gradientTransform="matrix(540.8453 0 0 -207.0747 18356.117 117604.508)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#52ebba" />
                    <stop offset="1" stopColor="#12c48b" />
                  </linearGradient>
                  <path
                    fill="none"
                    stroke="url(#svg-graph-grad-2)"
                    strokeWidth="3"
                    d="M1.4 209.1l52.5-110 98.7 61.4L218 82.1l82.1 17 64.1-6.3L459.1 2l83.1 35.9"
                  />
                  <path
                    fill="#6C767F"
                    d="M9 317.6c0 1.4-.4 2.5-1.2 3.2S6 322 4.6 322H2.2v-8.6h2.6c1.3 0 2.4.4 3.1 1.1s1.1 1.8 1.1 3.1zm-1 .1c0-1.1-.3-2-.8-2.5s-1.4-.8-2.5-.8H3.2v6.8h1.2c1.2 0 2.1-.3 2.7-.9s.9-1.5.9-2.6zm5.5 4.4c-.9 0-1.7-.3-2.2-.9s-.8-1.4-.8-2.4.3-1.9.8-2.5 1.2-.9 2.1-.9c.8 0 1.4.3 1.9.8s.7 1.2.7 2.1v.6h-4.4c0 .8.2 1.3.6 1.7s.9.6 1.5.6c.7 0 1.4-.1 2.1-.4v.9c-.3.1-.7.3-1 .3s-.9.1-1.3.1zm-.3-5.8c-.5 0-.9.2-1.2.5s-.5.8-.5 1.4h3.4c0-.6-.1-1.1-.4-1.4s-.8-.5-1.3-.5zm6.9 5.8c-.9 0-1.6-.3-2.2-.9s-.8-1.4-.8-2.4c0-1.1.3-1.9.8-2.5s1.3-.9 2.2-.9c.3 0 .6 0 .9.1s.6.1.7.2l-.3.8c-.2-.1-.4-.2-.7-.2s-.5-.1-.7-.1c-1.3 0-2 .8-2 2.5 0 .8.2 1.4.5 1.8s.8.6 1.4.6c.5 0 1.1-.1 1.6-.3v.9c-.2.3-.8.4-1.4.4zm8.5-5.3c.9 0 1.6.2 2.1.7s.8 1.1.8 1.8c0 .9-.3 1.6-.8 2.1s-1.3.8-2.3.8c-1 0-1.7-.2-2.2-.5v-.9c.3.2.6.3 1 .4s.8.1 1.2.1c.7 0 1.2-.2 1.6-.5s.6-.8.6-1.4c0-1.2-.7-1.8-2.2-1.8-.4 0-.9.1-1.5.2l-.5-.3.3-4H31v.9h-3.4l-.2 2.6c.3-.2.7-.2 1.2-.2zm101.4.8c0 1.4-.4 2.5-1.2 3.2s-1.9 1.1-3.3 1.1h-2.4v-8.6h2.6c1.3 0 2.4.4 3.1 1.1s1.2 1.9 1.2 3.2zm-1 .1c0-1.1-.3-2-.8-2.5s-1.4-.8-2.5-.8h-1.4v6.8h1.2c1.2 0 2.1-.3 2.7-.9s.8-1.5.8-2.6zm5.5 4.4c-.9 0-1.7-.3-2.2-.9s-.8-1.4-.8-2.4.3-1.9.8-2.5 1.2-.9 2.1-.9c.8 0 1.4.3 1.9.8s.7 1.2.7 2.1v.6h-4.4c0 .8.2 1.3.6 1.7s.9.6 1.5.6c.7 0 1.4-.1 2.1-.4v.9c-.3.1-.7.3-1 .3s-.9.1-1.3.1zm-.3-5.8c-.5 0-.9.2-1.2.5s-.5.8-.5 1.4h3.4c0-.6-.1-1.1-.4-1.4s-.8-.5-1.3-.5zm6.9 5.8c-.9 0-1.6-.3-2.2-.9s-.8-1.4-.8-2.4c0-1.1.3-1.9.8-2.5s1.3-.9 2.2-.9c.3 0 .6 0 .9.1s.6.1.7.2l-.3.8c-.2-.1-.4-.2-.7-.2s-.5-.1-.7-.1c-1.3 0-2 .8-2 2.5 0 .8.2 1.4.5 1.8s.8.6 1.4.6c.5 0 1.1-.1 1.6-.3v.9c-.2.3-.8.4-1.4.4zm9.4-.1h-.9v-7.5l-.3.3c-.1.1-.6.5-1.4 1.1l-.5-.7 2.3-1.8h.8v8.6zm8.9-4.3c0 1.5-.2 2.6-.7 3.3s-1.2 1.1-2.1 1.1c-.9 0-1.6-.4-2.1-1.1s-.7-1.8-.7-3.3c0-1.5.2-2.6.7-3.3s1.2-1.1 2.1-1.1c.9 0 1.6.4 2.1 1.1s.7 1.9.7 3.3zm-4.6 0c0 1.2.1 2.2.4 2.7s.8.9 1.4.9c.6 0 1.1-.3 1.4-.9s.4-1.5.4-2.7-.1-2.1-.4-2.7-.8-.9-1.4-.9c-.6 0-1.1.3-1.4.8s-.4 1.6-.4 2.8zm97.2-.1c0 1.4-.4 2.5-1.2 3.2s-1.9 1.1-3.3 1.1h-2.4v-8.6h2.6c1.3 0 2.4.4 3.1 1.1s1.2 1.9 1.2 3.2zm-1 .1c0-1.1-.3-2-.8-2.5s-1.4-.8-2.5-.8h-1.4v6.8h1.2c1.2 0 2.1-.3 2.7-.9s.8-1.5.8-2.6zm5.5 4.4c-.9 0-1.7-.3-2.2-.9s-.8-1.4-.8-2.4.3-1.9.8-2.5 1.2-.9 2.1-.9c.8 0 1.4.3 1.9.8s.7 1.2.7 2.1v.6h-4.4c0 .8.2 1.3.6 1.7s.9.6 1.5.6c.7 0 1.4-.1 2.1-.4v.9c-.3.1-.7.3-1 .3s-.9.1-1.3.1zm-.3-5.8c-.5 0-.9.2-1.2.5s-.5.8-.5 1.4h3.4c0-.6-.1-1.1-.4-1.4s-.8-.5-1.3-.5zm6.9 5.8c-.9 0-1.6-.3-2.2-.9s-.8-1.4-.8-2.4c0-1.1.3-1.9.8-2.5s1.3-.9 2.2-.9c.3 0 .6 0 .9.1s.6.1.7.2l-.3.8c-.2-.1-.4-.2-.7-.2s-.5-.1-.7-.1c-1.3 0-2 .8-2 2.5 0 .8.2 1.4.5 1.8s.8.6 1.4.6c.5 0 1.1-.1 1.6-.3v.9c-.2.3-.8.4-1.4.4zm9.4-.1h-.9v-7.5l-.3.3c-.1.1-.6.5-1.4 1.1l-.5-.7 2.3-1.8h.8v8.6zm5.9-5.2c.9 0 1.6.2 2.1.7s.8 1.1.8 1.8c0 .9-.3 1.6-.8 2.1s-1.3.8-2.3.8c-1 0-1.7-.2-2.2-.5v-.9c.3.2.6.3 1 .4s.8.1 1.2.1c.7 0 1.2-.2 1.6-.5s.6-.8.6-1.4c0-1.2-.7-1.8-2.2-1.8-.4 0-.9.1-1.5.2l-.5-.3.3-4h4.3v.9h-3.4l-.2 2.6c.3-.2.8-.2 1.2-.2z"
                  />
                  <path
                    fill="#7F8993"
                    d="M366.9 321v-8.6h3c.7 0 1.2 0 1.5.1.5.1.9.3 1.3.6.5.4.8.9 1 1.5s.3 1.3.3 2-.1 1.2-.2 1.7-.3.9-.6 1.3-.5.6-.8.8-.6.3-1 .4-.9.1-1.4.1h-3.1zm1.2-1h1.8c.6 0 1-.1 1.3-.2s.6-.3.8-.4c.3-.3.5-.6.6-1.1s.2-1 .2-1.7c0-.9-.1-1.6-.4-2.1s-.7-.8-1.1-1c-.3-.1-.8-.2-1.5-.2H368v6.7zm11.6-1l1.1.1c-.2.6-.5 1.1-1 1.5s-1.1.5-1.8.5c-.9 0-1.6-.3-2.2-.8s-.8-1.3-.8-2.4c0-1 .3-1.9.8-2.4s1.2-.9 2.1-.9c.8 0 1.5.3 2 .8s.8 1.4.8 2.4v.3h-4.6c0 .7.2 1.2.6 1.6s.8.5 1.3.5c.4 0 .7-.1 1-.3s.6-.5.7-.9zm-3.4-1.7h3.5c0-.5-.2-.9-.4-1.2-.3-.4-.8-.6-1.3-.6s-.9.2-1.2.5-.6.7-.6 1.3zm9.9 1.4l1 .1c-.1.7-.4 1.3-.9 1.7s-1 .6-1.7.6c-.9 0-1.5-.3-2.1-.8s-.8-1.4-.8-2.4c0-.7.1-1.3.3-1.8s.6-.9 1-1.1 1-.4 1.5-.4c.7 0 1.2.2 1.7.5s.7.8.8 1.5l-1 .2c-.1-.4-.3-.7-.5-.9s-.5-.3-.9-.3c-.5 0-1 .2-1.3.6s-.5 1-.5 1.8.2 1.4.5 1.8.7.6 1.3.6c.4 0 .8-.1 1-.4s.5-.8.6-1.3zm10.5 1.3v1H391c0-.3 0-.5.1-.7.1-.4.4-.8.7-1.1s.8-.8 1.4-1.3c.9-.8 1.6-1.4 1.9-1.8s.5-.9.5-1.3-.1-.8-.4-1.1-.7-.4-1.2-.4-.9.2-1.2.5-.5.7-.5 1.3l-1.1-.1c.1-.8.4-1.4.8-1.8s1.1-.6 2-.6c.8 0 1.5.2 2 .7s.7 1 .7 1.7c0 .3-.1.7-.2 1s-.4.7-.7 1-.9.9-1.6 1.5c-.6.5-1 .9-1.2 1.1s-.3.4-.4.6h4.1zm1.1-3.2c0-1 .1-1.8.3-2.5s.5-1.1.9-1.4.9-.5 1.6-.5c.5 0 .9.1 1.2.3s.6.5.9.8.4.8.5 1.3.2 1.2.2 2c0 1-.1 1.8-.3 2.4s-.5 1.1-.9 1.4-.9.5-1.6.5c-.8 0-1.5-.3-2-.9-.5-.7-.8-1.8-.8-3.4zm1.1 0c0 1.4.2 2.3.5 2.8s.7.7 1.2.7.9-.2 1.2-.7.5-1.4.5-2.8-.2-2.4-.5-2.8-.7-.7-1.2-.7-.9.2-1.2.6c-.3.5-.5 1.5-.5 2.9zm92 4.2v-8.6h3c.7 0 1.2 0 1.5.1.5.1.9.3 1.3.6.5.4.8.9 1 1.5s.3 1.3.3 2-.1 1.2-.2 1.7-.3.9-.6 1.3-.5.6-.8.8-.6.3-1 .4-.9.1-1.4.1h-3.1zm1.2-1h1.8c.6 0 1-.1 1.3-.2s.6-.3.8-.4c.3-.3.5-.6.6-1.1s.2-1 .2-1.7c0-.9-.1-1.6-.4-2.1s-.7-.8-1.1-1c-.3-.1-.8-.2-1.5-.2H492v6.7zm11.6-1l1.1.1c-.2.6-.5 1.1-1 1.5s-1.1.5-1.8.5c-.9 0-1.6-.3-2.2-.8s-.8-1.3-.8-2.4c0-1 .3-1.9.8-2.4s1.2-.9 2.1-.9c.8 0 1.5.3 2 .8s.8 1.4.8 2.4v.3h-4.6c0 .7.2 1.2.6 1.6s.8.5 1.3.5c.4 0 .7-.1 1-.3s.6-.5.7-.9zm-3.4-1.7h3.5c0-.5-.2-.9-.4-1.2-.3-.4-.8-.6-1.3-.6s-.9.2-1.2.5-.6.7-.6 1.3zm9.9 1.4l1 .1c-.1.7-.4 1.3-.9 1.7s-1 .6-1.7.6c-.9 0-1.5-.3-2.1-.8s-.8-1.4-.8-2.4c0-.7.1-1.3.3-1.8s.6-.9 1-1.1 1-.4 1.5-.4c.7 0 1.2.2 1.7.5s.7.8.8 1.5l-1 .2c-.1-.4-.3-.7-.5-.9s-.5-.3-.9-.3c-.5 0-1 .2-1.3.6s-.5 1-.5 1.8.2 1.4.5 1.8.7.6 1.3.6c.4 0 .8-.1 1-.4s.5-.8.6-1.3zm10.5 1.3v1H515c0-.3 0-.5.1-.7.1-.4.4-.8.7-1.1s.8-.8 1.4-1.3c.9-.8 1.6-1.4 1.9-1.8s.5-.9.5-1.3-.1-.8-.4-1.1-.7-.4-1.2-.4-.9.2-1.2.5-.5.7-.5 1.3l-1.1-.1c.1-.8.4-1.4.8-1.8s1.1-.6 2-.6c.8 0 1.5.2 2 .7s.7 1 .7 1.7c0 .3-.1.7-.2 1s-.4.7-.7 1-.9.9-1.6 1.5c-.6.5-1 .9-1.2 1.1s-.3.4-.4.6h4.1zm1.1-1.2l1.1-.1c.1.5.3.9.6 1.2s.7.4 1.1.4c.5 0 .9-.2 1.3-.6s.5-.9.5-1.5-.2-1.1-.5-1.4-.8-.5-1.3-.5c-.3 0-.6.1-.9.2s-.5.4-.6.6l-1-.1.8-4.4h4.3v1h-3.4l-.5 2.3c.5-.4 1.1-.5 1.6-.5.8 0 1.4.3 1.9.8s.8 1.2.8 2-.2 1.4-.7 2c-.6.7-1.3 1-2.3 1-.8 0-1.4-.2-1.9-.7s-.8-1-.9-1.7z"
                  />
                </svg>
              </div>
              <div className="card card-balance__status is-animated">
                <div className="card__body">
                  <div className="icon">
                    <span className="icon-arrow-up"></span>
                  </div>
                  <p>
                    Current Balance{" "}
                    <span className="color-green" id="positive">
                      + 6 490 USD
                    </span>
                  </p>
                </div>
              </div>
              <div
                className={`card card-balance__status card-balance__status--down  is-animated`}
              >
                <div className="card__body">
                  <div className="icon">
                    <span className="icon-arrow-down"></span>
                  </div>
                  <p>
                    Monthly Cashflow
                    <span className="color-red" id="negative">
                      - 1 584 USD
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 ml-auto">
            <div className="shape__step-box">
              <div className="shape__step-number ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="228"
                  height="341"
                  viewBox="0 0 228 341"
                >
                  <linearGradient
                    id="nuber-2"
                    x1="-189.7"
                    x2="-189.7"
                    y1="566.2"
                    y2="565.5"
                    gradientTransform="matrix(227.4268 0 0 -340.3369 43247.5 192746.7)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#eff2f6" />
                    <stop offset="1" stopColor="#fff" />
                  </linearGradient>
                  <path
                    fill="url(#nuber-2)"
                    d="M227.4 341H0v-40.8l86.5-87c25.6-26.2 42.5-44.7 50.8-55.7s14.4-21.2 18.2-30.9c3.8-9.6 5.7-20 5.7-31 0-15.1-4.6-27.1-13.7-35.8a52.5 52.5 0 0 0-37.8-13.1c-12.9 0-25.3 2.4-37.3 7.1S46.8 67.2 31 79.6L1.9 44c18.7-15.8 36.8-26.9 54.4-33.5S92.6.6 112.5.6c31.2 0 56.2 8.1 75 24.4s28.2 38.2 28.2 65.7c0 15.1-2.7 29.5-8.1 43.1s-13.8 27.7-25 42.1-29.9 34-56.1 58.6L68.2 291v2.3h159.3V341z"
                  />
                </svg>
              </div>
              <span className={`sub-heading js-text-animation js-fadeInUp" `}>
                Step 2
              </span>
              <h3 className={`heading js-text-animation js-fadeInUps`}>
                Understand your financial&nbsp;habits
              </h3>
              <ul>
                <li className={`js-text-animation js-fadeInUp`}>
                  Analyze your finance with beautiful, simple and easy to
                  understand graphic. No need for complicated Excel sheets.
                </li>
                <li className={`js-text-animation js-fadeInUp`}>
                  See where your money goes and where they come from every
                  month.
                </li>
                <li className={`js-text-animation js-fadeInUp`}>
                  See whether you spend less than you earn in one place and on 1
                  tap.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row shape__step shape__step--thirt" id="step3">
          <div className="col-12 col-lg-5">
            <div className="shape__step-box">
              <div
                className={`shape__step-number js-text-animation js-fadeInUp`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="226"
                  height="326"
                  viewBox="0 0 226 346"
                >
                  <linearGradient
                    id="number-3"
                    x1="-190.6"
                    x2="-190.6"
                    y1="569.2"
                    y2="568.5"
                    gradientTransform="matrix(225.5908 0 0 -344.9268 43121.5 196387)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#eff2f6"></stop>
                    <stop offset="1" stopColor="#fff"></stop>
                  </linearGradient>
                  <path
                    fill="url(#number-3)"
                    d="M215.8 82.6c0 21.3-6.2 39-18.6 53.1s-29.8 23.7-52.3 28.6v1.8c26.9 3.4 47.1 11.7 60.6 25.1s20.2 31.2 20.2 53.4c0 32.3-11.4 57.2-34.2 74.7s-55.2 26.3-97.3 26.3c-37.2 0-68.5-6-94.1-18.1v-48a215.2 215.2 0 0 0 91.1 22c26 0 45.4-4.8 58.3-14.5s19.3-24.6 19.3-44.8c0-17.9-7.1-31.1-21.3-39.5s-36.6-12.6-67-12.6H51.3v-43.8h29.6c53.5 0 80.3-18.5 80.3-55.5 0-14.4-4.7-25.5-14-33.3s-23.1-11.7-41.3-11.7c-12.7 0-24.9 1.8-36.7 5.4s-25.7 10.6-41.8 21L1 34.6C31.8 12 67.5.6 108.2.6c33.8 0 60.2 7.3 79.2 21.8s28.4 34.6 28.4 60.2z"
                  ></path>
                </svg>
              </div>
              <span className={`sub-heading js-text-animation js-fadeInUp`}>
                Step 3
              </span>
              <h3 className={`heading js-text-animation js-fadeInUp`}>
                Make your spending stress–free
              </h3>
              <ul>
                <li className={`js-text-animation js-fadeInUp`}>
                  Set smart budgets to help you not to overspend in chosen
                  category.
                </li>
                <li className={`js-text-animation js-fadeInUp`}>
                  Know how much you can spend daily in order to stick to your
                  budget.
                </li>
                <li className={`js-text-animation js-fadeInUp`}>
                  Save money for your future dreams.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-6 m-md-auto">
            <div
              className={`shape__step-box shape__step-box--budget not-active`}
            >
              <div className="card p-0">
                <div className="card__head card__head-icon card__head-icon--blue card__head-icon--center">
                  <span className="icon icon-cash"></span>
                </div>

                <div className="card__body card-spending__wrapper">
                  <div className="card card-spending">
                    <div className="card__title">
                      <span className="icon icon-lightening"></span>
                      <span className="card__label">Power and energy</span>
                      <span className="price">2,795 EUR</span>
                    </div>
                    <div className="card__body">
                      <div className="progress-bar" data-percentage="31">
                        <span>31%</span>
                        <div
                          className="fill fill--red"
                          style={{
                            transition: "all 1.5s 0ms ease",
                            width: "31%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-spending">
                    <div className="card__title">
                      <span className="icon icon-knife"></span>
                      <span className="card__label">Food and Drink</span>
                      <span className="price">420 EUR</span>
                    </div>
                    <div className="card__body">
                      <div className="progress-bar" data-percentage="62">
                        <span>62%</span>
                        <div
                          className="fill fill--orange"
                          style={{
                            transition: "all 1.5s 100ms ease",
                            width: "62%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="card card-spending">
                    <div className="card__title">
                      <span className="icon icon-airplane"></span>
                      <span className="card__label">Travel</span>
                      <span className="price">1,367 EUR</span>
                    </div>
                    <div className="card__body">
                      <div className="progress-bar" data-percentage="50">
                        <span>50%</span>
                        <div
                          className="fill fill--pink"
                          style={{
                            transition: "all 1.5s 0ms ease",
                            width: "50%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shape;
