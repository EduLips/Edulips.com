const express = require('express');
const router = express.Router();
const db = require('../firebaseConfig'); // Import initialized Firebase

const newsRef = db.ref('News');

router.get('/', (req, res) => {
    newsRef.once('value')
        .then(snapshot => res.json(snapshot.val()))
        .catch(error => res.status(500).json({ error: 'Error fetching news: ' + error.message }));
});

module.exports = router;
