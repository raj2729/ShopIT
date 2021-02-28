const detailsProduct = require('../models/product')

exports.newProduct = ( async(req,res,next) => {

  try {
    const product = await detailsProduct.create(req.body);
    res.status(201).json({
      success : true,
      product
    })
  }catch ({error}) {
    await res.status(400).json({
      success : false,
      'error' : error
    })
  }
} )
 

exports.getProducts = (async(req,res,next) => {

  try {
    await res.status(200).json({
      success : true,
      "message" : "This route will give information about all products"
    })
  } catch ({error}) {
    await res.status(400).json({
      success : false,
      'error' : error
    })
  }
})