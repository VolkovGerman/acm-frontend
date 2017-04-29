const swaggerJSDoc = require('swagger-jsdoc');

// swagger definition
const swaggerDefinition = {
    info: {
        title: 'ACM BSUIR API',
        version: '1.0.0',
        description: 'Demonstrating how to describe a RESTful API with Swagger',
    },
    host: 'localhost:3001',
    basePath: '/api/',
};

// options for the swagger docs
const options = {
    // import swaggerDefinitions
    swaggerDefinition,

    // path to the API docs
    apis: [
        `${__dirname}/../controllers/**/*.js`,
        `${__dirname}/../models/**/*.js`
    ],
};

module.exports = swaggerJSDoc(options);