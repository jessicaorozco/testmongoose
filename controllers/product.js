const Product = require('../models/productSchema')
const { image, commerce } = require("faker");
ctrl = {}

ctrl.product = async (req, res, next)=>{
     let products = JSON.parse(Product.find((err, products) => {
      let productsChunks = [];
      let chunkSize = 3;
      for (let i = 0; i < products.length; i += chunkSize) {
        productsChunks.push(products.slice(i, i + chunkSize));
       }
      res.status(200).json({
        products: productsChunks
      })
  }));
}
ctrl.faker = async (req, res, next) => {
    for(let i =0; i<50; i++){
      const product = new Product();
      console.log(product);
        product.imagePath = image.image();
        product.title = commerce.productName();
        product.description = commerce.department();
        product.price = commerce.price();
        product.save()
    }
  return res.status(201).json(this.product)
}  
  module.exports = ctrl;