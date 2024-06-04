const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    categoryname: {
        type: String,
        required: [true, "CategoryName is must Required"]
    },
    machinetype: {
        type: String,
        required: [true, "Name is must Required"]
    },
    invter: {
        type: String,
        required: [true, "Name is must Required"]
    },
     inteldia: {
        type: String,
        required: [true, "Name is must Required"]
    },
     outletdia: {
        type: String,
        required: [true, "Name is must Required"]
    }, 
    maxdia: {
        type: String,
        required: [true, "Name is must Required"]
    },
     linespeed: {
        type: String,
        required: [true, "Name is must Required"]
    },
     bodysctru: {
        type: String,
        required: [true, "Name is must Required"]
    },
     drawing: {
        type: String,
        required: [true, "Name is must Required"]
    },
     slipratio: {
        type: String,
        required: [true, "Name is must Required"]
    }, 
    upmotor: {
        type: String,
        required: [true, "Name is must Required"]
    },
    fixspeed: {
        type: String,
        required: [true, "Name is must Required"]
    },
    transtmission: {
        type: String,
        required: [true, "Name is must Required"]
    },
    lubrication: {
        type: String,
        required: [true, "Name is must Required"]
    },
    annealingvoltage: {
        type: String,
        required: [true, "Name is must Required"]
    },
    annealingcurrent: {
        type: String,
        required: [true, "Name is must Required"]
    },
    upbobbinsize: {
        type: String,
        required: [true, "Name is must Required"]
    },
    traversingtype: {
        type: String,
        required: [true, "Name is must Required"]
    },
    tensioncontrol: {
        type: String,
        required: [true, "Name is must Required"]
    },
    brake: {
        type: String,
        required: [true, "Name is must Required"]
    },
    weight: {
        type: String,
        required: [true, "Name is must Required"]
    },
    image1:{
        type:String,
        required:[true,"Image is must required"]
    },
    image2:{
        type:String,
        required:[true,"Image is must required"]
    },
    image3:{
        type:String,
        required:[true,"Image is must required"]
    },
    image4:{
        type:String,
        required:[true,"Image is must required"]
    }
})

const product = mongoose.model("product" , productSchema)

module.exports = product