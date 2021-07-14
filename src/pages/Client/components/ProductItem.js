import React from "react";
import { Link } from "react-router-dom";
import Stars from "./../components/Stars";
import { formatMoney } from "utils";
import { PRODUCTS_PATH } from "constant/route";
import "../scss/ProductItem.scss";

function ProductItem({ item }) {
    return (
        <div className="product-item">
            <div className="product-item__top">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="product-item__bottom">
                <Link to={`${PRODUCTS_PATH}/${item.id}`} className="product-title">
                    {item.name}
                </Link>
                <Stars starsNumber={item.rating}></Stars>
                <p className="product-description">{item.description}</p>
                <div className="product-foot">
                    <div className="product-price">
                        <span>{formatMoney(item.price)}</span>
                        <span>đ</span>
                    </div>
                    <button type="button" className="btn search-btn">
                        <i className="bx bxs-cart-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
