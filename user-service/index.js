const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => res.send('Hello from User Service'));
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
