const express = require('express');
const router = express.Router();

/*
 *
 * Controller
 * used to decision path on api service
 *
 */

const postsController = require('../controllers/posts.controller');

// @route GET /api/v1/posts
// @desc  Get All comments
// @access Public
router.get('/', postsController.getAllCommentsController);

// @route GET /api/v1/posts/:id
// @desc  Get comment by comment id
// @access Public
router.get('/:id', postsController.getCommentByIdController);

// @route POST /api/v1/posts
// @desc  Create comment To Database
// @access Public
router.post('/', postsController.createCommentController);



module.exports = router;