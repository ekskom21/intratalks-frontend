import React from 'react';
import { useLocation } from 'react-router-dom';

export const AuthenticationCallback: React.FC = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);

    return (
        <h1>
            Code: {params.get('code')}, Nonce: {params.get('state')}
        </h1>
    );
};
