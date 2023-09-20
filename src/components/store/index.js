import React from "react";
import store_img from "../../../public/assets/images/banner/store.png";
import store_mobile_img from "../../../public/assets/images/banner/store-mobile.png";
import { useTranslation } from "react-i18next";
import CollectionProduct from "./collection";
import Product from "./product";

function Store() {
  const [t] = useTranslation("common");
  return (
    <main>
      {/*Page Banner Start*/}
      <section className="page-banner store-banner bg-pi-900">
        <header className="page-banner-header">
          <div className="container">
            <h1 className="page-banner-title">{t("Store.store.text")}</h1>
            <h2 className="page-banner-excerpt">
              {t("Store.collInspiredByYou.text")}
            </h2>
          </div>
        </header>
        <div className="page-banner-visual">
          <div className="container">
            <picture>
              <source media="(min-width: 768px)" srcset={store_img} />
              <img src={store_mobile_img} alt="Store Banner" />
            </picture>
          </div>
        </div>
        <div className="page-banner-strip">
          <div className="container">
            <ul className="page-banner-strip-list">
              <li>{t("Store.highQuality.text")}</li>
              <li>{t("Store.vegan.text")}</li>
              <li>{t("Store.crueltyFree.text")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/*Page Banner End*/}
      {/*Collections Listing Section Start*/}
      <CollectionProduct key={0} />
      {/*Collections Listing Section End*/}
      {/*Products Listing Section Start*/}
      <Product key={1} />
    </main>
  );
}

export default Store;
