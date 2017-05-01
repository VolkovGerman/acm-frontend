const express = require('express');
const router = express.Router();

const SecureController = require('../controllers/secure');
const ApiController = require('../controllers/api');
const NewsController = require('../controllers/api/news');
const EventsController = require('../controllers/api/events');
const CompetitionsController = require('../controllers/api/competitions');

router
    // API Index
    .get('/', ApiController.index)

    // News
    .get('/news', NewsController.getSome)
    .get('/news/:id', NewsController.getOne)
    // .post('/news', NewsController.add)
    // .put('/news/:id', NewsController.update)
    // .delete('/news/:id', NewsController.delete)

    // Events
    .get('/events', EventsController.getSome)
    .get('/events/:id', EventsController.getOne)

    // Competitions
    .get('/competitions', CompetitionsController.getSome)
    .get('/competitions/:id', CompetitionsController.getOne)

    // Login
    .get('/login', SecureController.login)
    .get('/logout', SecureController.logout);

module.exports = router;
