import * as antd from "antd";

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
        onOk: onOk,
    });
}

export const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const usernameRegex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
export const nameRegex = /^[A-Za-zÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
export const phoneNumberRegex = /(09|01[2|6|8|9])+([0-9]{8})\b/g;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
export const numberRegex = /^[0-9]*$/g;
export const discountRegex = /^[1-9][0-9]?$|^100$/g;
