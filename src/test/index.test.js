const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');

describe('mocha', () => {
  it('should run test', () => {
    expect(true).to.be.true;
  });
});

let auth_token = '';

describe('auth', () => {
  it('user login', async () => {
    const response = await request(app)
      .post('/api/v1/login').send({
        email: 'user1@gmail.com',
        password: 'user@123',
      });
    expect(response.status).to.equal(200);
    auth_token = response.header['auth-token'];
  });
});

describe('user', () => {
  it('get all user', async () => {
    const response = await request(app)
      .get('/api/v1/user').set('auth-token', auth_token);
    expect(response.status).to.equal(200);
  });
  it('get particular user', async () => {
    const response = await request(app)
      .get('/api/v1/user/1').set('auth-token', auth_token);
    expect(response.status).to.equal(200);
  });
  it('save user', async () => {
    const response = await request(app)
      .post('/api/v1/user').set('auth-token', auth_token).send({
        email: 'user5@gmail.com',
        name: 'user4',
        password: 'user@123',
      });
    expect(response.status).to.equal(200);
  });
  it('update user', async () => {
    const response = await request(app)
      .put('/api/v1/user/2').set('auth-token', auth_token).send({
        name: 'user10',
        password: 'user@123',
      });
    expect(response.status).to.equal(201);
  });
  it('delete user', async () => {
    const response = await request(app)
      .delete('/api/v1/user/3').set('auth-token', auth_token);
    expect(response.status).to.equal(201);
  });
});

describe('cab', () => {
  it('get all cab', async () => {
    const response = await request(app)
      .get('/api/v1/cab').set('auth-token', auth_token);
    expect(response.status).to.equal(200);
  });
  it('get near by cab location', async () => {
    const response = await request(app)
      .get('/api/v1/cab/cablocation').query({ cab_location: 'delhi' }).set('auth-token', auth_token);
    expect(response.status).to.equal(200);
  });
  it('get particular cab', async () => {
    const response = await request(app)
      .get('/api/v1/cab/1').set('auth-token', auth_token);
    expect(response.status).to.equal(200);
  });
  it('save cab', async () => {
    const response = await request(app)
      .post('/api/v1/cab').set('auth-token', auth_token).send({
        driver_name: 'driver5',
        vehicle_number: '38933832',
        vehicle_colour: 'red',
        cab_location: 'delhi',
      });
    expect(response.status).to.equal(200);
  });
  it('update cab', async () => {
    const response = await request(app)
      .put('/api/v1/cab/2').set('auth-token', auth_token).send({
        driver_name: 'driver4',
        vehicle_colour: 'red',
        cab_location: 'delhi',
      });
    expect(response.status).to.equal(201);
  });
  it('delete cab', async () => {
    const response = await request(app)
      .delete('/api/v1/cab/3').set('auth-token', auth_token);
    expect(response.status).to.equal(201);
  });
});

describe('booking', () => {
  it('get all booking', async () => {
    const response = await request(app)
      .get('/api/v1/booking').set('auth-token', auth_token);
    expect(response.status).to.equal(200);
  });
  it('get all user previous rides', async () => {
    const response = await request(app)
      .get('/api/v1/booking/userpreviousride').query({ user_id: 1 }).set('auth-token', auth_token);
    expect(response.status).to.equal(200);
  });
  it('get particular booking', async () => {
    const response = await request(app)
      .get('/api/v1/booking/1').set('auth-token', auth_token);
    expect(response.status).to.equal(200);
  });
  it('save booking', async () => {
    const response = await request(app)
      .post('/api/v1/booking').set('auth-token', auth_token).send({
        user_id: 3,
        cab_id: 3,
        pickup_location: 'kelhi',
        drop_location: 'mumbai',
      });
    expect(response.status).to.equal(200);
  });
  it('update booking', async () => {
    const response = await request(app)
      .put('/api/v1/booking/2').set('auth-token', auth_token).send({
        user_id: 3,
        cab_id: 3,
        pickup_location: 'dd',
        drop_location: 'mumbai',
      });
    expect(response.status).to.equal(201);
  });
  it('delete booking', async () => {
    const response = await request(app)
      .delete('/api/v1/booking/3').set('auth-token', auth_token);
    expect(response.status).to.equal(201);
  });
});
