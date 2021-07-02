import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
    ROOT_PATH,
    PRODUCTS_PATH,
    BLOGS_PATH,
    CONTACT_PATH,
    SIGN_IN_PATH,
    SIGN_UP_PATH,
    ORDER_TRACKING_PATH,
} from "constant/route";
import "../scss/Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { Popover, Drawer } from "antd";
import { signoutRequest } from "redux/actions/authAction";
import { formatMoney } from "utils";
import { SHOW_PROFILE_MODAL } from "redux/actions/modalAction";
import i18n from "i18n";

function Header() {
    const headerNav = useRef(null);
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.currentUser);
    const cart = useSelector((state) => state.cart);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [drawerPlacement, setDrawerPlacement] = useState("right");
    const [popupVisible, setPopupVisible] = useState(false);

    const menuData = [
        { title: "home", url: ROOT_PATH },
        { title: "products", url: PRODUCTS_PATH },
        { title: "blogs", url: BLOGS_PATH },
        { title: "contact", url: CONTACT_PATH },
    ];

    function toggleMenu(e) {
        e.stopPropagation();
        e.currentTarget.classList.toggle("menu-active");
        headerNav.current.classList.toggle("header-nav--active");
    }

    function signout() {
        dispatch(signoutRequest());
    }

    function showModal(e) {
        e.preventDefault();
        setPopupVisible(false);
        dispatch({ type: SHOW_PROFILE_MODAL });
    }

    function popupContent() {
        return (
            <div className="popup-content">
                <a href="profile" onClick={showModal}>
                    {t("profile")}
                </a>
                <Link to={ORDER_TRACKING_PATH}>{t("your order")}</Link>
                <button type="button" className="signout-btn primary-btn" onClick={signout}>
                    {t("signout")}
                </button>
            </div>
        );
    }

    function showDrawer() {
        setDrawerVisible(true);
    }

    function onClose() {
        setDrawerVisible(false);
    }

    function onChange(e) {
        setDrawerPlacement(e.target.value);
    }

    function changeLanguage(lng) {
        i18n.changeLanguage(lng)
    }

    return (
        <header className="header-container">
            <div className="header main-content">
                <h1 className="header__left logo">
                    <Link to="/">
                        <i className="lab la-envira"></i>
                        <span>Fresh</span>
                    </Link>
                </h1>
                <div className="header__middle" ref={headerNav}>
                    <nav className="header-nav">
                        <ul className="nav-list">
                            {menuData.map((item, index) => (
                                <li className="nav-item" key={index}>
                                    <Link to={item.url}>{t(item.title)}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="header-option">
                        <div className="option-language">
                            <div className="option-title">
                                <i className="las la-globe"></i>
                                <span>{t("language")}</span>
                            </div>
                            <ul className="language-list">
                                <li className="language-item" onClick={()=>changeLanguage("vi")}>Tiếng Việt</li>
                                <li className="language-item" onClick={()=>changeLanguage("en")}>English</li>
                            </ul>
                        </div>
                        {currentUser ? (
                            <Popover
                                placement="bottom"
                                content={popupContent()}
                                visible={popupVisible}
                                trigger="click"
                                onVisibleChange={setPopupVisible}
                            >
                                <div className="user">
                                    <div className="user-profile">
                                        <span className="user-name">{currentUser.name}</span>
                                    </div>
                                    <div className="user-avatar">
                                        <img
                                            src={
                                                currentUser.avatar
                                                    ? currentUser.avatar
                                                    : "https://karateinthewoodlands.com/wp-content/uploads/2017/09/default-user-image.png"
                                            }
                                            alt={currentUser.name}
                                        />
                                    </div>
                                </div>
                            </Popover>
                        ) : (
                            <div className="option-auth">
                                <div className="option-title">
                                    <Link to={SIGN_IN_PATH}>
                                        <i className="bx bxs-user"></i>
                                        <span>{t("signin")}</span>
                                    </Link>
                                </div>
                                <div className="option-title">
                                    <Link to={SIGN_UP_PATH}>
                                        <i className="bx bxs-user"></i>
                                        <span>{t("signup")}</span>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="header__right">
                    <div className="header-cart" onClick={showDrawer}>
                        <div className="cart-link">
                            <i className="bx bxs-cart-alt"></i>
                            <span>{cartQuantity}</span>
                        </div>
                    </div>
                    <div className="header-menu" onClick={(e) => toggleMenu(e)}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </div>
            <Drawer
                placement={drawerPlacement}
                closable={false}
                onClose={onClose}
                visible={drawerVisible}
                key={drawerPlacement}
                className="cart-drawer"
                width="350"
                zIndex={1000000}
            >
                <div className="cart-title">
                    <h3>{t("cart")}</h3>
                    <i class="bx bx-x" onClick={onClose}></i>
                </div>
                <ul className="cart-list">
                    {cart.products.map(({ data, quantity }) => {
                        return (
                            <li>
                                <div className="item-left">
                                    <img src={data.productImage} alt="" />
                                </div>
                                <div className="item-right">
                                    <p className="name">{data.productName}</p>
                                    <p className="price">{formatMoney(data.price)} đ</p>
                                    <p className="quantity">
                                        {quantity} {data.unit}
                                    </p>
                                    <p className="total">{formatMoney(data.price * quantity)} đ</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <p className="cart-total">
                    <span>{t("total")}</span>
                    <span>{formatMoney(cart.totalPrice)} đ</span>
                </p>
                <Link to="/cart" className="cart-btn btn" onClick={onClose}>
                    {t("cart detail")}
                </Link>
            </Drawer>
        </header>
    );
}

export default Header;
