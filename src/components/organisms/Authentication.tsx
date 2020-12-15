import React from 'react';
import { useLocation } from 'react-router-dom';

export const AuthenticationCallback: React.FC = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);

    const nonce = params.get('state');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const storedNonce = sessionStorage.getItem('nonce')!;

    const code = params.get('code');

    if (nonce != storedNonce) {
        throw new Error('Nonce has been modified.');
    }

    return <h1>Code: {code}</h1>;
};
