var mongoose=require('mongoose');

var bookSchema=mongoose.Schema({
    author:String,
    rating:Number,
    edition:Number
})
module.exports=mongoose.model("books",bookSchema);