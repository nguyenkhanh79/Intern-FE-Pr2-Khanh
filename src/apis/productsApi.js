import firebase, { db } from "firebase-config";

async function get() {
    try {
        const querySnapshot = await db.collection("products").get();
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

async function create(productsData) {
    try {
        productsData.createdDate = firebase.firestore.FieldValue.serverTimestamp();
        const response = await db.collection("products").add(productsData);
        return response;
    } catch (error) {
        throw error;
    }
}

const productsApi = {
    get,
    create,
};

export default productsApi;
