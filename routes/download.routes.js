const {Router} = require('express');
const ytdl = require('ytdl-core');
const router = Router();

router.get('/', async (req,res) => {
            
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

module.exports = router;