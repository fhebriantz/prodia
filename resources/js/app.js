require('./bootstrap');

import React,{useState} from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
const tokenNew = 'qwerty123'
const state = {
    tokenNew
}
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        return render(            
            <App {...props} />
        , el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
