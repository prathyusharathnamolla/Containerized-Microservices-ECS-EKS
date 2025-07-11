const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.get('/product', (req, res) => {
  res.json({ message: 'Product Service is working!' });
});

app.listen(PORT, () => {
  console.log(`Product service listening on port ${PORT}`);
});
