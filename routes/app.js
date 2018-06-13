const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/app.js')

router.get('/', applicationController.index)

module.exports = router
