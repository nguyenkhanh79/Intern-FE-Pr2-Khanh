import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { formatMoney } from "utils";
import Pagination from "./Pagination";

function ProductsShow({ data }) {
    const { t } = useTranslation();

    return (
        <section className="products-show">
            <div className="products-show__header">
                <div className="header-right">
                    <p className="sort-text">{t("sort by")}</p>
                    <select name="sort-by" id="sort-by">
                        <option value="default">{t("default")}</option>
                        <option value="price-asc">{t("price asc")}</option>
                        <option value="price-desc">{t("price desc")}</option>
                    </select>
                    <i className="bx bxs-down-arrow"></i>
                </div>
            </div>
            <div className="products-show__body">
                <ul className="products-list">
                    {data.map((item, index) => (
                        <li className="product-item">
                            <div className="product-item__top">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="product-item__bottom">
                                <Link to="/product-detail" className="product-title">
                                    {item.name}
                                </Link>
                                <p className="product-description">{item.description}</p>
                                <div className="product-foot">
                                    <div className="product-price">
                                        <span>{formatMoney(item.price)}</span>
                                        <span>VNĐ</span>
                                    </div>
                                    <button type="button" class="btn search-btn">
                                        <i class="bx bxs-cart-alt"></i>
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="products-show__footer">
                <Pagination></Pagination>
            </div>
        </section>
    );
}

export default ProductsShow;
