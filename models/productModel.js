const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    variants: [],
    price: [],
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    vendorName: { type: String, required: true },
    rating: { type: String, required: true },
    review: [],
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;
