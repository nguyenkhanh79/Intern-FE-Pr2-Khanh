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

const ordersApi = {
    create,
};

export default ordersApi;
