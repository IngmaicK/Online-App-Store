const Product = require("../models/ProductModel")

const getProducts = (req, res) => {
    Product.create({name: "Ramuri"})
    res.send("Handling product routes, e.g. search for products")
}
module.exports = getProducts
