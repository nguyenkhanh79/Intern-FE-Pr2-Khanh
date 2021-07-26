import React from "react";
import { Carousel } from "antd";
import "../scss/Home.scss";
import { Link } from "react-router-dom";
import { PRODUCTS_PATH } from "constant/route";
import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();

    const carouselData = [
        {
            title: "carousel title 1",
            description: "carousel description",
            image: "http://amigosthemes.com/frutella/frutella-light/assets/images/content/x/plate-2.png",
        },
        {
            title: "carousel title 2",
            description: "carousel description",
            image: "http://amigosthemes.com/frutella/frutella-black/assets/images/content/x/fruits-plate.png",
        },
        {
            title: "carousel title 3",
            description: "carousel description",
            image: "http://amigosthemes.com/frutella/frutella-black/assets/images/content/x/plate.png",
        },
    ];

    return (
        <main className="home-page">
            <section className="carousel-show main-content">
                <Carousel >
                    {carouselData.map((item, index) => {
                        return (
                            <div className="carousel-block">
                                <div className="carousel-block__left">
                                    <h3 className="left-title">{t(item.title)}</h3>
                                    <p className="left-description">{t(item.description)}</p>
                                    <Link to={PRODUCTS_PATH} className="left-btn btn">
                                        {t("buy now")}
                                    </Link>
                                </div>
                                <div className="carousel-block__right">
                                    <img
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </section>
        </main>
    );
}

export default Home;
