const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '/static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/template/index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});