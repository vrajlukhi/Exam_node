const UserModel = require("../moduls/User.Schema")

const signup=async(req,res)=>{
    let{email}=req.body
    let user=await UserModel.findOne({email:email});
    if(user!=null){
        return res.redirect("/user/login");
    }
    else{
        let data=await UserModel.create(req.body)
        return res.json(data)
    }
}
const login=async(req,res)=>{
    let{email,password}=req.body
    let user=await UserModel.findOne({email:email})
    if(user){
        if(user.password==password){
            return res.json(user)
        }
        else{
            return res.send({msg:"Password is rong"})
        }
    }
    else{
        return res.redirect("/user/signup")
    }
}
module.exports={signup,login}