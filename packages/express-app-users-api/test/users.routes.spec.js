import { usersRoute } from '../app/routes';
import testServer from './testServer';

describe('UserRoutes', () => {
  const request = testServer(usersRoute);

  describe('GET /', () => {
    it('should respond with 200', (done) => {
      request.get('/').expect(200);
      done();
    });
  });

  describe('GET /{id}', () => {
    it('should respond with 200', (done) => {
      request.get('/1').expect(200);
      done();
    });
  });

  describe('POST /', () => {
    it('should respond with 304', (done) => {
      request.post('/').expect(304);
      done();
    });
  });

  describe('PUT /{id}', () => {
    it('should respond with 200', (done) => {
      request.put('/1').expect(200);
      done();
    });
  });

  describe('DELETE /{id}', () => {
    it('should respond with 304', (done) => {
      request.delete('/9999').expect(304);
      done();
    });
  });
});
