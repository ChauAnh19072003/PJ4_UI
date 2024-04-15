import React from "react";

const Features = () => {
  return (
    <div className="container circle invert">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className={`features__title js-text-animation js-fadeInUp`}>
            <b>Features</b> our users love
          </h2>
        </div>
      </div>
      <div className="row features__cards">
        <div className="col-12 col-md-6 col-lg-4">
          <div className={`card card-feature js-text-animation js-fadeInUp`}>
            <div className="card__head card__head-icon">
              <span className="icon-wallet"></span>
            </div>
            <div className="card__body">
              <div className="card__title">Shared wallets</div>
              <div className="card__body">
                <p>
                  are popular among couples, families and roommates who handle
                  their finances in Spendee.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className={`card card-feature js-text-animation js-fadeInUp`}>
            <div className="card__head card__head-icon">
              <span className="icon-bank"></span>
            </div>
            <div className="card__body">
              <div className="card__title">Connecting bank accounts</div>
              <div className="card__body">
                <p>to Spendee is preferred by people paying mostly by card.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className={`card card-feature js-text-animation js-fadeInUp`}>
            <div className="card__head card__head-icon">
              <span className="icon-person"></span>
            </div>
            <div className="card__body">
              <div className="card__title">Customize Spendee</div>
              <div className="card__body">
                <p>
                  Customize your categories, add a picture or a location to
                  every expense.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className={`card card-feature js-text-animation js-fadeInUp`}>
            <div className="card__head card__head-icon">
              <span className="icon-currency"></span>
            </div>
            <div className="card__body">
              <div className="card__title">Multiple currencies</div>
              <div className="card__body">
                <p>
                  are favoured by travellers and digital nomads managing money
                  in more currencies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className={`card card-feature js-text-animation js-fadeInUp`}>
            <div className="card__head card__head-icon">
              <span className="icon-bell"></span>
            </div>
            <div className="card__body">
              <div className="card__title">Alerts and reminders</div>
              <div className="card__body">
                <p>
                  will notify you to pay the bill or not to exceed the budget.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className={`card card-feature js-text-animation js-fadeInUp`}>
            <div className="card__head card__head-icon">
              <span className="icon-cloud"></span>
            </div>
            <div className="card__body">
              <div className="card__title">Sync and backup</div>
              <div className="card__body">
                <p>
                  is valuable for everyone using Spendee across devices and
                  sharing Spendee with others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
