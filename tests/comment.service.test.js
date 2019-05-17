const request = require('supertest');
const expect = require('expect');

const Comment = require('../models/comments');
const app = require('../server');

const baseUrl = '/api/v1/posts/';

describe('Comment Service', () => {
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

    it('Cen get all comment service', (done) => {
        request(app).get(`${baseUrl}`).then((response) => {
            const result = response.body.data;
            expect(Array.isArray(result)).toBeTruthy();
            expect(result[0].id).toBe(1);
            expect(result[0].title).toBe('root_Title');
            done();
        });
    });


});