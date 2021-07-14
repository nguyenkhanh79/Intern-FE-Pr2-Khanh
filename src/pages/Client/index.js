import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesRequest } from "redux/actions/categoriesAction";
import { getProductsRequest } from "redux/actions/productsAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./Products";
import ProdcutDetail from "./ProductDetail";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { PRODUCTS_PATH } from "constant/route";

function Client() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsRequest());
        dispatch(getCategoriesRequest());
    }, [dispatch]);

    return (
        <>
            <Header></Header>
            <main className="main-content main-products">
                <Switch>
                    <Route path={PRODUCTS_PATH} exact>
                        <Products></Products>
                    </Route>
                    <Route path={`${PRODUCTS_PATH}/:productId`}>
                        <ProdcutDetail></ProdcutDetail>
                    </Route>
                </Switch>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Client;
