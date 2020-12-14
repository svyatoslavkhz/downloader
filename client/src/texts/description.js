import React from 'react';

export const description = language => {

    if (language==="ru"){
    return (
        <div className="description">
                    <div className="text"><h1>Скачать видео с Ютуба</h1>
                        <span>В жизни каждого пользователя интернета рано или поздно появляется желание а потом вопрос "Как скачать видео с ютуба?".
                            Наш сервис был создан специально для того, чтобы вы имели такую возможность, но мы предлагаем и больше, т.к. можно и скачать музыку из Ютуб видео при чем это совершенно бесплатно
                        </span>
                        </div>
                    <div className="question">
                    <ul itemscope="" itemtype="https://schema.org/FAQPage">
                        <li itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                            <h1 itemprop="name">🤗 Как скачать видео с Ютуба</h1>
                            <div class="accordion__content" itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <span itemprop="text">Для того чтобы скачать видео с Youtube вставьте ссылку в поле для ссылки, выберите формат и нажмите "Скачать"</span>
                            </div>
                        </li>
                        <li itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                            <h1 itemprop="name">🤗 Можно ли скачать MP3 из видео с Youtube</h1>
                            <div class="accordion__content" itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <span itemprop="text">Да, для этого вставьте ссылку на Youtube и выберите формат "MP3"</span>
                            </div>
                        </li>
                        <li itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                            <h1 itemprop="name">🤗 Скачивание видео из Youtube бесплатно?</h1>
                            <div class="accordion__content" itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <span itemprop="text">Да, наш сервис дает возможность скачать бесплатно видео из ютуб в ознакомительных целях</span>
                            </div>
                        </li>
                        <li itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                            <h1 itemprop="name">🤗 В каком формате можно скачать видео из Ютуба?</h1>
                            <div class="accordion__content" itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <span itemprop="text">При помощи нашего сайта есть возможность скачать бесплатно видео из ютуб в формате MP4 или музыку в формате MP3</span>
                            </div>
                        </li>
                    </ul>
                    </div>
        </div>
    )}
    else {
        return (
            <div className="description">
                    <div className="text"><h1>Download video from Youtube Free</h1>
                        <span>In the life of every Internet user, sooner or later, a desire appears and then the question "How to download a video from YouTube?"
                             Our service was created specifically for you to have this opportunity, but we offer more, because you can download music from YouTube video and it's completely free
                        </span>
                        </div>
                    <div className="question">
                    <ul itemscope="" itemtype="https://schema.org/FAQPage">
                        <li itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                            <h1 itemprop="name">🤗 How to download YouTube videos</h1>
                            <div class="accordion__content" itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <span itemprop="text">In order to download a video from Youtube, paste the link in the link field, select a format and click "Download"</span>
                            </div>
                        </li>
                        <li itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                            <h1 itemprop="name">🤗 Is it possible to download MP3 from Youtube videos</h1>
                            <div class="accordion__content" itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <span itemprop="text">Yes, to do this, paste the Youtube link and select the "MP3" format</span>
                            </div>
                        </li>
                        <li itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                            <h1 itemprop="name">🤗 Downloading videos from Youtube for free?</h1>
                            <div class="accordion__content" itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <span itemprop="text">Yes, our service allows you to download free YouTube videos for informational purposes</span>
                            </div>
                        </li>
                        <li itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                            <h1 itemprop="name">🤗 In what format can you download videos from YouTube?</h1>
                            <div class="accordion__content" itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                            <span itemprop="text">With the help of our site it is possible to download free YouTube videos in MP4 format or music in MP3 format</span>
                            </div>
                        </li>
                    </ul>
                    </div>
        </div>
        )
    }
}