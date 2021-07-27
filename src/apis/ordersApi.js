import firebase, { db } from "firebase-config";

async function create(orderData) {
    try {
        orderData.createdDate = firebase.firestore.FieldValue.serverTimestamp();
        const response = await db.collection("orders").add(orderData);

        return response;
    } catch (error) {
        throw error;
    }
}

async function getUserOrders(userId) {
    try {
        const querySnapshot = await db.collection("orders").where("userId", "==", userId).get();
        let data = [];
        querySnapshot.forEach((documentSnapshot) => {
            data.push({
                id: documentSnapshot.id,
                ...documentSnapshot.data(),
            });
        });
        return data;
    } catch (error) {
        throw error;
    }
}

async function remove(orderId) {
    try {
        await db.collection("orders").doc(orderId).delete();
    } catch (error) {
        throw error;
    }
}

async function update(orderData) {
    try {
        console.log('saga', orderData);
        const id = orderData.id;
        delete orderData.id;
        orderData.updatedDate = firebase.firestore.FieldValue.serverTimestamp();
        const response = await db.collection("orders").doc(id).update(orderData);

        return response;
    } catch (error) {
        throw error;
    }
}

const ordersApi = {
    create,
    getUserOrders,
    remove,
    update
};

export default ordersApi;
