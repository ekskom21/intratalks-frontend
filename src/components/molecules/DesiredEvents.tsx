import React from 'react';

import Select from 'react-select';
import classNames from 'classnames';
import { useQuery } from '@apollo/client';

import { AllCompanies, ALL_COMPANIES } from '../../api/queries/companies';
import { Event } from '../../generated/graphql';

const DesiredEvents: React.FC = () => {
    const { data, loading, error } = useQuery<AllCompanies>(ALL_COMPANIES);

    const events = React.useMemo(() => {
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

    if (loading) {
        return <p className="mt-4">Laster arrangementer…</p>;
    }

    if (error) {
        return (
            <p className="mt-4">
                Kunne ikke laste arrangementer: {error.message} Vennligst forsøk å laste inn siden på nytt.
            </p>
        );
    }

    return (
        <>
            <h2 className={classNames('text-2xl', 'font-bold', 'mt-4')}>Ønsker</h2>
            <small>Ønskene dine blir automatisk lagret.</small>

            <Select
                className={classNames('text-black', 'mt-2')}
                placeholder="Velg et frokostarrangement"
                options={events.BREAKFAST.map((event) => ({ label: event.title, value: event._id }))}
            />
            <Select
                className={classNames('text-black', 'mt-4')}
                placeholder="Velg et lunsjarrangement"
                options={events.LUNCH.map((event) => ({ label: event.title, value: event._id }))}
            />
            <Select
                className={classNames('text-black', 'mt-4')}
                placeholder="Velg et middagsarrangement"
                options={events.DINNER.map((event) => ({ label: event.title, value: event._id }))}
            />
        </>
    );
};

export default DesiredEvents;
