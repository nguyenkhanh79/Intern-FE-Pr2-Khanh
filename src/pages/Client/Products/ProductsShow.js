import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";
import { formatMoney } from "utils";
import Stars from "./../components/Stars";
import Loading from "../components/Loading";
import { Pagination } from "antd";
import usePagination from "hooks/usePagination";
import { changeFilterPriceSort, resetFilter } from "redux/actions/filterAction";

function ProductsShow({reset}) {
    const { t } = useTranslation();
    const data = useSelector((state) => state.products.data);
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();
    const isFetching = useSelector((state) => state.products.isFetching);
    const isSearching = useSelector((state) => state.products.isSearching);
    const { currentData, totalPage, pageSize, setPaginationParam, currentPage } = usePagination(
        "products",
        16
    );

    useEffect(() => {
        setPaginationParam((state) => {
            return {
                ...state,
                page: 1,
            };
        });
    }, [filters, setPaginationParam, reset]);

    function handleOnChangePage(page, pageSize) {
        setPaginationParam({ page, pageSize });
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    function handleOnSortChange(e) {
        dispatch(changeFilterPriceSort(e.target.value));
    }

    function handleOnResetFilter() {
        dispatch(resetFilter());
    }

    return (
        <section className="products-show">
            <div className="products-show__header">
                <div className="header-left">
                    <button className="reset-btn btn" onClick={handleOnResetFilter}>
                        {t("reset filter")}
                    </button>
                    <span>{t("result length")}: {data.length}</span>
                </div>
                <div className="header-right">
                    <p className="sort-text">{t("sort by")}</p>
                    <select
                        name="sort-by"
                        id="sort-by"
                        onChange={handleOnSortChange}
                        value={filters.sort.value}
                    >
                        <option value="default">{t("default")}</option>
                        <option value="asc">{t("price asc")}</option>
                        <option value="desc">{t("price desc")}</option>
                    </select>
                    <i className="bx bxs-down-arrow"></i>
                </div>
            </div>
            <div className="products-show__body">
                {isFetching || isSearching ? (
                    <Loading />
                ) : currentData.length > 0 ? (
                    <ul className="products-list">
                        {currentData.map((item, index) => (
                            <li key={index}>
                                <ProductItem item={item} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="data-notfound">{t("not products found")}</div>
                )}
            </div>
            {currentData.length > 0 && (
                <div className="products-show__footer">
                    <Pagination
                        current={currentPage}
                        total={totalPage}
                        pageSize={pageSize}
                        onChange={handleOnChangePage}
                        pageSizeOptions={[5, 10, 15, 20]}
                        className="custom-pagination"
                        showSizeChanger={false}
                    />
                </div>
            )}
        </section>
    );
}

export default ProductsShow;
