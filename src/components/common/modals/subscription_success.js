import React from "react";

const SubscriptionSuccess = () => {
  return (
    <div
      className="modal fade"
      id="subscriptionSuccess"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="reserveSpotSuccessLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-sm">
        <div className="modal-content bg-pi-800">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="icon icon-close"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-success text-center">
              <div className="modal-body-header modal-success-header">
                <h2 className="modal-title">Reserve Your Spot</h2>
                <h3 className="modal-subtitle">REQUEST SUCCESSFULLY MADE</h3>
                <p>
                  We have received your request, thanks for be part of Soins
                  Kärisma
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSuccess;
