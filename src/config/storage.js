import admin from "firebase-admin";
import dotenv from "dotenv";
import serviceAccount from "../../serviceAccountKey.json";
dotenv.config();
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.STORAGE_BUCKET,
});
var bucket = admin.storage().bucket();
export default bucket;
