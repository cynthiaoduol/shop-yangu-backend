import mongoose from "mongoose"
const productSchema = mongoose.Schema(
    {
        name: { type: String, unique: true, required: true },
        slug: { type: String, unique: true, required: true },
        image: { type: Object, unique: true, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        price: { type: Number, required: true },
        rating: { type: Number, default: 0 },
        numReviews: { type: Number, default: 0 },
    },
    {
        timestamps: true
    });

const Product = mongoose.model('Product', productSchema);
export default Product;
