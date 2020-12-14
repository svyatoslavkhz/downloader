import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        document.title = "Скачать видео и MP3 с Ютуба Бесплатно - Video-MP3-download.fun"
        var language = window.navigator ? (window.navigator.language ||
            window.navigator.systemLanguage ||
            window.navigator.userLanguage) : "ru";
        language = language.substr(0, 2).toLowerCase();

        if (language) {
            //<Redirect to={`/${language}`} />
            return <Redirect to="/ru" />
        }

        return ( 
            <div>Main page</div>
            );
    }
}
 
export default Main;