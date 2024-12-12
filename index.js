const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import route posts
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);

// Routing ke server HTML page
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'design.html');
    console.log(`Berhasil Update: ${filePath}`); // Arah ke path yang dituju
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(err.status).end();
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`This application is running at http://localhost:${port}`);
});