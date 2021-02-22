const {
  getProducts,
  getProduct,
  createProduct,
} = require('../controllers/productController.js')

const productsAPI = (req, res) => {
  switch (req.method) {
    case 'GET':
      if (req.url === '/api/products') {
        getProducts(req, res)
      } else if (req.url.match(/\/api\/product\/\w+/)) {
        const id = req.url.split('/')[3]
        getProduct(req, res, id)
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'route not found' }))
      }
      break

    case 'POST':
      if (req.url === '/api/products') {
        createProduct(req, res)
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'route not found' }))
      }
      break

    case 'PUT':
      break

    case 'DELETE':
      break

    default: return
  }
}

module.exports = {
  productsAPI,
}