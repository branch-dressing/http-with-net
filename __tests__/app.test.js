const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
    it('returns plain text hi', () => {
        return request(app)
            .get('/')
            .then(res => {
                expect(res.text).toEqual('hi');
            });
    });
    it('returns status code 200 and plain text with req body', () => {
        return request(app)
            .post('/echo')
            .then(res => {
                expect(res.text).toEqual('post');
            });
    });
});
