import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { useTranslation } from "react-i18next";
import "../scss/OrderTracking.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    getUserOrdersRequest,
    removeOrderRequest,
    updateOrderRequest,
} from "redux/actions/ordersAction";
import OrderBlock from "components/OrderBlock/OrderBlock";
import { db } from "firebase-config";
import { confirmModal } from "utils";
import { toast } from "react-toastify";

const { TabPane } = Tabs;

function OrderTracking() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.currentUser);
    const [ordersData, setOrdersData] = useState([]);

    useEffect(() => {
        if (!currentUser) {
            return;
        }
        const ordersListener = db
            .collection("orders")
            .where("userId", "==", currentUser.id)
            .orderBy("createdDate", "desc")
            .onSnapshot((snapshot) => {
                const data = [];
                snapshot.forEach(function (doc) {
                    data.push({ id: doc.id, ...doc.data() });
                });
                setOrdersData(data);
            });

        return ordersListener;
    }, [currentUser]);

    function handleOnCancelOrder(orderId) {
        confirmModal(t("warning"), t("remove order"), () => {
            dispatch(
                updateOrderRequest({
                    id: orderId,
                    status: "cancelled",
                })
            );
            toast.success(t("cancel order success"));
        });
    }

    return (
        <section className="order-tracking">
            <h3 className="order-tracking__title">{t("order tracking")}</h3>
            <div className="order-tracking__content">
                {ordersData.length <= 0 ? (
                    <div className="order-empty">{t("orders empty")}</div>
                ) : (
                    <Tabs defaultActiveKey="1" size="large" style={{ marginBottom: 32 }}>
                        <TabPane tab={t("all")} key="1">
                            {ordersData.map((item) => {
                                return (
                                    <OrderBlock
                                        data={item}
                                        onCancel={handleOnCancelOrder}
                                        key={item.id}
                                    />
                                );
                            })}
                        </TabPane>
                        <TabPane tab={t("unconfirm")} key="2">
                            {ordersData.map((item) => {
                                if (item.status === "unconfirm") {
                                    return (
                                        <OrderBlock
                                            data={item}
                                            onCancel={handleOnCancelOrder}
                                            key={item.id}
                                        />
                                    );
                                }
                                return null;
                            })}
                        </TabPane>
                        <TabPane tab={t("delivering")} key="3">
                            {ordersData.map((item) => {
                                if (item.status === "delivering") {
                                    return (
                                        <OrderBlock
                                            data={item}
                                            onCancel={handleOnCancelOrder}
                                            key={item.id}
                                        />
                                    );
                                }
                                return null;
                            })}
                        </TabPane>
                        <TabPane tab={t("delivered")} key="4">
                            {ordersData.map((item) => {
                                if (item.status === "delivered") {
                                    return (
                                        <OrderBlock
                                            data={item}
                                            onCancel={handleOnCancelOrder}
                                            key={item.id}
                                        />
                                    );
                                }
                                return null;
                            })}
                        </TabPane>
                        <TabPane tab={t("cancelled")} key="5">
                            {ordersData.map((item) => {
                                if (item.status === "cancelled") {
                                    return (
                                        <OrderBlock
                                            data={item}
                                            onCancel={handleOnCancelOrder}
                                            key={item.id}
                                        />
                                    );
                                }
                                return null;
                            })}
                        </TabPane>
                    </Tabs>
                )}
            </div>
        </section>
    );
}

export default OrderTracking;
