const {Router}=require("express")
const { AddPro, pro, payment } = require("../controllers/Product.Controller")
const Pro_Route=Router()

Pro_Route.post("/addpro",AddPro)
Pro_Route.get("/pro",pro)
Pro_Route.post("/payment",payment)

module.exports=Pro_Route