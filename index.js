var express=require('express');
var mongoose=require('mongoose');
var route=require('./route');

var bodyparser=require('body-parser');

// mongoose.connect('mongodb://localhost:27017/books').then(()=>{
    mongoose.connect('mongodb+srv://aarti_dharajiya_user:@dharajiya93@cluster0.kdsls.mongodb.net/db?retryWrites=true&w=majority').then(()=>{
    // mongodb+srv://aarti_dharajiya_user:<password>@cluster0.kdsls.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

    
    console.log('DB connected');
    var app=express();
    app.use(bodyparser.urlencoded({extended:false}));
    app.use('/api',route);
    app.listen(3000,()=>{
        console.log('Server connected');
    })
}).catch((e)=>{
    console.log(e.toString());
})