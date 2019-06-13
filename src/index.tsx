import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {withSSR} from "react-i18next";
import WebFont from 'webfontloader';

const ExtendedApp = withSSR()(App as any);

render(<ExtendedApp initialLanguage='de' initialI18nStore={{}} />, document.getElementById('root'));

WebFont.load({
    custom: {
        families: ['Roboto:300,400,500'],
        urls: [
            'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap'
        ]
    }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
