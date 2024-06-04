const { createRecord, getRecord, getSingleRecord, updateRecord ,deleteRecord } = require("../Controllar/CategoryControllar")
const multer = require("multer")

const categoryRouter = require("express").Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./Public/Category")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const uploader = multer({ storage: storage })

categoryRouter.post("/category", uploader.single("image"), createRecord)
categoryRouter.get("/category", getRecord)
categoryRouter.get("/category/:_id", getSingleRecord)
categoryRouter.put("/category/:_id", uploader.single("image"), updateRecord)
categoryRouter.delete("/category/:_id", deleteRecord)

module.exports = categoryRouter