const express = require('express');
// const crypto = require('crypto');
const routes = express.Router();
const connection = require('./database/connection');
const OngControler = require('./controllers/OngControler');
const IncidentControler = require('./controllers/IndicentController');
const ProfileControler = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const { celebrate, Segments, Joi } = require('celebrate');

routes.post('/sessions', SessionController.create);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)

    })
}), OngControler.create);

routes.get('/ongs', OngControler.index);

routes.post('/incidents', IncidentControler.create);

routes.get('/incidents', IncidentControler.index);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileControler.index);

routes.delete('/incidents/:id', IncidentControler.delete);

routes.get('/sobre', (req, res) => {
    res.json({
        nome: 'Bruno Jamelli',
        hobbyes: ['animes', 'filmes sul coreanos', 'fazer comidas saudáveis']
    })
});

module.exports = routes;