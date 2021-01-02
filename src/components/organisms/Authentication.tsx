import React from 'react';

import { useMutation } from '@apollo/client';
import { useHistory, useLocation } from 'react-router-dom';

import { SIGN_IN } from '../../api/mutations/signIn';
import { Tokens } from '../../generated/graphql';

export type TimestampedTokens = Tokens & {
    timestamp: string;
};

export const AuthenticationCallback: React.FC = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);

    const code = params.get('code');

    const history = useHistory();

    const [runMutation, { loading, data, error, called }] = useMutation<{ signIn: Tokens }>(SIGN_IN, {
        variables: {
            code,
        },
    });

    const nonce = params.get('state');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const storedNonce = sessionStorage.getItem('nonce')!;

    if (nonce != storedNonce) {
        throw new Error('Nonce has been modified.');
    }

    // If the nonce hasn't been altered, sign us in
    if (!error && !loading && !called) runMutation();

    if (error) {
        return <span>Huff og huff, det skjedde visst noe rart: {error.message}</span>;
    }

    if (loading) {
        return <span>Logger deg inn!</span>;
    }

    if (data) {
        localStorage.setItem('auth_data', JSON.stringify({ ...data.signIn, timestamp: new Date() }));
        history.push('/');
    }

    return null;
};
