import firebase, { db, storage } from "firebase-config";

async function get(productId) {
    try {
        const doc = await db.collection("products").doc(productId).get();
        if (doc.exists) {
            return { id: doc.id, ...doc.data() };
        } else {
            throw new Error("Không tìm thấy dữ liệu");
        }
    } catch (error) {
        throw error;
    }
}

async function getAll() {
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

async function create(productData) {
    try {
        //upload image
        // Create a root reference
        const storageRef = storage.ref();

        // Create a reference
        const productImageRef = storageRef.child(productData.productImage.name);

        const uploadResult = await productImageRef.put(productData.productImage);
        const imageUrl = await productImageRef.getDownloadURL();

        productData.createdDate = firebase.firestore.FieldValue.serverTimestamp();
        productData.productImage = imageUrl;

        const response = await db.collection("products").add(productData);

        return response;
    } catch (error) {
        throw error;
    }
}

async function update(productData) {
    try {
        if (typeof productData.productImage === "object") {
            //upload image
            // Create a root reference
            const storageRef = storage.ref();

            // Create a reference
            const productImageRef = storageRef.child(productData.productImage.name);

            const uploadResult = await productImageRef.put(productData.productImage);
            const imageUrl = await productImageRef.getDownloadURL();

            productData.productImage = imageUrl;
        }
        productData.updatedDate = firebase.firestore.FieldValue.serverTimestamp();
        delete productData.createdDate;
        const response = await db.collection("products").doc(productData.id).update(productData);

        return response;
    } catch (error) {
        throw error;
    }
}

async function remove(productId) {
    try {
        db.collection("products").doc(productId).delete();
    } catch (error) {
        throw error;
    }
}

const productsApi = {
    get,
    getAll,
    create,
    update,
    remove,
};

export default productsApi;
