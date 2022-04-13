const Product = require("../models/product");
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require("./verifyToken");

const router = require("express").Router();


//create a new product
router.post("/new", async (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        slug: req.body.slug,
        image: req.body.image,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        rating: req.body.rating,
        numReviews: req.body.numReviews

    })
    try {
        const savedProduct = await newProduct.save()
        console.log(newProduct)
        res.status(201).json(savedProduct)
    }
    catch (err) {
        res.status(404).json(err)
    }
})


// update product details
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const updates = req.body
        const options = { new: true }
        const updatedProduct = await Product.findByIdAndUpdate(id, updates, options)
        res.status(200).json(updatedProduct)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


// get a single product
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(others)
    }
    catch (err) {
        res.status(404).json(err)

    }
})


// get all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    }
    catch (err) {
        res.status(404).json(err)

    }
})



//delete a single product
router.delete("/:id", async (req, res) => {
    try {
        res.status(200).json("product deleted")
        return await Product.findByIdAndDelete(req.params.id)

    }
    catch (err) {
        res.status(404).json("Product not Found")
    }
})



export default router;