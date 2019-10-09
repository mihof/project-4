const express = require('express');
const router = express.Router();
const imageCtrl = require('../../controllers/file-upload');

const singleUpload = imageCtrl.upload.single('image');

router.post('/image-upload')