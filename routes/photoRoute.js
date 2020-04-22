'use strict';
// photoRoute
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: './uploads/'});
const photoController = require('../controllers/photoController');

router.get('/', photoController.photo_list_get);

router.get(':id', photoController.photo_get);

router.post('/hack', (req, res) => {
    res.send(req.body.search);
});

router.post('/', upload.single('photo'), (req, res) => {
   console.log('tiedosto', req.file);
   photoController.photo_post(req, res);
});

router.put('/', photoController.photo_put);

router.delete('/:id', photoController.photo_delete);

module.exports = router;
