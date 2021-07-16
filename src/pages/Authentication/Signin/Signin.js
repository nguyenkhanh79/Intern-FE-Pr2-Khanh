import React from "react";
import { useTranslation } from "react-i18next";
import InputText from "../../../components/InputText/InputText";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { SIGN_UP_PATH } from "constant/route";
import { emailRegex } from "utils";

function Signin() {
    const { t } = useTranslation();
    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({ mode: "onTouched" });
    return (
        <main className="main-content auth-main">
            <h1 className="logo">
                <i className="lab la-envira"></i>
                <span>Fresh</span>
            </h1>
            <div className="auth-content">
                <form className="form">
                    <h2 className="auth-title">{t("signin")}</h2>
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
                        />
                    </div>
                    <button className={"primary-btn"} type="submit">
                        {t("signin")}
                    </button>
                    <p className="signin-text">
                        <span>{t("you not have an account")}</span>
                        <Link to={SIGN_UP_PATH}>{t("signup")}</Link>
                    </p>
                </form>
            </div>
        </main>
    );
}

export default Signin;
