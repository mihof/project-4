const express = require('express');
const router = express.Router();
const imageCtrl = require('../../controllers/image-uploads');

const singleUpload = imageCtrl.single('image');

router.post('/image-upload', function(req, res) {

  singleUpload(req, res, function(err) {
    return res.json({'imageURL': req.file.location})
  });
});

module.exports = router;