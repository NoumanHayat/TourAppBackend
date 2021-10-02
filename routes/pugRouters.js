const express = require('express');
const pubController = require('./../controllers/pubController');
const authController = require('./../controllers/authController');
const router = express.Router({ mergeParams: true });

//routes
router.use(authController.isLoggedIn);
router.route('/overview').all(pubController.getOverview);
router.route('/tour/:id').all(authController.protect, pubController.getTour);
router.route('/login').all(pubController.getloginForm);
 
router.route('/').all(pubController.getOverview);
module.exports = router;
