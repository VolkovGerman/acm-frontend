const config = require('../../config/source');
const request = require('request');
const fs = require('fs');

module.exports = {

    add(req, res, next) {

        request.post({
            url:'http://acm-backend.herokuapp.com/news/images/upload',
            formData: {
                file: fs.createReadStream(req.file.path)
            },
            json: true
        }, (error, response, body) => {
            if (error) {
                return console.error('upload failed:', error);
            }

            console.log(body);

            fs.unlink(req.file.path, (err) => {
                if (err) {
                    console.error(err);
                    next();
                }

                res.json({ location: `${config.baseUrl}${body.link}` });
            });
            
        });
    },

};

