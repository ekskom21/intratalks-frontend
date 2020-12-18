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
