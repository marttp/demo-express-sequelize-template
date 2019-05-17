const Comment = require('../models/comments');
const request = require('supertest');

// const app = require('../server');

const expect = require('expect');

describe('Comment', () => {
    let rootComment, childRoot1, childRoot2, childLevelTwo;

    beforeEach((done) => {

        rootComment = Comment.build({
            title: 'root_Title',
            content: 'root_Content'
        });

        rootComment.save()
            .then((result) => {
                rootComment = result;

                childRoot1 = Comment.build({
                    title: 'childRoot1_Title',
                    content: 'childRoot1_Content',
                    parentId: rootComment.id
                });
                childRoot2 = Comment.build({
                    title: 'childRoot2_Title',
                    content: 'childRoot2_Content',
                    parentId: rootComment.id
                });

                return Promise.all([childRoot1.save(), childRoot2.save()]);
            })
            .then((result) => {
                childLevelTwo = Comment.build({
                    title: 'childLevelTwo_Title',
                    content: 'childLevelTwo_Content',
                    parentId: result[0].id
                });

                return childLevelTwo.save();
            })
            .then(() => done())
            .catch((err) => {
                console.log(err);
            });
    });

    it('Cen get all comment', (done) => {
        Comment.findAll().then((result) => {
            expect(Array.isArray(result)).toBeTruthy();
            expect(result.length).toBe(4);
            done();
        });
    });

    it('Can query root comment and get root_Title', (done) => {
        Comment.findByPk(rootComment.id).then((result) => {
            expect(result.title).toBe('root_Title');
            done();
        });
    });

});