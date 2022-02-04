var express=require('express');
var router=express.Router();
var Book=require('./model/book');

router.get('/books',async(req,res)=>{
    const ibook=await Book.find();
    console.log(ibook);
    res.send(ibook);
})

//to add the books
router.post('/books',async(req,res)=>{
    const ibook = new Book({
        author:req.body.author,
        rating:req.body.rating,
        edition:req.body.edition
    })

    await ibook.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating book

router.patch('/books/:id',async (req,res)=>{
    const ibook = await Book.findOne({_id:req.params.id})
    ibook.author = req.body.author
    ibook.rating = req.body.rating
    ibook.edition=req.body.edition
    await ibook.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api

router.delete("/books/:author",async(req,res)=>{
    await Book.deleteOne({author:req.params.author},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }

    })
})

module.exports=router;


// db.inventory.find({},{_id:0,carrier:0}).sort({quantity:-1}).skip(1).limit(1)