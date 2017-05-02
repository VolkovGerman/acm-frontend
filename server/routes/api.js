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
    .post('/events', EventsController.add)
    .put('/events/:id', EventsController.update)
    .delete('/events', EventsController.delete)

    // Competitions
    .get('/competitions', CompetitionsController.getSome)
    // .get('/competitions/:id', CompetitionsController.getOne)
    .get('/competitions/:id/sections', CompetitionsController.getSections)

    // Tags
    .get('/tags', TagsController.getSome)
    .get('/tags/:id', TagsController.getOne)
    .post('/tags', TagsController.add)
    .put('/tags/:id', TagsController.update)
    .delete('/tags', TagsController.delete)

    // Themes
    .get('/themes', ThemesController.getSome)
    .get('/themes/:id', ThemesController.getOne)
    .post('/themes', ThemesController.add)
    .put('/themes/:id', ThemesController.update)
    .delete('/themes', ThemesController.delete)

    // Login
    .get('/login', SecureController.login)
    .get('/logout', SecureController.logout);

module.exports = router;
