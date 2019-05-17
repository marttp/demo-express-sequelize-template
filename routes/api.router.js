const express = require('express');
const router = express.Router();

/*
 *
 * Route
 * used to navigate in to separate topic
 * Middleware will implement in topic file
 * such as Authorization, Upload image
 * 
 */

const postRoutes = require('./posts.routes');

router.use('/posts', postRoutes);

module.exports = router;