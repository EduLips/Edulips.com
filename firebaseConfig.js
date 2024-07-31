const admin = require('firebase-admin');
const serviceAccount = require('./config/firebaseConfig.js');

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://edushort-cce1c-default-rtdb.firebaseio.com/'
    });
}

const db = admin.database();
module.exports = db;
