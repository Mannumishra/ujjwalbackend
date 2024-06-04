const productRouter = require("express").Router()
const multer = require("multer")
const { createRecord, getproduct, getSinglrproduct, deleteRecord, updateProduct } = require("../Controllar/ProductControllar")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./Public/Product")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })

productRouter.post("/product", upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 }
]), createRecord)
productRouter.get("/product", getproduct)
productRouter.get("/product/:_id", getSinglrproduct)
productRouter.delete("/product/:_id", deleteRecord)
productRouter.put("/product/:_id", upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
]), updateProduct)


module.exports = productRouter