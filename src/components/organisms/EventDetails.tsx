import { useQuery } from '@apollo/client';
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { EVENT, SpecificEvent } from '../../api/queries/eventDetails';

const EventDetails: React.FC = () => {
    const { data } = useQuery<SpecificEvent>(EVENT, {
        variables: {
            _id: 'abcdef',
        },
    });

    if (!data) return <span>loading...</span>;

    const { event } = data;

    return (
        <main className={classNames('p-4')}>
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

            <small className={classNames('dark:text-gray-300', 'text-sm', 'block')}>{event.event.time}</small>

            <h2 className={classNames('text-3xl')}>{event.event.title}</h2>

            <strong className={classNames('text-sm', 'font-bold')}>{event.event.location.name}</strong>

            <p className={classNames('mt-4')}>{event.event.description}</p>
        </main>
    );
};

export default EventDetails;
