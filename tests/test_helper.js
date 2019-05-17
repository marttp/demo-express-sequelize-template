const Comment = require('../models/comments');

beforeEach((done) => {
    Comment.sync({ force: true }).then(() => {
        done();
    });
});

after((done) => {
    Comment.drop().then(() => {
        done();
    });
});