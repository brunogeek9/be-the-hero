const request = require('supertest');
const app = require('../../src/app');
const con = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        // await con.migrate.rollback();

        await con.migrate.latest();
    });

    afterAll(async () => {
        await con.destroy();
    });

    it('shoud be able new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "ong de campo redondo",
                email: "emailongnova@gmail.com",
                whatsapp: "8499998888",
                city: "campo redondo",
                uf: "RN"
            });


        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});

//testar as outras rotas ...