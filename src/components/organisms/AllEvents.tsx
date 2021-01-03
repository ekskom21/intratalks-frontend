import React from 'react';

import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { DesiredEvents as DesiredEventsT, DESIRED_EVENTS } from '../../api/queries/desiredEvents';
import { AllEvents as AllEventsT, ALL_EVENTS } from '../../api/queries/events';
import EventRow from '../molecules/EventRow';
import { useSignedIn } from '../../contexts/signedIn';
import LoadingAndErrorWrapper from '../molecules/LoadingAndErrorWrapper';
import { EventTime } from '../../generated/graphql';

const AllEvents: React.FC = () => {
    const { data, loading, error } = useQuery<AllEventsT>(ALL_EVENTS);
    const { data: desiredEventsData } = useQuery<DesiredEventsT>(DESIRED_EVENTS);

    const isSignedIn = useSignedIn();

    return (
        <LoadingAndErrorWrapper loading={loading} error={error} data={data}>
            {({ events }) => (
                <>
                    <h2 className="title-1">Alle arrangementer</h2>
                    {isSignedIn ? (
                        <p>
                            Her kan du se alle arrangementene i årets utgave av TechTalks. For å legge inn ønsker for
                            hvilke arrangementer du vil delta på kan du enten: 1) gå inn på et arrangement og trykke på
                            &quot;Jeg vil delta på dette arrangementet&quot;, eller 2){' '}
                            <Link className="text-blue-500 dark:text-blue-400" to="/profile">
                                gå til profil-siden
                            </Link>{' '}
                            og velge fra rullegardinmenyene der.
                        </p>
                    ) : (
                        <p>For å velge ønskede arrangementer til TechTalks må du først logge inn.</p>
                    )}

                    <h2 className="mt-4 title-2">Frokost (10:00-12:00)</h2>
                    <EventRow
                        events={events.filter((e) => e.time === EventTime.Breakfast)}
                        desiredId={desiredEventsData?.desiredEvents.breakfast?._id}
                    />

                    <h2 className="mt-4 title-2">Lunsj (14:00-16:30)</h2>
                    <EventRow
                        events={events.filter((e) => e.time === EventTime.Lunch)}
                        desiredId={desiredEventsData?.desiredEvents.lunch?._id}
                    />

                    <h2 className="mt-4 title-2">Middag (19:00-23:59)</h2>
                    <EventRow
                        events={events.filter((e) => e.time === EventTime.Dinner)}
                        desiredId={desiredEventsData?.desiredEvents.dinner?._id}
                    />
                </>
            )}
        </LoadingAndErrorWrapper>
    );
};

export default AllEvents;
