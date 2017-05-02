const express = require('express');
const router = express.Router();

const SecureController = require('../controllers/secure');
const ApiController = require('../controllers/api');
const NewsController = require('../controllers/api/news');
const EventsController = require('../controllers/api/events');
const CompetitionsController = require('../controllers/api/competitions');
const TagsController = require('../controllers/api/tags');
const ThemesController = require('../controllers/api/themes');

router
    // API Index
    .get('/', ApiController.index)

    // News
    .get('/news', NewsController.getSome)
    .get('/news/:id', NewsController.getOne)
    .post('/news', NewsController.add)
    .put('/news/:id', NewsController.update)
    .delete('/news', NewsController.delete)

    // Events
    .get('/events', EventsController.getSome)
    .get('/events/:id', EventsController.getOne)

    // Competitions
    .get('/competitions', CompetitionsController.getSome)
    // .get('/competitions/:id', CompetitionsController.getOne)
    .get('/competitions/:id/sections', CompetitionsController.getSections)

    // Tags
    .get('/tags', TagsController.getSome)

    // Themes
    .get('/themes', ThemesController.getSome)

    // Login
    .post('/login', SecureController.login);

module.exports = router;
