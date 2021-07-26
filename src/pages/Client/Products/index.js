import React, { useEffect } from "react";
import "../scss/Products.scss";
import Sidebar from "./Sidebar";
import ProductsShow from "./ProductsShow";
import { db } from "firebase-config";
import productsApi from "apis/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { getProductsFiltersRequest } from "redux/actions/productsAction";

function Products() {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters)

    useEffect(() => {
        dispatch(getProductsFiltersRequest(filters))
    }, [filters]);

    return (
        <section className="products-container">
            <Sidebar></Sidebar>
            <ProductsShow></ProductsShow>
        </section>
    );
}

export default Products;
