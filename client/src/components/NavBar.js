import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Downloader from './Downloader';
import {text} from '../texts/all';
import Main from '../pages/main';
import Rules from '../pages/about';



export const NavBar = param => {

    return (
        <Router>
            <nav>
              <ul>
                <li><a href={`/${param.language}`}>{text('link', param.language)}</a></li>
                <li>
                    {param.language==='ru' ? <a href="/en">EN</a> : <a href="/ru">RU</a>}
                </li>
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
                    <Downloader 
                        language={param.language}
                    />
                </Route>
            </Switch>
          </Router>
          )

};