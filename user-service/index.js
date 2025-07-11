const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/user', (req, res) => {
  res.json({ message: 'User Service is working!' });
});

app.listen(PORT, () => {
  console.log(`User service listening on port ${PORT}`);
});
