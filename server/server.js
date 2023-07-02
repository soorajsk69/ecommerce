const express = require("express");
const product = require("./models/productModel");
const db = require("./db.js");
const cors=require('cors')
const app = express();
const logic=require('./service/logic')
const path=require("path")
app.use(express.json());

const productRoute = require("./routes/productRoute");
const userRouter =require("./routes/userRouter");

app.use('/api/products/',productRoute)
app.use('/api/users/',userRouter)
app.use(cors({orign:"*"}))
app.use(express.static("dist"))
app.get("/", (req, res) => {
  res.send("Server working");
});


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.delete('/deleteproduct/:id', (req, res) => {
  logic.removeProduct(req.params.id).then((result) => {
    res.status(result.statusCode).json(result);
  });
});

app.post('/addproduct', (req, res) => {
  logic.addProduct(
    req.body.id,
    req.body.name,
    req.body.variants,
    req.body.price, // Corrected parameter name from `req.body.price` to `req.body.prices`
    req.body.category,
    req.body.image,
    req.body.description,
    req.body.vendorName, // Corrected property access from `req.body.vandorName` to `req.body.vendorName`
    req.body.rating,
    req.body.review
  ).then((result) => {
    res.status(result.statusCode).json(result);
  });
});

app.post('/update',(req,res)=>{
  logic.editpro(
    req.body.id,
    req.body.name,
    req.body.variants,
    req.body.price, // Corrected parameter name from `req.body.price` to `req.body.prices`
    req.body.category,
    req.body.image,
    req.body.description,
    req.body.vendorName, // Corrected property access from `req.body.vandorName` to `req.body.vendorName`
    req.body.rating,
    req.body.review

  ).then((result)=>{
    res.status(result.statusCode).json(result);
  })
})


// for render react static files
app.get("/*", (req, res) => {
  res.sendFile(path.join(path.resolve(`${path.dirname("")}/dist/index.html`)));
});