const express = require('express');
const config = require('config');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const path = require('path');
app.use(cors());
    

    app.get('/api/info', async (req,res) => {

        try{ var URL = req.query.URL;
            let INFO = await ytdl.getInfo(URL);
            let title = INFO.videoDetails.title;
            let thumbnail = INFO.videoDetails.thumbnail.thumbnails[0].url;
            let author = INFO.videoDetails.ownerChannelName;
            res.json({title, author, thumbnail});
            }
        catch (e) {
            res.status(500).send('Что-то пошло не так')
        }
        });

        app.get('/api/download', async (req,res) => {
            
            try{
                var URL = req.query.URL;
                let format = req.query.format;
                let INFO = await ytdl.getInfo(URL);
                let title = encodeURIComponent('Video-mp3-download.fun - ' + INFO.videoDetails.title);

            res.header(`Content-Disposition`, `attachment; filename="${title}.${format}"`);

            ytdl(URL, {
            format, quality: 'highest'
            }).pipe(res);
            }
            catch (e) {
                res.status(500).send('Что-то пошло не так')
            }
        });

    if (process.env.NODE_ENV==='production'){
        app.use('/', express.static(path.join(__dirname, 'client', 'build')));

        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
        })
    }

    const PORT = config.get('port') || 5000;

    app.listen(PORT, () => {
        console.log(`Server Works !!! At port ${PORT}`);
    });