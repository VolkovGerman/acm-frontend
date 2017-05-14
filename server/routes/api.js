const express = require('express');
const router = express.Router();
const config = require('../config/source');
const path = require('path');
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../public/static/images'))
    },
    filename: function (req, file, cb) {
        let ext = '';
        switch (file.mimetype) {
            case 'image/jpeg': {
                ext = 'jpeg';
                break;
            }
            case 'image/png': {
                ext = 'png';
                break;
            }
            case 'image/gif': {
                ext = 'gif';
                break;
            }
            case 'image/svg+xml': {
                ext = 'svg';
                break;
            }
        }
        const filename = `acm-static-${Date.now()}.${ext}`;
        cb(null, filename);
    }
});
const upload = multer({storage: storage});

const SecureController = require('../controllers/secure');
const ApiController = require('../controllers/api');
const NewsController = require('../controllers/api/news');
const EventsController = require('../controllers/api/events');
const CompetitionsController = require('../controllers/api/competitions');
const CompetitionSectionsController = require('../controllers/api/competitionSections');
const CompetitionPagesController = require('../controllers/api/competitionPages');
const TagsController = require('../controllers/api/tags');
const ThemesController = require('../controllers/api/themes');
const ImagesController = require('../controllers/api/images');

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
    .get('/competitions/:id', CompetitionsController.getOne)
    .post('/competitions', CompetitionsController.add)
    .put('/competitions/:id', CompetitionsController.update)
    .delete('/competitions', CompetitionsController.delete)

    // CompetitionSections
    .get('/competitions/:competition_id/sections', CompetitionSectionsController.getSome)
    .get('/competitions/:competition_id/sections-with-pages', CompetitionSectionsController.getSomeWithPages)
    .get('/competitions/:competition_id/sections/:id', CompetitionSectionsController.getOne)
    .post('/competitions/:competition_id/sections', CompetitionSectionsController.add)
    .put('/competitions/:competition_id/sections/:id', CompetitionSectionsController.update)
    .delete('/competitions/:competition_id/sections', CompetitionSectionsController.delete)

    // CompetitionPages
    .get('/competitions/:competition_id/sections/:section_id/pages', CompetitionPagesController.getSome)
    .get('/competitions/:competition_id/sections/:section_id/pages/:id', CompetitionPagesController.getOne)
    .post('/competitions/:competition_id/sections/:section_id/pages', CompetitionPagesController.add)
    .put('/competitions/:competition_id/sections/:section_id/pages/:id', CompetitionPagesController.update)
    .delete('/competitions/:competition_id/sections/:section_id/pages', CompetitionPagesController.delete)

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

    // Images
    .post('/images/news/upload', upload.single('file'), ImagesController.add)

    // Login
    .post('/login', SecureController.login);

module.exports = router;
