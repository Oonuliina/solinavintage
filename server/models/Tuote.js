const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        cartId: {type: String, required: true},
        cartItems: {type: Array, required: true},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);