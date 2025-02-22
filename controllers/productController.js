const Product = require('../models/productModel.js')
const { getPostData } = require('../utils/index.js')

// @desc gets all products
// @route GET /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll()

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(products))
  } catch (error) {
    console.log(error)
  }
}

// @desc get product
// @route GET /api/product/:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id)

    if (!product) {
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: 'product not found' }))
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(product))
    }
  } catch (error) {
    console.log(error)
  }
}

// @desc create product
// @route POST /api/products
async function createProduct(req, res) {
  try {
    const body = await getPostData(req)
    const { name, description } = JSON.parse(body)
    const productData = { name, description }
    const newProduct = await Product.create(productData)

    res.writeHead(201, { 'Content-Type': 'application/json' })
    return res.end(JSON.stringify(newProduct))
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
}