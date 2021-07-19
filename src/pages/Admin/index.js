import React from "react";
import { useDispatch } from 'react-redux';
import { signoutRequest } from './../../redux/actions/authAction';

function Admin() {
    const dispatch = useDispatch();

    const signout = () => {
        dispatch(signoutRequest())
    };

    return (
        <div>
            <button onClick={signout}>Signout</button>
        </div>
    );
}

export default Admin;
