import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import "../scss/Home.scss";
import { Link } from "react-router-dom";
import { PRODUCTS_PATH } from "constant/route";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

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

    const banner1Data = [
        {
            title: "Hoa quả tự nhiên",
            image: "http://amigosthemes.com/frutella/frutella-light/assets/images/parts/icons/100/white/tomato-transparent.png",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        },
        {
            title: "Không hóa chất độc hại",
            image: "http://amigosthemes.com/frutella/frutella-light/assets/images/parts/icons/100/white/dairy-transparent.png",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        },
        {
            title: "Bảo tồn tự nhiên",
            image: "http://amigosthemes.com/frutella/frutella-light/assets/images/parts/icons/100/white/leafs-transparent.png",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
        },
    ];

    const freshListData = [
        "Frutella 100 percent Orange Juice is the perfect beverage to pack in lunches or drink on the go",
        " Add Frutella Orange Juice to your daily routine for a delicious and convenient source of vitamin C",
        "Frutella Juice contains important nutrients, including potassium and folic acid",
        "Get this 24 count value juice pack delivered right to your door",
    ];

    const categoriesData = [
        {
            title: "Meat",
            image: "https://firebasestorage.googleapis.com/v0/b/ecommerce-da802.appspot.com/o/meat2.jpg?alt=media&token=8f487361-e59e-41ed-950f-4823263949d4",
        },
        {
            title: "Fruit",
            image: "https://firebasestorage.googleapis.com/v0/b/ecommerce-da802.appspot.com/o/fr2.jpg?alt=media&token=5f8a2d07-b526-49b8-a254-665015164760",
        },
        {
            title: "Vegetable",
            image: "https://firebasestorage.googleapis.com/v0/b/ecommerce-da802.appspot.com/o/v5.jpg?alt=media&token=32ae9292-9f2a-47fa-9ef2-e0a63265e930",
        },
        {
            title: "Bread",
            image: "https://firebasestorage.googleapis.com/v0/b/ecommerce-da802.appspot.com/o/b8.jpg?alt=media&token=f3a8f27b-c0ba-450f-bd22-b822340e6d03",
        },
        {
            title: "Canned food",
            image: "https://firebasestorage.googleapis.com/v0/b/ecommerce-da802.appspot.com/o/s13.jpg?alt=media&token=88977ddb-a119-46ed-8963-5846cfab92de",
        },
        {
            title: "Other food",
            image: "https://firebasestorage.googleapis.com/v0/b/ecommerce-da802.appspot.com/o/o2.jpg?alt=media&token=ac58cd72-cd42-4171-b827-9c841135be6b",
        },
    ];

    const statsData = [
        {
            title: "Hài lòng",
            image: "http://amigosthemes.com/frutella/frutella-light/assets/images/parts/icons/100/white/in-love.png",
            number: 2791,
            sign: "+",
        },
        {
            title: "Chất lượng dịch vụ",
            image: "http://amigosthemes.com/frutella/frutella-light/assets/images/parts/icons/100/white/handshake.png",
            number: 99,
            sign: "%",
        },
        {
            title: "An tâm sử dụng",
            image: "http://amigosthemes.com/frutella/frutella-light/assets/images/parts/icons/100/white/guarantee.png",
            number: 77,
            sign: "v",
        },
    ];

    const shippingData = [
        {
            title: "Đặt hàng",
            description: "Our manager will contact you to discuss the details of the order",
            image: "http://amigosthemes.com/frutella/frutella-light/assets/images/parts/icons/50/orange/shopping-basket.png",
        },
        {
            title: "Thanh toán",
            description: "You yourself choose the period during which you will use the service",
            image: "http://amigosthemes.com/frutella/frutella-light/assets/images/parts/icons/50/orange/card-payment.png",
        },
        {
            title: "Giao hàng",
            description: "The courier will deliver the goods at a convenient time for you.",
            image: "http://amigosthemes.com/frutella/frutella-light/assets/images/parts/icons/50/orange/shipped.png",
        },
    ];

    return (
        <main className="home-page">
            <section className="carousel-show main-content">
                <Carousel>
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
                                    <img src={item.image} alt="" />
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </section>
            <section className="banner-1 banner banner--cuver">
                <div className="banner-hidden-text">Features</div>
                <div className="banner-body main-content">
                    <h3 className="banner-body__title">
                        <p>Thực phẩm sạch mỗi ngày</p>
                        <span>Trực tiếp từ nông trại</span>
                    </h3>
                    <div className="banner-body__card">
                        <ul className="card-list">
                            {banner1Data.map((item) => {
                                return (
                                    <li className="card-item">
                                        <div className="card-img">
                                            <img src={item.image} alt="card img" />
                                        </div>
                                        <p className="card-title">{item.title}</p>
                                        <p className="card-description">{item.description}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <img
                    src="http://amigosthemes.com/frutella/frutella-light/assets/images/content/x/section-strawberry.png"
                    alt="decor1"
                    className="decor-1"
                />
                <img
                    src="http://amigosthemes.com/frutella/frutella-light/assets/images/content/x/section-apricot.png"
                    alt="decor2"
                    className="decor-2"
                />
            </section>
            <section className="banner-2 banner">
                <div className="banner-hidden-text">Features</div>
                <div className="banner-body main-content">
                    <div className="banner-body__left">
                        <img
                            src="http://amigosthemes.com/frutella/frutella-light/assets/images/content/x/orange-juice.png"
                            alt="fresh"
                        />
                    </div>
                    <div className="banner-body__right">
                        <h3 className="title">Nước ép cam tươi</h3>
                        <p className="description">{t("100% Organic")}</p>
                        <ul className="fresh-list">
                            {freshListData.map((item) => {
                                return (
                                    <li className="fresh-item">
                                        <i className="bx bxs-droplet"></i>
                                        <span>{item}</span>
                                    </li>
                                );
                            })}
                        </ul>
                        <Link to={PRODUCTS_PATH} className="link-btn">
                            {t("buy now")}
                        </Link>
                    </div>
                </div>
            </section>
            <section className="banner-3 banner banner--cuver">
                <div className="banner-body main-content">
                    <h3 className="banner-body__title">
                        <p>Sản phẩm của chúng tôi</p>
                        <span>Nhưng sản phẩm có chất lượng tốt nhất</span>
                    </h3>
                    <ul className="cate-list">
                        {categoriesData.map((item) => {
                            return (
                                <li className="cate-item">
                                    <div className="cate-item__top">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="cate-item__bottom">
                                        <span>{t(item.title)}</span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <img
                    src="http://amigosthemes.com/frutella/frutella-light/assets/images/content/x/section-lime.png"
                    alt="decor2"
                    className="decor-2"
                />
            </section>
            <section className="banner-4 banner banner--cuver">
                <div className="banner-body main-content">
                    <h3 className="banner-body__title">
                        <p>Giao hàng và thanh toán</p>
                        <span>Nhanh chóng và hiệu quả</span>
                    </h3>
                    <ul className="shipping-list">
                        {shippingData.map((item) => {
                            return (
                                <li className="shipping-item">
                                    <div className="item-top">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="item-bottom">
                                        <p className="title">{item.title}</p>
                                        <p className="description">{item.description}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
            <section className="banner-1 banner-5  banner banner--cuver">
                <div className="banner-hidden-text">{t("Stats")}</div>
                <div className="banner-body main-content">
                    <h3 className="banner-body__title">
                        <p>Thống kê</p>
                        <span>Từ nhưng khách hàng tin dùng</span>
                    </h3>
                    <div className="banner-body__card">
                        <ul className="card-list">
                            {statsData.map((item) => {
                                return (
                                    <li className="card-item">
                                        <div className="card-img">
                                            <img src={item.image} alt="card img" />
                                        </div>
                                        <div className="card-right">
                                            <VisibilitySensor
                                                partialVisibility
                                                offset={{ bottom: 200 }}
                                            >
                                                {({ isVisible }) => {
                                                    if (isVisible) {
                                                        return (
                                                            <span className="card-number">
                                                                <span>
                                                                    {isVisible ? (
                                                                        <CountUp
                                                                            start={0}
                                                                            end={item.number}
                                                                            duration={2}
                                                                            redraw={false}
                                                                        />
                                                                    ) : null}
                                                                </span>
                                                                <span>{item.sign}</span>
                                                            </span>
                                                        );
                                                    } else {
                                                        return (
                                                            <span className="card-number">
                                                                <span>{item.number}</span>
                                                                <span>{item.sign}</span>
                                                            </span>
                                                        );
                                                    }
                                                }}
                                            </VisibilitySensor>
                                            <p className="card-title">{item.title}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <img
                    src="http://amigosthemes.com/frutella/frutella-light/assets/images/content/x/section-red-strawberry.png"
                    alt="decor1"
                    className="decor-3"
                />
                <img
                    src="http://amigosthemes.com/frutella/frutella-light/assets/images/content/x/section-blackberry-with-leaves.png"
                    alt="decor2"
                    className="decor-4"
                />
            </section>
        </main>
    );
}

export default Home;
