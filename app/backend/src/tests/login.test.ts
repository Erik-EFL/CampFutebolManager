import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import User from '../database/models/user';
import JwtAuth from '../services/Auth/Jwt.services';
import LoginAuth from '../services/Auth/Login.services';
import PassWordAuth from '../services/Auth/Pass.services';
import usersMock from './utils/Mocks/login.mock';

chai.use(chaiHttp);
const { expect } = chai;

describe('POST /Login', () => {
  describe('Login validate', () => {
    beforeEach(() => {
      sinon.stub(JwtAuth, 'sign').returns('test-string');
      sinon.stub(JwtAuth, 'tokenVerify').returns({email:'admin@admin.com'} as any);
      sinon.stub(LoginAuth, 'findUserByEmail').returns(usersMock.userLoginSuccess as any);
      sinon.stub(PassWordAuth, 'comparePassword').returns(true);
    })

    afterEach(() => {
      sinon.restore();
    }),

    it('should return status 200 after user login', async () =>{
      const response = await chai.request(app)
        .post('/login')
        .send(usersMock.userLogin)
      expect(response.status).to.equal(200)
    })

    it('should return token', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(usersMock.userLogin)
      expect(response.body.token).to.equal('test-string');
    })

    it('should return status 200 after user login', async () =>{
      const response = await chai.request(app)
        .get('/login/validate')
        .set({"Authorization": 'Bearer-test-string'})
      expect(response.status).to.equal(200)
    })

    it('should return role', async () => {
      const response = await chai.request(app)
        .get('/login/validate')
        .set({"Authorization": 'Bearer-test-string'})
      expect(response.body.role).to.equal('admin');
    })
  })

  describe('BadRequest login', () => {
    beforeEach(() => {
      sinon.stub(JwtAuth, "tokenVerify").returns({email:'unauthorizedUser'} as any)
      sinon.stub(LoginAuth, "findUserByEmail").resolves(null)
    })

    afterEach(() => {
      sinon.restore();
    }),

    it('should return status 400 if user not found', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send({email: ''})
      expect(response.status).to.equal(400);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.be.equal('All fields must be filled');
    })

    it('should return status 401 if incorrect user', async () => {
      const response = await chai.request(app)
        .post('/login')
        .send(usersMock.badRequestUser)
      expect(response.status).to.equal(401);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.be.equal('Incorrect email or password');
    })

    it('should return status 401 if incorrect password', async () => {
      const response = await chai.request(app)
        .get('/login/validate')
        .set({"Authorization": 'Bearer-test-string'})
      expect(response.status).to.equal(401);
      expect(response.body).to.have.property('message');
      expect(response.body.message).to.be.equal('Incorrect email or password');
    })
  })

  describe('Unauthorized login', () => {
    it('should return status 400 if not has token', async () => {
      const response = await chai.request(app)
        .get('/login/validate')

      expect(response.status).to.equal(400);
      expect(response.body.message).to.equal('Token not found');
    })
  })
})
