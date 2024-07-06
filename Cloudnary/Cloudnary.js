const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECTER
})


const uploadImage = async (file) => {
    try {
        const uploadFileData = await cloudinary.uploader.upload(file)
        return uploadFileData.secure_url
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    uploadImage:uploadImage
}