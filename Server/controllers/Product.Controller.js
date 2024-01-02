const Pro_Model = require("../moduls/Product.Schema")
const Razorpay=require("razorpay")

const AddPro=async(req,res)=>{
    let data=await Pro_Model.create(req.body)
    return res.json(data)
}
const pro=async(req,res)=>{
    let data=await Pro_Model.find()
    return res.json(data)
}

const razorpay = new Razorpay({
    key_id :"rzp_test_bLAqvl1z0C0XkX",
    key_secret :"nizRRMzym2GDOjgHzhMZ0Svv"
})
const payment=(req,res)=>{
    let {amount}=req.body
    let options={
        amount:amount*100
    }
    razorpay.orders.create(options,(err,orders)=>{
        if(err){
            console.log(err);
            res.json(err)
        }
        else{
            return res.json(orders)
        }
    })
}
module.exports={AddPro,pro,payment}