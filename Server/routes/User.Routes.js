const {Router}=require("express")
const { login, signup } = require("../controllers/User.Controller")
const User_route=Router()

User_route.post("/signup",signup)
User_route.post("/login",login)

module.exports=User_route