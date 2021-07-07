import * as antd from "antd";
import { toast } from 'react-toastify';

export function debounce(func, wait) {
    let timeout;

    return function () {
        let context = this,
            args = arguments;

        let executeFunction = function () {
            func.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(executeFunction, wait);
    };
}

export function formatMoney(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


export function confirmModal(title, content, onOk) {
    antd.Modal.confirm({
        title: title,
        content: content,
        cancelText: "Hủy",
        cancelButtonProps: {
            style: { color: "#0eb58e", borderColor: "#0eb58e" },
        },
        okButtonProps: {
            style: { backgroundColor: "#0eb58e", borderColor: "#0eb58e" },
        },
        okText: "Xóa",
        onOk: onOk
    });
}
