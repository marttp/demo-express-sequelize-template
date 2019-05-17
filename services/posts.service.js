const Comment = require('../models/comments');

exports.findAllComment = async (req, res, next) => {
    try {
        const result = await Comment.findAll();
        return result;
    } catch (error) {
        return error;
    }
    // Post.findAll({ where: '' });
};

exports.findCommentById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await Comment.findByPk(id);
        return result ? result : [];
    } catch (error) {
        return error;
    }
    // Post.findByPk(PK);
};


exports.createSingleComment = async (req, res, next) => {
    const { title, content, parentId } = req.body;
    try {
        const result = await Comment.create({
            title,
            content,
            parentId: parentId ? parentId : null
        });
        return result;
    } catch (error) {
        return error;
    }
};
