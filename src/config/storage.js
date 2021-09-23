const admin = require("firebase-admin");
require("dotenv").config();
const serviceAccount = require("../../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.STORAGE_BUCKET,
});
var bucket = admin.storage().bucket();
export default bucket;
