const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL , {  useUnifiedTopology: true,useNewUrlParser: true });


const Product = mongoose.model('Product',
  {
    id:{type: String} ,
    name: { type: String},
    variants: [],
    price: [],
    category: { type: String },
    image: { type: String},
    description: { type: String },
    vendorName: { type: String},
    rating: { type: String },
    review: []
  })

  // const User = mongoose.model('User',{
  //   name: { type: String, required: true },
  //   email: { type: String, required: true },
  //   password: { type: String, required: true },
  //   isAdmin: { type: Boolean, default: false }
  // })

  module.exports={
    Product
  }
