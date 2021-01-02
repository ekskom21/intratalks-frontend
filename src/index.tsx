import React from 'react';
import { render } from 'react-dom';

import { setContext } from '@apollo/client/link/context';

import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './components/organisms/Router';

import './index.css';

import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { TimestampedTokens } from './components/organisms/Authentication';
import { addSeconds, isPast } from 'date-fns';
import { Tokens } from './generated/graphql';

const authLink = setContext(async (_, { headers }) => {
    const tokens: TimestampedTokens | null = JSON.parse(localStorage.getItem('auth_data') ?? 'null');

    if (!tokens) return headers;

    // Has the access_token expired? If so we need to get a new one
    if (isPast(addSeconds(new Date(tokens.timestamp), tokens.expires_in))) {
        // Retrieve new access_token
        const resp = await fetch(`http://localhost:4000/`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                // Taken from the playground
                query: `mutation {\n  refresh(refresh_token: "${tokens.refresh_token}") {\n    access_token\n    id_token\n    refresh_token\n    expires_in\n  }\n}`,
            }),
        });

        const jsonResp: { data: { refresh: Tokens } } = await resp.json();

        // Update the local storage with the newly received token set
        localStorage.setItem('auth_data', JSON.stringify({ ...jsonResp.data.refresh, timestamp: new Date() }));

        return {
            headers: {
                ...headers,
                Authorization: `Bearer ${jsonResp.data.refresh.access_token}`,
                'X-User-ID': jsonResp.data.refresh.id_token,
            },
        };
    }

    return {
        headers: {
            ...headers,
            Authorization: `Bearer ${tokens.access_token}`,
            'X-User-ID': tokens.id_token,
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(createHttpLink({ uri: 'http://localhost:4000' })),
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
