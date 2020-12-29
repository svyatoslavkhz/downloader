const express = require('express');
const config = require('config');
const cors = require('cors');
const app = express();
const path = require('path');
app.use(cors());
var https = require( "https" );
const fs = require( "fs" );

    app.use('/api/info', require('./routes/info.routes'));
    app.use('/api/download', require('./routes/download.routes'));

    if (process.env.NODE_ENV==='production'){
        app.use (function (req, res, next) {
            if (req.secure) {
                    next();
            } else {
                    res.redirect(301,'https://' + req.headers.host + req.url);
            }
        });
        app.use('/', express.static(path.join(__dirname, 'client', 'build')));

        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
        })
        const httpsOptions = {
            key: fs.readFileSync("private.key"),
            cert: fs.readFileSync("certificate.crt")
        }
    
        https.createServer(httpsOptions, app).listen(443);
    }

    const PORT = config.get('port') || 5000;

    app.listen(PORT, () => {
        console.log(`Server Works !!! At port ${PORT}`);
    });