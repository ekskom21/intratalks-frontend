import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './components/organisms/Router';

import './index.css';

render(
    <React.StrictMode>
        <Router>
            <AppRouter />
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);
