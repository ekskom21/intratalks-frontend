import React from 'react';

import { useMutation, useQuery } from '@apollo/client';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

import { EVENT, SpecificEvent } from '../../api/queries/event';
import { RegisterInterest, REGISTER_INTEREST } from '../../api/mutations/registerInterest';
import { MutationRegisterInterestArgs } from '../../generated/graphql';
import { DesiredEvents as DesiredEventsT, DESIRED_EVENTS } from '../../api/queries/desiredEvents';
import { cancellationDeadlinePassed } from '../../utils/timeTranslator';

const timeTranslation = (time: SpecificEvent['event']['time']) =>
    ({ BREAKFAST: 'FROKOST', LUNCH: 'LUNSJ', DINNER: 'MIDDAG' }[time]);

const EventDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [registerInterest, { loading: mutationLoading }] = useMutation<
        RegisterInterest,
        MutationRegisterInterestArgs
    >(REGISTER_INTEREST);

    const { data } = useQuery<SpecificEvent>(EVENT, {
        variables: {
            _id: id,
        },
    });

    const {
        data: desiredEventsData,
        refetch: refetchDesiredEvents,
        loading: loadingDesiredEvents,
    } = useQuery<DesiredEventsT>(DESIRED_EVENTS);

    if (!data) return <span>Loading...</span>;

    const { event } = data;

    return (
        <>
            <Link to={`/company/${event.company._id}`}>
                <span
                    className={classNames(
                        'bg-gradient-to-r',
                        `from-${event.company.colors.primary}`,
                        `to-${event.company.colors.secondary}`,
                        'rounded-lg',
                        'mb-2',
                        'inline-block',
                        'bg-clip-text',
                        'text-transparent',
                        'font-extrabold',
                    )}
                >
                    {event.company.name} →
                </span>
            </Link>

            <small className={classNames('dark:text-gray-300', 'text-sm', 'block')}>
                {timeTranslation(event.time)}
            </small>

            <h2 className={classNames('font-bold', 'text-2xl')}>{event.title}</h2>

            <strong className={classNames('text-sm', 'font-bold')}>{event.location.name}</strong>

            <p className={classNames('mt-4')}>{event.description}</p>

            {cancellationDeadlinePassed ? null : mutationLoading || loadingDesiredEvents ? (
                <p className="mt-4">Laster…</p>
            ) : desiredEventsData ? (
                desiredEventsData.desiredEvents[
                    (event.time as string).toLowerCase() as 'breakfast' | 'lunch' | 'dinner'
                ]?._id === event._id ? (
                    <p className={classNames('font-extrabold', 'dark:text-green-400', 'text-green-500', 'mt-4')}>
                        Du har meldt din interesse for dette arrangementet.
                    </p>
                ) : (
                    <button
                        onClick={async () => {
                            await registerInterest({ variables: { event_id: event._id } });
                            await refetchDesiredEvents();
                        }}
                        className={classNames(
                            'font-extrabold',
                            'dark:text-green-400',
                            'text-green-500',
                            'mt-4',
                            'cursor-pointer',
                        )}
                    >
                        Jeg vil delta på dette arrangementet. →
                    </button>
                )
            ) : null}
        </>
    );
};

export default EventDetails;
