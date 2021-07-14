import { Rate } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Slider from "react-slick";
import { addCart } from "redux/actions/cartAction";
import { getOneProductRequest } from "redux/actions/productsAction";
import { formatMoney } from "utils";
import Loading from "../components/Loading";
import ProductItem from "../components/ProductItem";
import QuantityInput from "../components/QuantityInput";
import "../scss/ProductDetail.scss";
import Stars from "./../components/Stars";

function ProductDetail() {
    const history = useHistory();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.products.data);
    const product = useSelector((state) => state.products.currentProduct);
    const isFetchingCurrentProduct = useSelector(
        (state) => state.products.isFetchingCurrentProduct
    );
    const [quantityValue, setQuantityValue] = useState(1);
    const [ratingValue, setRatingValue] = useState(0);
    const [commentValue, setCommentValue] = useState("");
    const { productId } = useParams();

    useEffect(() => {
        dispatch(getOneProductRequest(productId));
    }, [dispatch, productId]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(addCart(product, quantityValue));
        history.push("/cart");
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: window.innerWidth <= 768 ? 2 : 4,
        slidesToScroll: 1,
    };

    if (isFetchingCurrentProduct) {
        return <Loading />;
    }

    if (!product) {
        return null;
    }

    const commentsDemoData = [
        {
            id: "basdc",
            productId: product.id,
            comments: [
                {
                    userId: "dasdasd",
                    userName: "Nvkhanh",
                    avatar: "https://assets.website-files.com/5cb8b10a48eebf8ee23d835b/5fa9a5aeb9e58ca6b693cc15_default-profile-picture1.jpg",
                    comment:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi harum enim quis veniam, asperiores aliquam. Modi harum maiores non nesciunt veritatis quibusdam tempora assumenda, explicabo reiciendis optio, porro eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi harum enim quis veniam, asperiores aliquam. Modi harum maiores non nesciunt veritatis quibusdam tempora assumenda, explicabo reiciendis optio, porro eos.",
                    rating: 3,
                    createdAt: "27/7/2021",
                },
                {
                    userId: "dasdasd",
                    userName: "Nvkhanh2",
                    avatar: "https://assets.website-files.com/5cb8b10a48eebf8ee23d835b/5fa9a5aeb9e58ca6b693cc15_default-profile-picture1.jpg",
                    comment:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi harum enim quis veniam, asperiores aliquam. Modi harum maiores non nesciunt veritatis quibusdam tempora assumenda, explicabo reiciendis optio, porro eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi harum enim quis veniam, asperiores aliquam. Modi harum maiores non nesciunt veritatis quibusdam tempora assumenda, explicabo reiciendis optio, porro eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi harum enim quis veniam.",
                    rating: 4,
                    createdAt: "27/7/2021",
                },
            ],
        },
    ];

    return (
        <section className="product-detail">
            <div className="product-info">
                <div className="product-info__top">
                    <div className="top-left">
                        <img src={product?.image} alt={product?.name} />
                    </div>
                    <div className="top-right">
                        <p className="product-title">{product?.name}</p>
                        <Stars starsNumber={product?.rating}></Stars>
                        <p className="product-description">{product?.description}</p>
                        <div className="product-price">
                            <span className="main-price">{formatMoney(product?.price) + " đ"}</span>
                            <span className="unit"> / {product?.unit}</span>
                        </div>
                        <form
                            action="#"
                            className="product-quantity"
                            onSubmit={(e) => handleOnSubmit(e)}
                        >
                            <div className="form-top">
                                <QuantityInput
                                    quantity={quantityValue}
                                    onChangeQuantity={setQuantityValue}
                                ></QuantityInput>{" "}
                            </div>
                            <div className="form-bottom">
                                <button type="submit">{t("buy now")}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="product-article">
                <p className="article__top">{t("article main")}</p>
                <div className="article__bottom">
                    <span>{t("article 1")}</span>
                    <span>{t("article 2")}</span>
                    <span>{t("article 3")}</span>
                </div>
            </div>
            <div className="product-comments">
                <p className="block-title">{t("comments")}</p>
                <ul className="comments-list">
                    {commentsDemoData[0].comments.map((item, index) => {
                        return (
                            <li className="comment-item" key={index}>
                                <div className="comment-item__left">
                                    <img src={item.avatar} alt={item.userName + "avatar"} />
                                </div>
                                <div className="comment-item__right">
                                    <div className="user-name">{item.userName}</div>
                                    <Stars starsNumber={item.rating}></Stars>
                                    <div className="user-comment">{item.comment}</div>
                                    <span className="created-date">{item.createdAt}</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <div className="user-rating">
                    <div className="comment-item">
                        <div className="comment-item__left">
                            <img
                                src="https://assets.website-files.com/5cb8b10a48eebf8ee23d835b/5fa9a5aeb9e58ca6b693cc15_default-profile-picture1.jpg"
                                alt="avatar"
                            />
                        </div>
                        <div className="comment-item__right">
                            <div className="user-name">Current user</div>
                            <Rate
                                allowClear={false}
                                defaultValue={0}
                                value={ratingValue}
                                onChange={setRatingValue}
                                style={{ color: "#ffb524", fontSize: "20px" }}
                            />
                            <form action="#" className="user-comment-form">
                                <textarea
                                    value={commentValue}
                                    onChange={(e) => setCommentValue(e.target.value)}
                                    name="user-comment-input"
                                    id="user-comment-input"
                                ></textarea>
                                <button type="submit">{t("comments")}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products-relate">
                <p className="block-title">{t("relate title")}</p>
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div className="slide-item" key={index}>
                            <ProductItem item={item}></ProductItem>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default ProductDetail;
