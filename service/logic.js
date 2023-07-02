const db = require('./db');

const removeProduct = (id) => {
  return db.Product.deleteOne({ id }).then((result) => {
    if (result.deletedCount > 0) {
      return {
        statusCode: 200,
        message: "Product removed"
      };
    } else {
      return {
        statusCode: 404,
        message: "Product not found"
      };
    }
  });
};

const addProduct = (id, name, variants, price, category, image, description, vendorName, rating, review) => {
  return db.Product.findOne({ id }).then(result => {
    if (result) {
      return {
        statusCode: 404,
        message: "Already present"
      };
    } else {
      const newProduct = new db.Product({
        id,
        name,
        variants,
        price,
        category,
        image,
        description,
        vendorName,
        rating,
        review
      });
      newProduct.save();
      return {
        statusCode: 200,
        message: "New product added successfully"
        
        
      };
    }
  });
};

const editpro = async (id, name, variants, price, category, image, description, vendorName, rating) => {
  try {
    const result = await db.Product.findOne({ id });

    if (result) {
      result.id = id;
      result.name = name;
      result.variants = variants;
      result.price = price;
      result.category = category;
      result.image = image;
      result.description = description;
      result.vendorName = vendorName;
      result.rating = rating;
      await result.save();

      return {
        statusCode: 200,
        message: "Product updated successfully",
      };
    } else {
      return {
        statusCode: 404,
        message: "Product not found",
      };
    }
  } catch (error) {
    // Handle any errors that occurred during the update process
    return {
      statusCode: 500,
      message: "Internal server error",
    };
  }
};

module.exports = {
  removeProduct,addProduct,editpro
};


