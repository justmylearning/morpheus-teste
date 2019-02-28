const request = require('supertest');
const app = require('../index');

//==================== User API test ====================

/**
 * Testing get all user endpoint
 */
describe('GET /user', function () {
    it('respond with json containing a list of all users', function (done) {
        request(app)
            .get('/api/user')
            .expect(200)
            .end((err, res) => {
                if(err) throw { error:err, response:res.text };
                console.log(res.text);
                done();
            })
    });
});

describe('POST /user', function(){
    
    it('response with josn containing a new user object', (done) => {

        const params = {
            name:"Marco"
        }

        request(app)
            .post('/api/user')
            .send(params)
            .expect(200)
            .end((err, res) => {
                if(err) throw { error:err, response: res.text };
                console.log(res.text);
                done();
            })
    });
});