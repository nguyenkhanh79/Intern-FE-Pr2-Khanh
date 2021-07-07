import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesRequest } from "redux/actions/categoriesAction";
import { getProductsRequest } from "redux/actions/productsAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./Products";

function Client() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsRequest());
        dispatch(getCategoriesRequest());
    }, [dispatch]);

    return (
        <>
            <Header></Header>
            <main className="main-content">
                <Products></Products>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Client;
