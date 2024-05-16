const express = require('express');
const path = require('path');
const app = express();

// Serve the Flutter web build directory
app.use(express.static(path.join(__dirname, 'web')));

// Catch-all route to serve index.html for any request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'web/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
