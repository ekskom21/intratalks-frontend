import React from 'react';

import { useQuery } from '@apollo/client';

import ComingEvent from '../molecules/ComingEvent';
import { ASSIGNED_EVENTS, AssignedEvents } from '../../api/queries/assignedEvents';

const ComingEvents: React.FC = () => {
    const { data, loading, error } = useQuery<AssignedEvents>(ASSIGNED_EVENTS);

    if (loading) {
        return <p className="mt-4">Laster kommende arrangementer…</p>;
    }

    if (error) {
        return (
            <p className="mt-4">
                Kunne ikke laste kommende arrangementer: {error.message} Vennligst forsøk å laste inn siden på nytt.
            </p>
        );
    }

    if (!data) {
        return <p className="mt-4">Du har ingen kommende arrangementer.</p>;
    }

    return (
        <>
            <ComingEvent event={data.assignedEvents.breakfast} />
            <ComingEvent event={data.assignedEvents.lunch} />
            <ComingEvent event={data.assignedEvents.dinner} />
        </>
    );
};

export default ComingEvents;
