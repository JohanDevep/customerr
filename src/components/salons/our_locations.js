import React, { useState } from "react";
import our_salons_img from "../../../public/assets/images/banner/our-salons.png";
import our_salons_mobile_img from "../../../public/assets/images/banner/our-salons-mobile.png";
import MapComponent from "../map";
import SalonsDetailsModal from "../common/modals/SalonsDetailsModal";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function OurSalons() {
  const [t] = useTranslation("common");
  /** use redux store */
  const salonLocations = useSelector(
    (state) => state.fetch.salonLocationAgregatedData
  );
  const salonLocationDetails = useSelector(
    (state) => state.fetch.salonLocationDetails
  );

  /** user states */
  const [location, setLocation] = useState(0);
  const [active, setActive] = useState(0);

  // the value of the search field
  const [name, setName] = useState("");

  // the search result
  const [places, setPlaces] = useState(salonLocations);

  // filter method
  const filter = (e) => {
    const keyword = e.target.value;
    let keys = Object.keys(salonLocations[0]);
    if (keyword !== "") {
      const results = salonLocations.filter((place) => {
        return place.title.toLowerCase().match(keyword.toLowerCase());
      });
      // Use the toLowerCase() method to make it case-insensitive
      setPlaces(results);
    } else {
      setPlaces(salonLocations);
      // If the text field is empty, show all users
    }
    setName(keyword);
  };

  // handle click
  const handleClick = (locationId) => {
    setLocation(locationId);
    setActive(locationId);
  };

  return (
    <main>
      {/* salons details modal */}
      <SalonsDetailsModal salonsDetails={salonLocationDetails[location]} />
      <section className="page-banner our-salons-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">
              {t("OurLocations.ourLocations.text")}
            </h1>
            <h2 className="page-banner-excerpt">
              {t("OurLocations.inspiredByYou.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source media="(min-width: 768px)" srcSet={our_salons_img} />
              <img src={our_salons_mobile_img} alt="Our Salons Banner" />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("OurLocations.highQuality.text")}</li>
              <li>{t("OurLocations.unlimitBeautyServ.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Section White Start--> */}
      <section className="section-white section-white-our-salons">
        <div className="container">
          <div className="section-white-wrapper">
            <h2 className="section-white-title">
              <small>{t("OurLocations.findA.text")}</small>
              <span>{t("OurLocations.karismaSalon.text")}</span>
            </h2>
            <div className="section-white-content hr-top section-white-content-lg">
              <p>{t("OurLocations.karismaSalonPara.text")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Section White End--> */}
      {/* <!--Map Locations Section Start--> */}
      <section className="map-locations">
        <h2 className="visually-hidden">Locations</h2>
        <div className="container">
          <div className="map-locations-wrapper container">
            <div className="map-locations-row">
              <div className="map-locations-col map-locations-items-area">
                <div className="map-locations-items-grid">
                  <div className="form-group">
                    <label for="location" className="visually-hidden">
                      City & State or Zip
                    </label>
                    <input
                      type="search"
                      id="location"
                      className="form-control"
                      value={name}
                      onChange={filter}
                      placeholder={t("OurLocations.cityState.text")}
                    />
                  </div>
                  <div className="map-locations-ctas">
                    <button className="btn-dark">
                      {t("OurLocations.salons.text")}
                    </button>
                    <button
                      className="btn-dark outline-transparent disabled"
                      disabled
                    >
                      {t("OurLocations.wellnessCenters.text")}
                    </button>
                  </div>
                  <div className="map-locations-card-grid">
                    {places &&
                      places?.map((place) => {
                        return (
                          <div
                            className={`map-locations-item ${
                              active == place?.id ? "active" : ""
                            }`}
                            onClick={() => {
                              handleClick(place?.id);
                            }}
                          >
                            <div className="map-locations-item-content">
                              <h3 className="map-locations-item-title">
                                {place.name}
                              </h3>
                              <p className="map-locations-item-address">
                                {place.title}
                              </p>
                              <p className="map-locations-item-timing">
                                Open Until 05:00 PM - 2Mi
                              </p>
                            </div>
                            <a
                              href="#"
                              className="map-locations-item-link"
                              data-bs-toggle="modal"
                              data-bs-target="#singleSalon"
                              style={{ color: "black" }}
                            >
                              {t("OurLocations.salonDetails.text")}
                            </a>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="map-locations-col map-locations-map-area">
                <MapComponent
                  isMarkerShown={true}
                  key={location}
                  center={{
                    lat: parseFloat(salonLocations[location].latitude),
                    lng: parseFloat(salonLocations[location].longitude),
                  }}
                  zoom={18}
                  places={[salonLocations[location]]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Map Locations Section End--> */}
    </main>
  );
}

export default OurSalons;
