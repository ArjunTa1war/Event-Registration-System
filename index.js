require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser") 

const User = require("./models/user")
const Product = require("./models/product");

const {Suprsend} = require("@suprsend/node-sdk");
const { Workflow } = require("@suprsend/node-sdk")

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static("public"));


mongoose.set('strictQuery', true);
const URI = process.env.MOGODB_URI;
mongoose.connect(URI, {useNewUrlParser: true});

const workspace_key = process.env.WORKSPACE_KEY;
const workspace_secret = process.env.WORKSPACE_SECRET;
const supr_client = new Suprsend(workspace_key, workspace_secret);


app.listen(3000,()=>{
    console.log("server started on port 3000");
})