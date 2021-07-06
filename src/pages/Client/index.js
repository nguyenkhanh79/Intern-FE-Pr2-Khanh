import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsRequest } from "redux/actions/productsAction";

function Client() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsRequest());
    }, []);

    return <div>Client</div>;
}

export default Client;
