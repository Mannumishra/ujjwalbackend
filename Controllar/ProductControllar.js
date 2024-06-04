const product = require("../Model/ProductModel")
const cloudnary = require("cloudinary").v2

cloudnary.config({
    cloud_name: "dsimn9z1r",
    api_key: "998919427255124",
    api_secret: "h-PsVovtSvzakWubj1X8sXJEtp4"
})

const uploadImage = async (file) => {
    try {
        const uploadFile = await cloudnary.uploader.upload(file)
        return uploadFile.secure_url
    } catch (error) { }
}

const createRecord = async (req, res) => {
    try {
        console.log(req.body)
        const { categoryname, machinetype, invter, inteldia, outletdia, maxdia, linespeed, bodysctru, drawing, slipratio, upmotor, fixspeed, transtmission, lubrication, annealingvoltage, annealingcurrent, upbobbinsize, traversingtype, tensioncontrol, brake, weight } = req.body
        if (!categoryname || !machinetype || !invter || !inteldia || !outletdia || !maxdia || !linespeed || !bodysctru || !drawing || !slipratio || !upmotor || !fixspeed || !transtmission || !lubrication || !annealingvoltage || !annealingcurrent || !upbobbinsize || !traversingtype || !tensioncontrol || !brake || !weight) {
            return res.status(403).json({
                success: false,
                mess: "Fill all required fields"
            })
        }
        else {
            const data = new product({ categoryname, machinetype, invter, inteldia, outletdia, maxdia, linespeed, bodysctru, drawing, slipratio, upmotor, fixspeed, transtmission, lubrication, annealingvoltage, annealingcurrent, upbobbinsize, traversingtype, tensioncontrol, brake, weight })
            if (req.files) {
                // console.log(req.files, req.file)
                if (req.files.image1) {
                    const url = await uploadImage(req.files.image1[0].path)
                    data.image1 = url
                }
                if (req.files.image2) {
                    const url = await uploadImage(req.files.image2[0].path)
                    data.image2 = url
                }
                if (req.files.image3) {
                    const url = await uploadImage(req.files.image3[0].path)
                    data.image3 = url
                }
                if (req.files.image4) {
                    const url = await uploadImage(req.files.image4[0].path)
                    data.image4 = url
                }
            }
            await data.save()
            res.status(200).json({
                success: true,
                mess: "New Product created",
                data: data
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        })
    }
}

const getproduct = async (req, res) => {
    try {
        let data = await product.find()
        if (!data) {
            return res.status(400).json({
                success: true,
                mess: "Record not found"
            })
        }
        else {
            res.status(200).json({
                success: true,
                mess: "Record found",
                data: data
            })
        }
    } catch (error) {
        res.status(500).json({
            success: true,
            mess: "Internal Server Error"
        })
    }
}

const getSinglrproduct = async (req, res) => {
    try {
        let data = await product.find({ _id: req.params._id })
        if (!data) {
            return res.status(400).json({
                success: true,
                mess: "Record not found"
            })
        }
        else {
            res.status(200).json({
                success: true,
                mess: "Record found",
                data: data
            })
        }
    } catch (error) {
        // console.log(error)
        res.status(500).json({
            success: true,
            mess: "Internal Server Error"
        })
    }
}

const deleteRecord = async (req, res) => {
    try {
        let data = await product.findOne({ _id: req.params._id })
        if (data) {
            const oldimage1 = data.image1.split("/").pop().split(".")[0]
            // console.log(oldimage1)
            try {
                await cloudnary.uploader.destroy(oldimage1)
            } catch (error) { }
            const oldimage2 = data.image2.split("/").pop().split(".")[0]
            // console.log(oldimage2)
            try {
                await cloudnary.uploader.destroy(oldimage2)
            } catch (error) { }
            const oldimage3 = data.image3.split("/").pop().split(".")[0]
            // console.log(oldimage3)
            try {
                await cloudnary.uploader.destroy(oldimage3)
            } catch (error) { }
            const oldimage4 = data.image4.split("/").pop().split(".")[0]
            // console.log(oldimage4)
            try {
                await cloudnary.uploader.destroy(oldimage4)
            } catch (error) { }
            await data.deleteOne()
            res.status(200).json({
                success: true,
                mess: "Record Deleted",
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        let data = await product.findOne({ _id: req.params._id })
        if (data) {
            data.categoryname = req.body.categoryname ?? data.categoryname,
                data.machinetype = req.body.machinetype ?? data.machinetype,
                data.invter = req.body.invter ?? data.invter,
                data.inteldia = req.body.inteldia ?? data.inteldia,
                data.outletdia = req.body.outletdia ?? data.outletdia,
                data.maxdia = req.body.maxdia ?? data.maxdia,
                data.linespeed = req.body.linespeed ?? data.linespeed,
                data.bodysctru = req.body.bodysctru ?? data.bodysctru,
                data.drawing = req.body.drawing ?? data.drawing,
                data.slipratio = req.body.slipratio ?? data.slipratio,
                data.upmotor = req.body.upmotor ?? data.upmotor,
                data.fixspeed = req.body.fixspeed ?? data.fixspeed,
                data.transtmission = req.body.transtmission ?? data.transtmission,
                data.lubrication = req.body.lubrication ?? data.lubrication,
                data.annealingvoltage = req.body.annealingvoltage ?? data.annealingvoltage,
                data.annealingcurrent = req.body.annealingcurrent ?? data.annealingcurrent,
                data.upbobbinsize = req.body.upbobbinsize ?? data.upbobbinsize,
                data.traversingtype = req.body.traversingtype ?? data.traversingtype,
                data.tensioncontrol = req.body.tensioncontrol ?? data.tensioncontrol,
                data.weight = req.body.weight ?? data.weight
            data.brake = req.body.brake ?? data.brake
            if (req.files) {
                if (req.files.image1) {
                    const olImage = data.image1.split("/").pop().split(".")[0]
                    try {
                        await cloudnary.uploader.destroy(olImage)
                    } catch (error) { }
                    const ulr = uploadImage(req.files.image1[0].path)
                    data.image1 = ulr
                }
                if (req.files.image2) {
                    const oldImage = data.image2.split("/").pop().split(".")[0]
                    try {
                        await cloudnary.uploader.destroy(oldImage)
                    } catch (error) { }
                    const url = uploadImage(req.files.image2[0].path)
                    data.image2 = url
                }
                if (req.files.image3) {
                    const oldImage = data.image3.split("/").pop().split(".")[0]
                    try {
                        await cloudnary.uploader.destroy(oldImage)
                    } catch (error) { }
                    const url = uploadImage(req.files.image3[0].path)
                    data.image3 = url
                }
                if (req.files.image4) {
                    const oldImage = data.image4.split("/").pop().split(".")[0]
                    try {
                        await cloudnary.uploader.destroy(oldImage)
                    } catch (error) { }
                    const url = uploadImage(req.files.image4[0].path)
                    data.image4 = url
                }
            }
            await data.save()
            res.status(200).json({
                success: true,
                mess: "Record updated successfully",
                data: data
            })
        }
        else {
            return res.status(403).json({
                success: false,
                mess: "Record Not found"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: true,
            mess: "Internal Server Error"
        })
    }
}

module.exports = {
    createRecord: createRecord,
    getproduct: getproduct,
    getSinglrproduct: getSinglrproduct,
    deleteRecord: deleteRecord,
    updateProduct:updateProduct
}