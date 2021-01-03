import React from 'react';

import { ApolloError } from '@apollo/client';

type Props<T> = {
    loading: boolean;
    error?: ApolloError;
    data?: T;
    children: (data: T) => JSX.Element;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const LoadingAndErrorWrapper = <T,>(props: Props<T>) => {
    if (props.loading) {
        return (
            <div className="w-full px-4 py-2 font-bold bg-yellow-400 rounded-md dark:bg-yellow-500">
                ⏳ Vennligst vent<span className="animate-pulse">…</span>
            </div>
        );
    }

    if (props.error) {
        return (
            <div className="w-full px-4 py-2 bg-red-400 rounded-md dark:bg-red-500">
                ⛔️ Det oppsto en feil ved henting av dataen. {props.error.message}
            </div>
        );
    }

    if (!props.data) {
        return null;
    }

    return props.children(props.data);
};

export default LoadingAndErrorWrapper;
