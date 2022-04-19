import Product from '../models/product.js'
import express  from 'express';
import  verifyTokenAndAdmin from "./verifyToken.js";
import verifyTokenAndAuthorization from "./verifyToken.js";
const router = express.Router();


//create a new product
router.post("/add_new", async (req, res) => {
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
        // console.log(newProduct)
        res.status(201).json(savedProduct)
    }
    catch (err) {
        res.status(404).json(err)
    }
})


// update product details
router.put("/update/:id", verifyTokenAndAdmin, async (req, res) => {
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
router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }
    catch (err) {
        res.status(404).json("Product not found")

    }
})


// get all products
router.get("/", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    }
    catch (err) {
        res.status(404).json(err)

    }
})



//delete a product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        res.status(200).json("product deleted")
        return await Product.findByIdAndDelete(req.params.id)

    }
    catch (err) {
        res.status(404).json("Product not Found")
    }
})



export default router;