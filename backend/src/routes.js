const express = require('express');
// const crypto = require('crypto');
const routes = express.Router();
const connection = require('./database/connection');
const OngControler = require('./controllers/OngControler');
const IncidentControler = require('./controllers/IndicentController');
const ProfileControler = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions', SessionController.create);

routes.post('/ongs', OngControler.create);
routes.get('/ongs', OngControler.index);

routes.post('/incidents', IncidentControler.create);
routes.get('/incidents', IncidentControler.index);
routes.delete('/incidents/:id', IncidentControler.delete)

routes.get('/profile', ProfileControler.index);

routes.get('/sobre', (req, res) => {
    res.json({
        nome: 'Bruno Jamelli',
        hobbyes: ['animes', 'filmes sul coreanos', 'fazer comidas saudáveis']
    })
});

module.exports = routes;