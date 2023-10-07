'use strict'
let express = require('express');
let router = express.Router();

const authorizationController = require("../controllers/authorization/authorization");

router.post("/register", authorizationController.register);
router.post('/login', authorizationController.validate);





module.exports = router;
