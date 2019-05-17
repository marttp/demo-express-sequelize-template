/*
 *
 * Controller
 * used to decision path on api service
 *
 */

const postsService = require('../services/posts.service');
const { generateResponseObject } = require('../shared/generate.response');

exports.getAllCommentsController = async (req, res, next) => {
    let status = 200;
    try {
        const result = await postsService.findAllComment(req, res, next);
        status = 200;
        return res.status(200).json(generateResponseObject(true, status, result));
    } catch (error) {
        status = 500;
        return res.status(status).json(generateResponseObject(false, status));
    }
};


exports.getCommentByIdController = async (req, res, next) => {
    let status = 200;
    try {
        const result = await postsService.findCommentById(req, res, next);
        status = 200;
        return res.status(200).json(generateResponseObject(true, status, result));
    } catch (error) {
        status = 500;
        return res.status(status).json(generateResponseObject(false, status));
    }
};

// @desc  Create single comment
exports.createCommentController = async (req, res, next) => {
    let status = 200;
    try {
        const result = await postsService.createSingleComment(req, res, next);
        status = 200;
        return res.status(200).json(generateResponseObject(true, status, result));
    } catch (error) {
        status = 500;
        return res.status(status).json(generateResponseObject(false, status));
    }
};
