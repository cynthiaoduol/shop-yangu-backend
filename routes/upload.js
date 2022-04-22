import express from 'express';
import cloudinary from 'cloudinary'
const router = express.Router();


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

router.post('/upload', (req, res) => {
    try {
        const file=req.files.photo;
        // if (!req.file) { 
        //     res.json('Image is not presented!');
        //  }
        res.json('test upload successful')
        // res.json('test upload successful')
        // console.log(file)
        

    } catch (err) {
        res.status(500).json(err)
    }
})

export default router;