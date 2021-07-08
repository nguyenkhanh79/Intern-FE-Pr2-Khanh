import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROOT_PATH, PRODUCTS_PATH, BLOGS_PATH, CONTACT_PATH } from "constant/route";
import "../scss/Header.scss";

function Header() {
    const headerNav = useRef(null);
    const { t } = useTranslation();

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
                                <li className="language-item">Tiếng Việt</li>
                                <li className="language-item">English</li>
                            </ul>
                        </div>
                        <div className="option-auth">
                            <div className="option-title">
                                <Link to="/signin">
                                    <i className="bx bxs-user"></i>
                                    <span>{t("signin")}</span>
                                </Link>
                            </div>
                            <div className="option-title">
                                <Link to="/signup">
                                    <i className="bx bxs-user"></i>
                                    <span>{t("signup")}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__right">
                    <div className="header-cart">
                        <Link to="/cart">
                            <i className="bx bxs-cart-alt"></i>
                            <span>3</span>
                        </Link>
                    </div>
                    <div className="header-menu" onClick={(e) => toggleMenu(e)}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
