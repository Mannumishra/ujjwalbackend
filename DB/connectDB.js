const mongoose = require("mongoose")

const getConnect = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/vivision")
        console.log("Databae is connect is successfully")
    } catch (error) {
        console.log(error)
    }
}

getConnect()