import { db } from "firebase-config";

async function get(userId) {
    try {
        const doc = await db.collection("users").doc(userId).get();
        if (doc.exists) {
            return { id: doc.id, ...doc.data() };
        } else {
            throw new Error("Không tìm thấy dữ liệu");
        }
    } catch (error) {
        throw error;
    }
}
const usersApi = {
    get
};

export default usersApi;
