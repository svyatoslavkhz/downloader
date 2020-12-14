import React from 'react';
import {Link} from "react-router-dom";

export const text = (section, language) => {

    if (language==='ru'){
        switch (section) {
            case 'title':
                return "Скачать видео и MP3 с Youtube Бесплатно - Video-MP3-download.fun";
            case 'metaTitle':
                return 'Скачать видео MP4 и музыку из видео в MP3 формате с Ютуба ✅Бесплатно ✅Быстро"';
            case 'link':
                return 'Скачать видео и музыку с Youtube Бесплатно';
            case 'button':
                return "СКАЧАТЬ";
            case 'rules':
                return 'Используя наш сервис, вы соглашаетесь с ';
            case 'linkRules':
                return 'Правилами использования';
        }
    }
    else {
        switch (section) {
            case 'title':
                return "Download video and MP3 from Youtube Free - Video-MP3-download.fun";
            case 'metaTitle':
                return 'Download MP4 videos and music from videos in MP3 format from YouTube ✅Free ✅Fast "';
            case 'link':
                return 'Download video and music from Youtube Free';
            case 'button':
                return 'DOWNLOAD';
            case 'rules':
                    return 'By using our service, you agree to ';
            case 'linkRules':
                    return 'Terms of use';
        }
    }
}

