const ImageModel = require('../models/image-model');
const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination : function (req , file , cb) {
        cb(null , './public/uploads')
    } ,
    filename : (req ,file , cb) => {
        let ext = path.extname(file.originalname);
        cb(null , Date.now() + ext)
    },
})


var upload = multer({
    storage : storage , 
    fileFilter : function (req , file , callback) {
      if (
        file.mimetype == 'image/png' || file.mimetype == 'image/jpeg'
       ){
        callback(null , true)
      } else {
        console.log('only jpg & png file  supported ! ');
        callback(null , false)
      }
    } ,
    limits : {
        fileSize : 1024 * 1024 * 5
    }

})

module.exports = upload


// file : localhost:3000/uploads/wewewqeqwe.png