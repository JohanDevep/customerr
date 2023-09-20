import React from "react";
import ReferSuccess from "./refer_success";
import { useTranslation } from "react-i18next";

const ReferSalon = () => {
  const [t] = useTranslation("common");
  return (
    <React.Fragment>
      <ReferSuccess />
      <div
        className="modal fade"
        id="referASalon"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="referASalonLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
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
              <div className="modal-refer-salon">
                <div className="modal-body-header modal-refer-salon-header">
                  <h2 className="modal-title text-center">
                    {t("ReferSalon.refer_a_Salon.text")}
                  </h2>
                  <p>{t("ReferSalon.refer_a_SalonPara.text")}</p>
                </div>
                <div className="modal-refer-salon-form">
                  <form>
                    <legend className="visually-hidden">Refer A Saloon</legend>
                    <fieldset>
                      <div className="row">
                        <div className="col-item col-md-6">
                          <div className="form-group">
                            <label for="fName" className="visually-hidden">
                              FirstName
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="fName"
                              placeholder={t("ReferSalon.firstName.text")}
                            />
                          </div>
                        </div>
                        <div className="col-item col-md-6">
                          <div className="form-group">
                            <label for="lName" className="visually-hidden">
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="lName"
                              placeholder={t("ReferSalon.lastName.text")}
                            />
                          </div>
                        </div>
                        <div className="col-item col-md-12">
                          <div className="form-group">
                            <label for="salonName" className="visually-hidden">
                              Salon Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="salonName"
                              placeholder={t("ReferSalon.salonName.text")}
                            />
                          </div>
                        </div>
                        <div className="col-item col-md-12">
                          <div className="form-group">
                            <label for="country" className="visually-hidden">
                              Country
                            </label>
                            <select id="country" className="form-control">
                              <option selected disabled>
                                {t("ReferSalon.country.text")}
                              </option>
                              <option value="1">Pakistan</option>
                              <option value="2">Canada</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-item col-md-6">
                          <div className="form-group">
                            <label for="state" className="visually-hidden">
                              State
                            </label>
                            <select id="state" className="form-control">
                              <option selected disabled>
                                {t("ReferSalon.state.text")}
                              </option>
                              <option value="1">Pakistan</option>
                              <option value="2">Canada</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-item col-md-6">
                          <div className="form-group">
                            <label for="city" className="visually-hidden">
                              City
                            </label>
                            <select id="city" className="form-control">
                              <option selected disabled>
                                {t("ReferSalon.city.text")}
                              </option>
                              <option value="1">Pakistan</option>
                              <option value="2">Canada</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-item col-md-6">
                          <div className="form-group">
                            <label for="email" className="visually-hidden">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder={t("ReferSalon.email.text")}
                            />
                          </div>
                        </div>
                        <div className="col-item col-md-6">
                          <div className="form-group">
                            <label for="phone" className="visually-hidden">
                              Phone
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              id="phone"
                              placeholder={t("ReferSalon.phone.text")}
                            />
                          </div>
                        </div>
                        <div className="col-item col-md-12 modal-refer-salon-form-footer">
                          <button
                            className="btn-dark w-100"
                            type="button"
                            data-bs-target="#referASalonSuccess"
                            data-bs-toggle="modal"
                          >
                            {t("ReferSalon.referSalon.value")}
                          </button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReferSalon;
