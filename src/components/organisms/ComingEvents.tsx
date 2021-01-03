import React from 'react';

import { useQuery } from '@apollo/client';

import ComingEvent from '../molecules/ComingEvent';
import { ASSIGNED_EVENTS, AssignedEvents } from '../../api/queries/assignedEvents';
import LoadingAndErrorWrapper from '../molecules/LoadingAndErrorWrapper';

const ComingEvents: React.FC = () => {
    const { data: data, loading, error } = useQuery<AssignedEvents>(ASSIGNED_EVENTS);

    return (
        <LoadingAndErrorWrapper loading={loading} error={error} data={data}>
            {({ assignedEvents }) => (
                <>
                    <ComingEvent event={assignedEvents.breakfast} />
                    <ComingEvent event={assignedEvents.lunch} />
                    <ComingEvent event={assignedEvents.dinner} />
                </>
            )}
        </LoadingAndErrorWrapper>
    );
};

export default ComingEvents;
