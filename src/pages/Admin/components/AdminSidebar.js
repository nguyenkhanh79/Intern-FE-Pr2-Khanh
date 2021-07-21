import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { ADMIN_CATEGOIES_PATH, ADMIN_PATH, ADMIN_PRODUCTS_PATH } from "./../../../constant/route";
import "../scss/AdminSidebar.scss";
import { useLocation } from "react-router-dom";

function AdminSidebar() {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    const sidebarMenu = [
        {
            title: "dashboard",
            url: ADMIN_PATH,
        },
        {
            title: "products",
            url: ADMIN_PRODUCTS_PATH,
        },
        {
            title: "categories",
            url: ADMIN_CATEGOIES_PATH,
        },
    ];

    return (
        <aside className="admin-sidebar">
            <ul className="sidebar-menu">
                {sidebarMenu.map(({ title, url }, index) => {
                    return (
                        <li
                            className="sidebar-item"
                            key={index}
                        >
                            <NavLink to={url} exact={index === 0}>
                                <span>{t(title)}</span>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}

export default AdminSidebar;
