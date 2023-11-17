const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        productId: {type: String, required: true},
        cartId: {type: String, required: true},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);