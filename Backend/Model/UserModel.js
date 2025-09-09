  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
 //user ge adala data type ekath ekka validation ekath denawa
 //mongoose is a library that provides a schema-based solution to model your application data
    //Schema is a blueprint for the data structure in MongoDB
    //mongoose is a library that provides a schema-based solution to model your application data
    //Schema is a blueprint for the data structure in MongoDB
  const UserSchema = new Schema({ 
     name: {
         type: String,//data type
         required: true, //validation
     },
     gmail: {
         type: String,//data type
         required: true, //validation
     },
     age: {
         type: Number,//data type
         required: true, //validation
     },
     address: {
         type: String,//data type
         required: true, //validation
     }
 
 });
 
 module.exports = mongoose.model(
     "UserModel",//file name
     UserSchema//function name
 ); 