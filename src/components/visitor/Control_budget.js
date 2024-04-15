import React from "react";

const Control_budget = () => {
  return (
    <div className="container">
      <div className="row justify-content-center control-budget__cards">
        <div className="col-12 col-md-6 col-lg-4">
          <div
            className={`card card-preview js-text-animation js-fadeInUp`}
          >
            <div className="card__head card__head-icon card__head-icon--green">
              <span className="icon icon-dashboard"></span>
            </div>
            <div className="card__title">Have perfect control</div>
            <div className="card__body">
              <p>
                over all your cash expenses, bank accounts, E-Wallets and crypto
                wallets.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div
            className={`card card-preview js-text-animation js-fadeInUp`}
          >
            <div className="card__head card__head-icon card__head-icon--pink">
              <span className="icon icon-pie-chart"></span>
            </div>
            <div className="card__title">Get a quick overview</div>
            <div className="card__body">
              <p>
                about your total incomes and expenses at a glance and in one
                place.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div
            className={`card card-preview js-text-animation js-fadeInUp`}
          >
            <div className="card__head card__head-icon card__head-icon--blue">
              <span className="icon icon-cash"></span>
            </div>
            <div className="card__title">Use our smart budgets</div>
            <div className="card__body">
              <p>
                to save money for a new car, dreamy vacation or top university.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control_budget;
