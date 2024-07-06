const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: "dsimn9z1r",
    api_key: "998919427255124",
    api_secret: "h-PsVovtSvzakWubj1X8sXJEtp4"
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