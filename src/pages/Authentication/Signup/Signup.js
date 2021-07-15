import React from "react";
import { useTranslation } from "react-i18next";
import InputText from "../../../components/InputText/InputText";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { SIGN_IN_PATH, SIGN_UP_PATH } from "constant/route";
import { emailRegex, nameRegex, passwordRegex, phoneNumberRegex, usernameRegex } from "utils";
import InputSelect from "components/InputSelect/InputSelect";

function Signin() {
    const { t } = useTranslation();
    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({ mode: "onTouched" });

    const genderData = [
        {
            gender_id: 1,
            gender_name: "Nam",
        },
        {
            gender_id: 2,
            gender_name: "Nữ",
        },
    ];

    return (
        <main className="main-content auth-main">
            <h1 className="logo">
                <i className="lab la-envira"></i>
                <span>Fresh</span>
            </h1>
            <div className="auth-content">
                <form className="form signup-form">
                    <h2 className="auth-title">{t("signup")}</h2>
                    <div className="row-block">
                        <InputText
                            control={control}
                            fieldName="email"
                            error={errors.email}
                            validatePattern={emailRegex}
                        />
                    </div>
                    <div className="row-block">
                        <InputText
                            control={control}
                            fieldName="password"
                            error={errors.password}
                            type="password"
                            validatePattern={passwordRegex}
                        />
                    </div>
                    <div className="row-block">
                        <InputText
                            control={control}
                            fieldName="name"
                            error={errors.name}
                            validatePattern={nameRegex}
                        />
                    </div>
                    <div className="row-block">
                        <InputSelect
                            control={control}
                            data={genderData}
                            fieldName="gender"
                            error={errors.gender}
                        />
                        <InputText
                            control={control}
                            fieldName="phoneNumber"
                            error={errors.phoneNumber}
                            validatePattern={phoneNumberRegex}
                        />
                    </div>
                    <div className="row-block"></div>
                    <div className="row-block">
                        <InputText control={control} fieldName="address" error={errors.address} />
                    </div>
                    <button className={"primary-btn"} type="submit">
                        {t("signup")}
                    </button>
                    <p className="signin-text">
                        <span>{t("you already have an account")}</span>
                        <Link to={SIGN_IN_PATH}>{t("signin")}</Link>
                    </p>
                </form>
            </div>
        </main>
    );
}

export default Signin;
