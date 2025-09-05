import React from 'react';

import { createRoot } from 'react-dom/client';

// import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider } from '@mui/material/styles';
import App from '../App';

// import theme from './theme';

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