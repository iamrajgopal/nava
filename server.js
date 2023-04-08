const mongoose = require('mongoose');
const { Schema } = mongoose;
const express = require('express');
const cors = require('cors');
const multer  = require('multer');
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const upload = multer({ dest: 'uploads/' });

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname,"./day01/build")));

mongoose.connect(process.env.MDBconectionSting);

let productSchema = new Schema({
    id:Number,
    title:String,
    price:Number,
    image:String,
});

let products = new mongoose.model("products",productSchema);


app.get("/data",async(req,res)=>{
 let dat = await products.find();
 res.json(dat)
});



app.put("/dataWithValue",upload.none(),async(req,res)=>{
 let dataValue = await products.updateOne({"id":req.body.value},{$set:{title:req.body.title,price:req.body.price,image:req.body.image}},{ upsert: true });
 res.json(dataValue);
 
});

app.post("/updateCard",upload.none(),async(req,res)=>{
   let data = await products.insertMany({id:Date.now(),title:req.body.title,image:req.body.image,price:req.body.price});
   res.json(data);

})

app.listen(3197,()=>{
    console.log('connected to port')
})