const mongoose = require('mongoose')
const express=require("express")

let Schema = mongoose.Schema
                
//Defining Product mongoose schema
let productSchema = new Schema({
  name : {
    type :String,
    required : [true,'Please enter Product Name'],
    trim:true,
    maxlength:[100 , 'Product name cannot exceed 100 characters']
  },
  price : {
    type : Number,
    required : [true,'Please enter Product Price'],
    default : 0.0
  },
  description : { 
    type :String,
    required : [true,'Please enter Product Description']
  },
  ratings : {
    type : Number,
    default : 0
  },
  images : [
    {
      public_id : {
        type : String,
        required : true
      },
      url : {
        type : String,
        required : true
      }
    }
  ],
  category : {
    type : String,
    required : [true,'Please select Product Category'],
    enum : {
      values : [
        'Electronics',
        'Home Decor',
        'Kitchen Appliances',
        'Clothes',
        'Sports',
        'Beauty Products',
        'Health',
        'Grocery',
        'Books',
      ],
      message : 'Please select appropriate category'
    }
  },
  seller : { 
    type :String,
    required : [true,'Please enter Seller Information']
  },
  stock : {
    type : Number,
    required : true,
    default : 0
  },
  numOfReviews : {
    type : Number,
    default : 0
  },
  reviews : [
    {
      name : {
        type : Number,
        required : true
      },
      rating : {
        type : Number,
        required : true
      },
      comment : {
        type : String,
        required : true
      }
    }
  ]
    
} , 
{
  timestamps: true
} 

)

module.exports = mongoose.model("detailsProduct" , productSchema );