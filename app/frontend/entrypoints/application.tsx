import React from 'react';

import { createRoot } from 'react-dom/client';

import '../App.scss'

import App from '../App';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

console.log('Vite ⚡️ Rails');
console.log('Visit the guide for more information: ', 'https://vite-ruby.netlify.app/guide/rails');

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);