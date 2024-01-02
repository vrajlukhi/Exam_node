const mongoose=require("mongoose")
const ProductSchema=new mongoose.Schema({
    title:String,
    img:String,
    desc:String,
    price:String,
    caterory:String
})
const Pro_Model=mongoose.model("product",ProductSchema)
module.exports=Pro_Model