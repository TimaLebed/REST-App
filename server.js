const http = require('http');
const { productsAPI } = require('./router/productsAPI.js');

const PORT = process.env.PORT || 3000;
const server = http.createServer(productsAPI);

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));