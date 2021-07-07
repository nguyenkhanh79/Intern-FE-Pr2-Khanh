import React from "react";
import { useTranslation } from "react-i18next";
import { Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { confirmModal, formatMoney } from "utils";
import { Link } from "react-router-dom";
import { ADD_PATH, ADMIN_MANAGE_PRODUCTS_PATH } from "constant/route";
import "../scss/AdminProducts.scss";
import { deleteProductRequest } from "redux/actions/productsAction";

const { Search } = Input;
const { Option } = Select;

function AdminProducts() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const categoriesData = useSelector((state) => state.categories.data);
    const productsData = useSelector((state) => state.products.data);

    const tableHeader = [
        "product name",
        "product image",
        "description",
        "quantity",
        "price",
        "action",
    ];

    function onSearch(value) {}
    function handleChange(value) {}

    function handleOnDelete(productId) {
        confirmModal(t("warning"), t("delete product"), () => {
            dispatch(deleteProductRequest(productId));
        });
    }

    return (
        <section className="admin-section">
            <div className="admin-section__header">
                <h2 className="title">{t("products management")}</h2>
            </div>
            <div className="admin-section__content">
                <div className="content-filter">
                    <div className="search-filter">
                        <Search placeholder={t("search")} onSearch={onSearch} enterButton />
                        <Link to={ADMIN_MANAGE_PRODUCTS_PATH + ADD_PATH}>
                            <i class="bx bx-plus"></i>
                        </Link>
                    </div>
                    <div className="categories-filter">
                        <span>{t("categories")}</span>
                        <div className="select-form">
                            <Select
                                defaultValue="all"
                                style={{ width: 200 }}
                                onChange={handleChange}
                            >
                                <Option value="all">{t("all categories")} </Option>
                                {categoriesData.map((item, index) => (
                                    <Option value={item.id} key={item.id}>
                                        {item.title}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="content-table">
                    <table>
                        <thead>
                            <tr>
                                {tableHeader.map((item) => (
                                    <th key={item}>{t(item)}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {productsData.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td className="col-name">
                                            <Link to={`${ADMIN_MANAGE_PRODUCTS_PATH}/${item.id}`}>
                                                <span>{item.productName}</span>
                                            </Link>
                                        </td>
                                        <td className="col-image">
                                            <img src={item.productImage} alt={item.productName} />
                                        </td>
                                        <td className="col-description">{item.description}</td>
                                        <td className="col-quantity">{item.quantity}</td>
                                        <td className="col-price">{formatMoney(item.price)} đ</td>
                                        <td className="col-action">
                                            <div className="action-wrapper">
                                                <Link
                                                    to={`${ADMIN_MANAGE_PRODUCTS_PATH}/${item.id}`}
                                                >
                                                    <i class="bx bxs-edit-alt"></i>
                                                </Link>
                                                <i
                                                    class="bx bx-trash"
                                                    onClick={() => handleOnDelete(item.id)}
                                                ></i>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default AdminProducts;
