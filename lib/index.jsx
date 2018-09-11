import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

// eslint-disable-next-line no-undef
const appContainer = document.getElementById('app');

if (!appContainer) {
    throw new Error('Unable to mount');
}

ReactDOM.render(<App />, appContainer);
