const mongoose=require("mongoose")
const connect=async()=>{
    await mongoose.connect("mongodb+srv://vrajlukhi:vrajlukhi@cluster0.h0qqzcb.mongodb.net/Exam?retryWrites=true&w=majority")
    console.log("Mongoose");
}
module.exports=connect