import React, { useMemo } from 'react';

import Select from 'react-select';

import classNames from 'classnames';
import { useQuery } from '@apollo/client';
import { AllCompanies, ALL_COMPANIES } from '../../api/queries/companies';
import { Event } from '../../generated/graphql';

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

const Profile: React.FC = () => {
    const isRegistered: keyof typeof TRANSLATION = 'REGISTERED';

    const { data, loading, error } = useQuery<AllCompanies>(ALL_COMPANIES);

    const events = useMemo(() => {
        const baseMap = {
            BREAKFAST: [],
            LUNCH: [],
            DINNER: [],
        } as Record<'BREAKFAST' | 'LUNCH' | 'DINNER', Array<Event>>;

        if (!data) return baseMap;

        return data.companies
            .flatMap((company) => company.events)
            .reduce((prev, curr) => ({ ...prev, [curr.time]: prev[curr.time].concat(curr) }), baseMap);
    }, [data]);

    const signOut = () => {
        localStorage.clear();
        window.location.replace('/');
    };

    return (
        <>
            <div
                className={classNames(
                    'py-2',
                    'px-4',
                    'flex',
                    'rounded-md',
                    'w-full',
                    TRANSLATION[isRegistered].color,
                    'text-black',
                )}
            >
                <span>Du er {TRANSLATION[isRegistered].label} TechTalks 2021!</span>
                <span className={classNames('ml-auto')}>{TRANSLATION[isRegistered].emoji}</span>
            </div>

            {loading ? (
                <p className="mt-4">Laster arrangementer…</p>
            ) : error !== undefined ? (
                <p className="mt-4">
                    Kunne ikke laste arrangementer: {error.message}. Vennligst forsøk å laste inn siden på nytt.
                </p>
            ) : (
                <>
                    <h2 className={classNames('text-2xl', 'font-bold', 'mt-4')}>Ønsker</h2>
                    <small>
                        {isRegistered === 'REGISTERED'
                            ? 'Ønskene dine blir automatisk lagret.'
                            : 'Du må være påmeldt TechTalks for å registere ønskene dine.'}
                    </small>

                    <Select
                        isDisabled={isRegistered !== 'REGISTERED'}
                        className={classNames('text-black', 'mt-2')}
                        placeholder="Velg et frokostarrangement"
                        options={events.BREAKFAST.map((event) => ({ label: event.title, value: event._id }))}
                    />
                    <Select
                        isDisabled={isRegistered !== 'REGISTERED'}
                        className={classNames('text-black', 'mt-4')}
                        placeholder="Velg et lunsjarrangement"
                        options={events.LUNCH.map((event) => ({ label: event.title, value: event._id }))}
                    />
                    <Select
                        isDisabled={isRegistered !== 'REGISTERED'}
                        className={classNames('text-black', 'mt-4')}
                        placeholder="Velg et middagsarrangement"
                        options={events.DINNER.map((event) => ({ label: event.title, value: event._id }))}
                    />
                </>
            )}

            <button
                onClick={signOut}
                className={classNames('mt-4', 'bg-red-700', 'text-white', 'p-2', 'rounded-md', 'font-bold')}
            >
                Logg ut
            </button>
        </>
    );
};
export default Profile;
