import React from "react";
import { useNavigate } from "react-router-dom";
import not_found_img from "../../../../public/assets/images/banner/not-found.png";
const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <main>
      {/* <!--Page Banner Start--> */}
      <section className="page-banner not-found-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">404</h1>
            <h2 className="page-banner-excerpt">PAGE NOT FOUND</h2>
            <p className="page-banner-text">Sorry we couldn't find this page</p>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="btn-white"
            >
              BACK TO HOMEPAGE
            </button>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <img
              loading="lazy"
              src={not_found_img}
              alt="Privacy Policy Banner"
            />
          </div>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>HIGH QUALITY</li>
              <li>Unlimited beauty Services</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!--Page Banner End--> */}
    </main>
  );
};

export default NotFoundPage;
