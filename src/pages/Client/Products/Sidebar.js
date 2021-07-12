import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formatMoney } from "utils";

import Stars from "../components/Stars";
import TinyProduct from "../components/TinyProduct";

function Sidebar({ data }) {
    const categoriesData = useSelector((state) => state.categories.data);

    const { t } = useTranslation();

    const ratingData = [5, 4, 3, 2, 1];

    const priceRangeData = [
        {
            from: 10000,
            to: 50000,
        },
        {
            from: 50000,
            to: 100000,
        },
        {
            from: 100000,
            to: 150000,
        },
        {
            from: 150000,
            to: 200000,
        },
        {
            from: 150000,
            to: 200000,
        },
    ];

    return (
        <aside className="products-sidebar">
            <div className="sidebar-block">
                <h3 className="block-title">{t("search")}</h3>
                <form action="/" className="search-form">
                    <input
                        type="text"
                        className="search-input text-input"
                        placeholder={t("search keyword")}
                    />
                    <button type="submit" className="btn search-btn">
                        <i className="bx bx-search-alt-2"></i>
                    </button>
                </form>
            </div>
            <div className="sidebar-block">
                <h3 className="block-title">{t("categories")}</h3>
                <ul className="categories-list">
                    {categoriesData.length > 0 &&
                        categoriesData.map((item) => (
                            <li className="categories-item" key={item.id}>
                                <a href="/" className="categories-link">
                                    <i className="bx bxs-right-arrow"></i>
                                    <span>{item.title}</span>
                                </a>
                            </li>
                        ))}
                </ul>
            </div>
            <div className="sidebar-block">
                <h3 className="block-title">{t("rating")}</h3>
                <ul className="rating-list">
                    {ratingData.map((item, index) => (
                        <li className="rating-item" key={index}>
                            <Stars starsNumber={item}></Stars>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="sidebar-block">
                <h3 className="block-title">{t("price range")}</h3>
                <ul className="price-range-list">
                    {priceRangeData.map((item, index) => (
                        <li key={index}>
                            <span>{formatMoney(item.from)}</span>
                            <span className="sign">-</span>
                            <span>{formatMoney(item.to)}</span>
                            <span className="money-unit">VNĐ</span>
                        </li>
                    ))}
                </ul>
                <form action="/" className="price-range-form">
                    <label htmlFor="from-input">{t("from")}</label>
                    <input type="text" id="from-input" className="text-input"/>
                    <label htmlFor="to-input">{t("to")}</label>
                    <input type="text" id="to-input" className="text-input"/>
                    <button type="submit" className="btn search-btn">
                        {t("filter")}
                    </button>
                </form>
            </div>
            <div className="sidebar-block hot-block">
                <h3 className="block-title">{t("top products")}</h3>
                <ul className="hot-products">
                    {data.map((item, index) => (
                        <li className="hot-product-item">
                            <TinyProduct data={item}></TinyProduct>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;
