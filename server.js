const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// Serve the Flutter web app's static files
app.use('/', serveStatic(path.join(__dirname, 'web')));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
