import React from 'react';

import { useQuery } from '@apollo/client';
import classNames from 'classnames';
import { USER_REGISTERED, UserRegistered } from '../../api/queries/userRegistered';
import LoadingAndErrorWrapper from './LoadingAndErrorWrapper';

const TRANSLATION = {
    REGISTERED: {
        label: 'påmeldt',
        emoji: '✅',
        color: 'bg-green-400',
    },
    WAIT_LIST: {
        label: 'på venteliste til',
        emoji: '⚠️',
        color: 'bg-yellow-200',
    },
    NOT_REGISTERED: {
        label: 'ikke påmeldt',
        emoji: '❌',
        color: 'bg-red-400',
    },
};

const RegistrationBanner: React.FC = () => {
    const { data, loading, error } = useQuery<UserRegistered>(USER_REGISTERED);

    return (
        <LoadingAndErrorWrapper loading={loading} error={error} data={data}>
            {({ userRegistered }) => (
                <div
                    className={classNames(
                        'py-2',
                        'px-4',
                        'flex',
                        'rounded-md',
                        'w-full',
                        data ? TRANSLATION[userRegistered].color : ['dark:bg-white', 'bg-black'],
                        'text-white',
                        'dark:text-black',
                    )}
                >
                    <span>Du er {TRANSLATION[userRegistered].label} TechTalks 2021!</span>
                    <span className={classNames('ml-auto')}>
                        {data ? TRANSLATION[data.userRegistered].emoji : error ? '⛔️' : '⏳'}
                    </span>
                </div>
            )}
        </LoadingAndErrorWrapper>
    );
};

export default RegistrationBanner;
