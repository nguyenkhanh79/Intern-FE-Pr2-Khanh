import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";
import { formatMoney } from "utils";
import Pagination from "./Pagination";
import Stars from "./../components/Stars";

function ProductsShow() {
    const { t } = useTranslation();
    const data = useSelector((state) => state.products.data);

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
                        <li key={index}>
                            <ProductItem item={item} />
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
