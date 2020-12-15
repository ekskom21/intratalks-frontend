import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './components/organisms/Router';

import './index.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
});

// Set nonce. Used for signing in with OAuth.
if (!sessionStorage.getItem('nonce')) {
    sessionStorage.setItem('nonce', String(Math.random() * 1e10));
}

render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Router>
                <AppRouter />
            </Router>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
