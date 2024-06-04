const mongoose = require("mongoose")

const getConnect = async()=>{
    try {
        // await mongoose.connect("mongodb://localhost:27017/vivision")
        await mongoose.connect("mongodb+srv://mannu22072000:299He6kzIjGDZ2Qs@cluster0.u7b65sz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Databae is connect is successfully")
    } catch (error) {
        console.log(error)
    }
}

getConnect()