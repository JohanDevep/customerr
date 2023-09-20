import { Link } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import product_repair_img from "../../../../public/assets/images/store/products/product-repair.png";

function Product() {
  const [t] = useTranslation("common");
  const products = useSelector((state) => state.fetch.collectionProducts);
  return (
    <section className="product-listing-section section-content-bordered-bg store-listing-separator">
      <h2 className="visually-hidden">Products</h2>
      <div className="container">
        <div className="section-content-bordered product-listing store-listing">
          <div className="product-listing-grid">
            {products?.length > 0 &&
              products.map((product, key) => (
                <div className="product-listing-item store-listing-item" key={product?.uuid}>
                  <div className="product-listing-item-thumbnail">
                    <img
                      src={
                        product?.imageUrl
                          ? product?.imageUrl
                          : product_repair_img
                      }
                      alt="Product Item"
                    />
                  </div>
                  <h3 className="product-listing-item-title store-listing-title">
                    <span className="store-listing-title-text">
                      {" "}
                      {product?.name}
                    </span>
                    <span className="store-listing-title-category">
                      {product?.description}
                    </span>
                  </h3>
                  <p className="product-listing-item-price store-listing-price">
                    ${product?.price}
                  </p>
                  <Link
                    to={`/store/collection/product/${product?.uuid}`}
                    className="store-listing-item-link"
                  >
                    <span className="visually-hidden">
                      {product?.description}
                    </span>
                  </Link>
                </div>
              ))}
          </div>
          <h3 className="section-title-start">{t("Store.products.text")}</h3>
          <h3 className="section-title-end">{t("Store.products.text")}</h3>
        </div>
      </div>
    </section>
  );
}

export default Product;
