import { Link } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function CollectionProduct() {
  const [t] = useTranslation("common");
  const productCollection = useSelector(
    (state) => state.fetch.collectionProducts
  );

  return (
    <div>
      <section className="collection-listing-section section-content-bordered-bg store-listing-separator">
        <h2 className="visually-hidden">Collections</h2>
        <div className="container">
          <div className="section-content-bordered collection-listing store-listing">
            <div className="collection-listing-grid">
              {productCollection?.length > 0
                ? productCollection?.map((collection,key) => {
                    return collection?.description == "Collection" ||
                      collection?.description == "Repair Collection" ? (
                      <div className="collection-listing-item store-listing-item" >
                        <div className="collection-listing-item-thumbnail" key={collection?.uuid}>
                          <img
                            src={collection?.imageUrl}
                            alt="Collection Item"
                            width="476"
                            height="386"
                          />
                        </div>
                        <h3 className="collection-listing-item-title store-listing-title">
                          <span className="store-listing-title-text">
                            {collection?.name}
                          </span>
                        </h3>
                        <p className="collection-listing-item-price store-listing-price">
                          ${collection?.price}
                        </p>
                        <Link
                          to={`/store/collection/product/${collection?.uuid}`}
                          className="store-listing-item-link"
                        >
                          <span className="visually-hidden">
                            {" "}
                            {collection?.name}
                          </span>
                        </Link>
                      </div>
                    ) : (
                      false
                    );
                  })
                : false}
            </div>
            <h3 className="section-title-start">
              {t("Store.collections.text")}
            </h3>
            <h3 className="section-title-end">{t("Store.collections.text")}</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CollectionProduct;
