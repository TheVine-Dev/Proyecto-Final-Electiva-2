const request = require('supertest');
const app = require('./app');

test("Se espera a tener como resultado: Mi Nombre y Matricula", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .expect("¡Hola, Saul Soto 2019-8168!")
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

