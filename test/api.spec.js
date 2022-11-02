const request = require('supertest');

const app = require('../app');

describe('Api Integration test', () => {
    test('test get /', () => {
        request(app).get('/').then(res => {
            expect(res.statusCode).toBe(200)
        })
    })
})