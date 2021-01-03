import React from 'react';

import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { DesiredEvents as DesiredEventsT, DESIRED_EVENTS } from '../../api/queries/desiredEvents';
import { AllCompanies, ALL_COMPANIES } from '../../api/queries/companies';
import SmallEvent from '../atoms/SmallEvent';
import { useSignedIn } from '../../contexts/signedIn';
import LoadingAndErrorWrapper from '../molecules/LoadingAndErrorWrapper';

const AllEvents: React.FC = () => {
    const { data, loading, error } = useQuery<AllCompanies>(ALL_COMPANIES);
    const { data: desiredEventsData } = useQuery<DesiredEventsT>(DESIRED_EVENTS);

    const isSignedIn = useSignedIn();

    return (
        <LoadingAndErrorWrapper loading={loading} error={error} data={data}>
            {({ companies }) => (
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

                    {/* TODO: Abstract out to own molecule */}
                    <h2 className="mt-4 title-2">Frokost (10:00-12:00)</h2>
                    <div className="flex max-w-full pb-2 overflow-auto flex-nowrap">
                        {companies
                            .flatMap((c) => c.events.map((e) => ({ event: e, company: c })))
                            .filter(({ event: { time } }) => time === 'BREAKFAST')
                            .sort(({ event: event1 }, { event: event2 }) =>
                                event1._id === desiredEventsData?.desiredEvents.breakfast?._id
                                    ? -1
                                    : event2._id === desiredEventsData?.desiredEvents.breakfast?._id
                                    ? 1
                                    : 0,
                            )
                            .map(({ event, company }) => (
                                <SmallEvent
                                    event={event}
                                    company={company}
                                    key={event._id}
                                    isDesiredEvent={event._id === desiredEventsData?.desiredEvents.breakfast?._id}
                                />
                            ))}
                    </div>
                    <h2 className="mt-4 title-2">Lunsj (14:00-16:30)</h2>
                    <div className="flex max-w-full pb-2 overflow-auto flex-nowrap">
                        {companies
                            .flatMap((c) => c.events.map((e) => ({ event: e, company: c })))
                            .filter(({ event: { time } }) => time === 'LUNCH')
                            .sort(({ event: event1 }, { event: event2 }) =>
                                event1._id === desiredEventsData?.desiredEvents.lunch?._id
                                    ? -1
                                    : event2._id === desiredEventsData?.desiredEvents.lunch?._id
                                    ? 1
                                    : 0,
                            )
                            .map(({ event, company }) => (
                                <SmallEvent
                                    event={event}
                                    company={company}
                                    key={event._id}
                                    isDesiredEvent={event._id === desiredEventsData?.desiredEvents.lunch?._id}
                                />
                            ))}
                    </div>
                    <h2 className="mt-4 title-2">Middag (19:00-23:59)</h2>
                    <div className="flex max-w-full pb-2 overflow-auto flex-nowrap">
                        {companies
                            .flatMap((c) => c.events.map((e) => ({ event: e, company: c })))
                            .filter(({ event: { time } }) => time === 'DINNER')
                            .sort(({ event: event1 }, { event: event2 }) =>
                                event1._id === desiredEventsData?.desiredEvents.dinner?._id
                                    ? -1
                                    : event2._id === desiredEventsData?.desiredEvents.dinner?._id
                                    ? 1
                                    : 0,
                            )
                            .map(({ event, company }) => (
                                <SmallEvent
                                    event={event}
                                    company={company}
                                    key={event._id}
                                    isDesiredEvent={event._id === desiredEventsData?.desiredEvents.dinner?._id}
                                />
                            ))}
                    </div>
                </>
            )}
        </LoadingAndErrorWrapper>
    );
};

export default AllEvents;
