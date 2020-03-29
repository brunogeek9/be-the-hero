const express = require('express');
// const crypto = require('crypto');
const routes = express.Router();
const connection = require('./database/connection');
const OngControler = require('./controllers/OngControler');
const IncidentControler = require('./controllers/IndicentController');
const ProfileControler = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const { celebrate, Segments, Joi } = require('celebrate');

//validar se o id esta vindo no login
routes.post('/sessions', SessionController.create);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)

    })
}), OngControler.create);

routes.get('/ongs', OngControler.index);

//validar criação de incidente
routes.post('/incidents', IncidentControler.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentControler.index);
/* 
celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}),
*/
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileControler.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentControler.delete);

routes.get('/about', (req, res) => {
    res.json({
        nome: 'Bruno Jamelli',
        hobbyes: ['animes', 'filmes sul coreanos', 'fazer comidas saudáveis']
    })
});

module.exports = routes;