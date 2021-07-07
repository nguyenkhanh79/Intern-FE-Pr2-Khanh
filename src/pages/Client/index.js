import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsRequest } from "redux/actions/productsAction";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Client() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsRequest());
    }, []);

    return (
        <>
            <Header></Header>
            <Footer></Footer>
        </>
    );
}

export default Client;
