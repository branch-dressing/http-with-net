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
    it('html with an h1 and the word red', () => {
        return request(app)
            .get('/red')
            .then(res => {
                expect(res.text).toEqual('<h1>Red</h1>');
            });
    });
    it('html with an h1 and the word green', () => {
        return request(app)
            .get('/green')
            .then(res => {
                expect(res.text).toEqual('<h1>Green</h1>');
            });
    });
    it('html with an h1 and the word blue', () => {
        return request(app)
            .get('/Blue')
            .then(res => {
                expect(res.text).toEqual('<h1>Blue</h1>');
            });
    });
});
