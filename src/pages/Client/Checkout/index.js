import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../scss/Checkout.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    getProvinceRequest,
    getDistrictRequest,
    getWardRequest,
} from "redux/actions/addressAction";
import { useForm, Controller } from "react-hook-form";
import InputSelect from "./InputSelect";
import InputText from "./InputText";
import { nameRegex, emailRegex, phoneNumberRegex } from "utils/index";
import InputTextArea from "./InputTextarea";
import { formatMoney } from "utils";
import { Radio, Input, Space } from "antd";

function Checkout() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({ mode: "onTouched" });
    const provinceData = useSelector((state) => state.address.province);
    const districtData = useSelector((state) => state.address.district);
    const wardData = useSelector((state) => state.address.ward);
    const isFetchingProvince = useSelector((state) => state.address.isFetchingProvince);
    const isFetchingDistrict = useSelector((state) => state.address.isFetchingDistrict);
    const isFetchingWard = useSelector((state) => state.address.isFetchingWard);

    useEffect(() => {
        dispatch(getProvinceRequest());
    }, [dispatch]);

    const onProvinceChange = (provinceId) => {
        dispatch(getDistrictRequest(provinceId));
        setValue("district", "");
        setValue("ward", "");
    };

    const onDistrictChange = (districtId) => {
        dispatch(getWardRequest(districtId));
        setValue("ward", "");
    };

    const onSubmit = (data) => console.log(data);

    return (
        <section className="checkout">
            <h2 className="checkout__title">{t("checkout")}</h2>
            <div className="checkout-main">
                <div className="checkout-main__left">
                    <form
                        action="#"
                        className="form checkout-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h3 className="block-title">{t("personal info")}</h3>
                        <div className="row-block">
                            <InputText
                                control={control}
                                fieldName="name"
                                error={errors.name}
                                validatePattern={nameRegex}
                            />
                        </div>
                        <div className="row-block">
                            <InputText
                                control={control}
                                fieldName="email"
                                error={errors.email}
                                validatePattern={emailRegex}
                            />
                            <InputText
                                control={control}
                                fieldName="phoneNumber"
                                error={errors.phoneNumber}
                                validatePattern={phoneNumberRegex}
                            />
                        </div>
                        <h3 className="block-title child-title">{t("delivery address")}</h3>
                        <div className="row-block row-block--half">
                            <InputSelect
                                control={control}
                                fieldName="province"
                                data={provinceData}
                                isFetching={isFetchingProvince}
                                onChangeField={onProvinceChange}
                                error={errors.province}
                            />
                        </div>
                        <div className="row-block row-block--half">
                            <InputSelect
                                control={control}
                                fieldName="district"
                                data={districtData}
                                isFetching={isFetchingDistrict}
                                onChangeField={onDistrictChange}
                                error={errors.district}
                            />
                        </div>
                        <div className="row-block row-block--half">
                            <InputSelect
                                control={control}
                                fieldName="ward"
                                data={wardData}
                                isFetching={isFetchingWard}
                                error={errors.ward}
                            />
                        </div>
                        <div className="row-block">
                            <InputText
                                control={control}
                                fieldName="address"
                                error={errors.address}
                            />
                        </div>
                        <div className="row-block">
                            <InputTextArea
                                control={control}
                                fieldName="note"
                                error={errors.note}
                                isRequire={false}
                            />
                        </div>
                        <h3 className="block-title child-title">{t("payment method")}</h3>
                        <div className="row-block row-block--checkbox">
                            <Controller
                                name={"paymentMethod"}
                                control={control}
                                render={({ field: { onChange, onBlur, value, name, ref } }) => (
                                    <Radio.Group
                                        onChange={onChange}
                                        value={value}
                                        defaultValue="payment on delivery"
                                    >
                                        <Space direction="vertical">
                                            <Radio value="payment on delivery">
                                                {t("payment on delivery")}
                                            </Radio>
                                            <Radio value="payment via card" disabled>
                                                {t("payment via card")}
                                            </Radio>
                                        </Space>
                                    </Radio.Group>
                                )}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Trường trống",
                                    },
                                }}
                            />
                        </div>
                    </form>
                </div>
                <div className="checkout-main__right">
                    <h3 className="block-title">{t("bill info")}</h3>
                    <div className="price-row">
                        <span className="price-title">{t("sub total price")}</span>
                        <span className="price-number">{formatMoney(totalPrice)} đ</span>
                    </div>
                    <div className="price-row">
                        <span className="price-title">{t("tax")}</span>
                        <span className="price-number">
                            {formatMoney((totalPrice * 10) / 100)} đ
                        </span>
                    </div>
                    <div className="price-row">
                        <span className="price-title">{t("shipping fee")}</span>
                        <span className="price-number">{formatMoney(30000)} đ</span>
                    </div>
                    <div className="price-row price-row--total">
                        <span className="price-title">{t("total price")}</span>
                        <span className="price-number">
                            {formatMoney(totalPrice + (totalPrice * 10) / 100 + 30000)} đ
                        </span>
                    </div>
                    <button className="order-button" type="submit">
                        {t("order")}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Checkout;
