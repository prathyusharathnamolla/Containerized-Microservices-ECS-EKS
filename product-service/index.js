const express = require('express');
const app = express();
const PORT = 3001;
app.get('/', (req, res) => res.send('Hello from Product Service'));
app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
