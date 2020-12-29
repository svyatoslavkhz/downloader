const {Router} = require('express');
const ytdl = require('ytdl-core');
const router = Router();

router.get('/', async (req,res) => {

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


module.exports = router;