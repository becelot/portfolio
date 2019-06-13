import React from 'react';
import { render } from 'react-snapshot';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {withSSR} from "react-i18next";
import WebFont from 'webfontloader';

const ExtendedApp = withSSR()(App as any);

render(<ExtendedApp initialLanguage='de' initialI18nStore={{
    "header": {
        "about-me": "Über mich",
        "home": "Home",
        "projects": "Projekte",
        "skills": "Erfahrung"
    },
    "projects": {
        "about": "Ich habe über die Jahre eine Vielzahl an Applikationen geschrieben und veröffentlicht. Darunter fallen nicht nur Web Applikationen, sondern auch Android/iOS und .NET Anwendungen.",
        "dht": {
            "name": "Deck History Tracker",
            "short_description": "Eine <a href=\"https://twitch.tv\">Twitch.tv</a> Erweiterung, die vom Streamer gespielte Decks veranschaulicht."
        },
        "dslviz": {
            "name": "DSLViz",
            "short_description": "Ein auf Angular basierendes Webframework zur Visualisierung von Domänenspezifischen Sprachen."
        },
        "live_nda": "Eine Live Preview ist wegen NDA nicht zugänglich.",
        "read_more": "Mehr Informationen",
        "source_nda": "Der Source Code ist wegen NDA nicht zugänglich."
    }
}} />, document.getElementById('root'));

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
