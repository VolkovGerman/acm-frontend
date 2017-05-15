const request = require("request");
const config = require('../../config/source');


module.exports = {

    add(req, res, next) {

        console.log(req.file);
        let formData = {
            file: req.file.buffer
        };

        request.post(
            {
                url: `${config.baseUrl}/news/images/upload`,
                formData: formData
            },
            (err, res, body) => {
                if (err) {
                    return console.error('upload failed:', err);
                }
                console.log('Upload successful! Server responded with:', body);
                res.json({location: res.link})
            });

    },

};
