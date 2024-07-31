const express = require('express');
const path = require('path');
const newsRoute = require('./routes/news');
const db = require('./firebaseConfig'); // Import initialized Firebase

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/news', newsRoute); // Mount the news route handler

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
