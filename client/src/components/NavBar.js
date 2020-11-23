import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Downloader from './Downloader';
import Main from '../pages/main';
import Rules from '../pages/about';



export const NavBar = () => {
    
    var language = window.navigator ? (window.navigator.language ||
        window.navigator.systemLanguage ||
        window.navigator.userLanguage) : "ru";
    language = language.substr(0, 2).toLowerCase();
    
    return (
    <Router>
        <nav>
          <ul>
            <li><a href="/ru">Скачать видео и музыку с Youtube Бесплатно</a></li>
          </ul>
        </nav>

        <Switch>
            <Route exact path="/">
                <Main />
            </Route>
            <Route path="/rules" exact>
                <Rules />
            </Route>
            <Route path="/:language">
                <Downloader />
            </Route>
        </Switch>
      </Router>
      )
};